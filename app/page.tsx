import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { VideoSection } from "@/components/sections/video-section";
import { StaySystem } from "@/components/sections/stay-system";
import { UseCases } from "@/components/sections/use-cases";
import { Tokenomics } from "@/components/sections/tokenomics";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TokenSupply } from "@/components/sections/token-supply";
import { Whitepaper } from "@/components/sections/whitepaper";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <Hero />
        <Stats />
        <VideoSection />
        <StaySystem />
        <UseCases />
        <Tokenomics />
        <HowItWorks />
        <TokenSupply />
        <Whitepaper />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
