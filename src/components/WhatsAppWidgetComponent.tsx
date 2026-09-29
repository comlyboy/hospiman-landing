"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppWidgetComponent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  if (pathname.startsWith("/app") || pathname.startsWith("/admin")) return null;

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    window.open(buildWhatsAppLink(siteConfig.whatsappPhoneDigits, trimmed), "_blank");
    setMessage("");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-9998 bg-brand-900/40 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed right-4 bottom-6 z-9999 md:right-6">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#1DA851] text-white shadow-[0_16px_32px_-10px_rgba(33,192,99,0.6)] transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-8 w-8 fill-current" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 bottom-18 w-[calc(100vw-2rem)] max-w-85 overflow-hidden rounded-3xl border border-brand-900/8 bg-white shadow-[0_32px_64px_-16px_rgba(7,17,31,0.35)]">
            <div className="flex items-center gap-3 bg-[#075E54] p-4 text-white">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/15">
                <Image src="/hospiman-mark.png" alt="" width={44} height={44} />
              </div>

              <div className="flex-1">
                <h4 className="font-semibold">Hospiman Support</h4>
                <p className="text-xs text-green-200">● Typically replies within a few minutes</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 bg-[#ECE5DD] bg-[radial-gradient(circle,#ffffff55_1px,transparent_1px)] bg-size-[20px_20px] p-5">
              <div className="flex">
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm shadow-sm">
                  👋 Welcome to Hospiman!
                  <p className="mt-2 text-gray-600">Need help with:</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>🗓️ Booking a demo</li>
                    <li>💳 Billing &amp; pricing</li>
                    <li>🧩 Module questions</li>
                    <li>🚀 Getting started</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-gray-50 px-3 py-2 transition-colors duration-200 focus-within:border-[#1DA851]">
                <form
                  className="flex flex-1 items-center gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSend();
                  }}
                >
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Write us a message..."
                    aria-label="Message"
                    className="max-h-40 min-h-10 flex-1 resize-none overflow-y-auto bg-transparent py-2 outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={!message.trim()}
                    className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1DA851] text-white transition-colors duration-200 hover:bg-[#178f47] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 20l18-8L3 4v6l12 2-12 2v6z" />
                    </svg>
                  </button>
                </form>
              </div>
              <p className="mt-3 text-center text-xs text-gray-400 italic">Messages will open in WhatsApp</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
