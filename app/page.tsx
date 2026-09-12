import { Hero } from "@/components/Hero";
import { MatePredictorWidget } from "@/components/MatePredictorWidget";
import { MeSection } from "@/components/MeSection";
import { SocialsSection } from "@/components/SocialsSection";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col">
      <Hero />
      <MeSection />
      <SocialsSection />
      <MatePredictorWidget />
    </main>
  );
}
