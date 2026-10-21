export const CONTACT_MAX_FILES = 3;
export const CONTACT_MAX_FILE_BYTES = 5 * 1024 * 1024;
export const CONTACT_ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "text/plain",
] as const;

export const CONTACT_ACCEPT = ".jpg,.jpeg,.png,.webp,.gif,.pdf,.txt";

const CONTACT_ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".pdf",
  ".txt",
]);

type AllowedType = (typeof CONTACT_ALLOWED_TYPES)[number];

export function isAllowedContactFileType(type: string): type is AllowedType {
  return (CONTACT_ALLOWED_TYPES as readonly string[]).includes(type);
}

/** MIME when present; otherwise fall back to extension (empty type is common for PDFs). */
export function isAllowedContactFile(file: {
  type: string;
  name: string;
}): boolean {
  if (file.type && isAllowedContactFileType(file.type)) {
    return true;
  }

  const dot = file.name.lastIndexOf(".");
  if (dot < 0) {
    return false;
  }

  const ext = file.name.slice(dot).toLowerCase();
  return CONTACT_ALLOWED_EXTENSIONS.has(ext);
}

export function safeAttachmentName(name: string): string {
  const base = name.replace(/[/\\?%*:|"<>]/g, "_").trim();
  return base.slice(0, 120) || "attachment";
}
