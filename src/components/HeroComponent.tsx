"use client";

import { useSearchParams } from "next/navigation";
import HeroClassicComponent from "@/components/HeroClassicComponent";
import HeroModernComponent from "@/components/HeroModernComponent";

export default function HeroComponent() {
  const searchParams = useSearchParams();
  const useModernHero = searchParams.get("hero") === "1";

  return useModernHero ? <HeroModernComponent /> : <HeroClassicComponent />;
}
