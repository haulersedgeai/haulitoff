"use server";

import { Resend } from "resend";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/heic"];
const MAX_BYTES = 8 * 1024 * 1024;
const MAX_FILES = 5;

export type QuoteState = { ok: boolean; message: string } | null;

export async function submitQuote(_prev: QuoteState, form: FormData): Promise<QuoteState> {
  if ((form.get("website") as string)?.trim()) return { ok: true, message: "Thanks!" };

  const name = ((form.get("name") as string) || "").trim();
  const phone = ((form.get("phone") as string) || "").trim();
  const email = ((form.get("email") as string) || "").trim();
  const address = ((form.get("address") as string) || "").trim();
  const service = ((form.get("service") as string) || "").trim();
  const message = ((form.get("message") as string) || "").trim();

  if (!name || !phone) return { ok: false, message: "Name and phone are required." };

  const files = form.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0).slice(0, MAX_FILES);
  const attachments: { filename: string; content: Buffer }[] = [];
  for (const f of files) {
    if (!ALLOWED_TYPES.includes(f.type)) return { ok: false, message: `Photo type not allowed: ${f.name}` };
    if (f.size > MAX_BYTES) return { ok: false, message: `Photo too large (>8MB): ${f.name}` };
    attachments.push({ filename: f.name, content: Buffer.from(await f.arrayBuffer()) });
  }

  const html = `
<h2>New Haul It Off AZ Quote Request</h2>
<table cellpadding="6">
<tr><td><b>Name</b></td><td>${escape(name)}</td></tr>
<tr><td><b>Phone</b></td><td>${escape(phone)}</td></tr>
<tr><td><b>Email</b></td><td>${escape(email)}</td></tr>
<tr><td><b>Address</b></td><td>${escape(address)}</td></tr>
<tr><td><b>Service</b></td><td>${escape(service)}</td></tr>
<tr><td><b>Message</b></td><td>${escape(message).replace(/\n/g, "<br/>")}</td></tr>
<tr><td><b>Photos</b></td><td>${attachments.length} attached</td></tr>
</table>`;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_TO_EMAIL || "Haulitoffaz@gmail.com";
  const fromEmail = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    try {
      await mkdir("/tmp/haulitoff-quotes", { recursive: true });
      const id = `quote-${Date.now()}`;
      await writeFile(path.join("/tmp/haulitoff-quotes", `${id}.json`), JSON.stringify({ name, phone, email, address, service, message, files: attachments.map((a) => a.filename) }, null, 2));
      return { ok: true, message: "Thanks! Your quote request was received. We'll be in touch shortly." };
    } catch {
      return { ok: false, message: "Submit failed. Please call (520) 808-2268." };
    }
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || undefined,
      subject: `New Quote: ${name} — ${service || "General"}`,
      html,
      attachments,
    });
    return { ok: true, message: "Thanks! Your quote request was received. We'll be in touch shortly." };
  } catch {
    return { ok: false, message: "Send failed. Please call (520) 808-2268." };
  }
}

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
