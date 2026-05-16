import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { PHONE_RAW } from "@/lib/utils";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border shadow-2xl">
      <div className="grid grid-cols-3">
        <a href={`tel:${PHONE_RAW}`} className="flex flex-col items-center justify-center py-3 text-navy hover:bg-cream">
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs font-bold">Call</span>
        </a>
        <a href={`sms:${PHONE_RAW}`} className="flex flex-col items-center justify-center py-3 text-navy hover:bg-cream border-x border-border">
          <MessageSquare className="h-5 w-5 mb-1" />
          <span className="text-xs font-bold">Text</span>
        </a>
        <Link href="/get-a-quote" className="flex flex-col items-center justify-center py-3 bg-brand text-white hover:bg-brand-dark">
          <FileText className="h-5 w-5 mb-1" />
          <span className="text-xs font-bold">Quote</span>
        </Link>
      </div>
    </div>
  );
}
