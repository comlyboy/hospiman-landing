"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { clientLogos } from "@/lib/clients-data";

export default function ClientsMarqueeComponent() {
  return (
    <Marquee autoFill pauseOnHover speed={36} gradient={false}>
      {clientLogos.map((client) => (
        <div
          key={client.name}
          className="mx-3 flex h-20 w-44 shrink-0 items-center justify-center rounded-lg border border-line bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-md"
        >
          <Image
            src={client.src}
            alt={client.name}
            width={client.width}
            height={client.height}
            style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>
      ))}
    </Marquee>
  );
}
