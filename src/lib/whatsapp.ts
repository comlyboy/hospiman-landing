const websiteSignature = "_— Sent from the Hospiman website_";

export function buildWhatsAppLink(phoneDigits: string, message: string): string {
  const fullMessage = `${message}\n\n\n${websiteSignature}`;
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(fullMessage)}`;
}
