import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_DISPLAY = "(520) 808-2268";
export const PHONE_RAW = "+15208082268";
export const EMAIL = "Haulitoffaz@gmail.com";
export const ADDRESS = "7315 N Oracle Rd, Tucson, AZ 85704";
export const BUSINESS_NAME = "Haul It Off AZ";
export const BUSINESS_FULL = "Haul It Off Junk Removal";
export const SITE_URL = process.env.SITE_URL || "https://www.haulitoffaz.com";
export const FB_URL = "https://www.facebook.com/haulitoffaz/";
export const IG_URL = "https://www.instagram.com/haulitoffaz/";
