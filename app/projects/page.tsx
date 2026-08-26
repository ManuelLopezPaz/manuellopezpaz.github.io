import Link from "next/link";
import { MatePredictorWidget } from "@/components/MatePredictorWidget";
import { NowPlayingWidget } from "@/components/NowPlayingWidget";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-6">
        <Link
          href="/"
          className="text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          ← Back
        </Link>
      </div>
      <ProjectsSection />
      <MatePredictorWidget />
      <NowPlayingWidget />
    </main>
  );
}
