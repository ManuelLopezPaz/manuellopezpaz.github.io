import {
  ChartLine,
  Gauge,
  GraduationCap,
  Mail,
  TrendingUp,
  Trophy,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MateIcon, XIcon } from "@/components/icons";
import type { BadgeItem, Project, SocialItem, StatItem } from "@/lib/types";

export const name = "Manuel Lopez Paz";
export const email = "imanuellopezpaz@gmail.com";

export const institutionBadges: BadgeItem[] = [
  {
    id: "university",
    label: "VU Amsterdam",
    href: "https://vu.nl/en/education/bachelor/econometrics-and-operations-research",
    imageSrc: "/logos/vu-amsterdam.png",
  },
];

export const uadeBadge: BadgeItem = {
  id: "uade",
  label: "UADE",
  href: "https://www.uade.edu.ar/facultad-de-ciencias-economicas/doble-titulacion-en-administracion-de-empresas-y-comercio-internacional/plan-de-estudios/",
  imageSrc: "/logos/uade.jpg",
};

export const heroIntro = {
  before: "I am an Econometrics & Operations Research student at",
  after: "interested in dynamic stochastic optimization and modeling under uncertainty.",
};

export const experienceBadges: BadgeItem[] = [
  {
    id: "enduro-park",
    label: "Enduro Park Argentina — Event Operations",
    href: "https://enduroparkargentina.com/",
    imageSrc: "/logos/enduro-park.png",
  },
  {
    id: "sayani",
    label: "Fundación Sayani — Data Management",
    href: "https://sayani.org.ar/",
    imageSrc: "/logos/sayani.png",
  },
  {
    id: "ruda",
    label: "RUDA — Co-Founder",
    href: "",
    imageSrc: "/logos/ruda.jpg",
  },
];

export const projectBadges: BadgeItem[] = [
  {
    id: "laliga-project",
    label: "Does the Transfer Market Reward Performance or Potential? (La Liga)",
    href: "https://github.com/ManuelLopezPaz/laliga-market-value-analysis",
    icon: TrendingUp,
  },
  {
    id: "premier-league-project",
    label: "Did Crowd Absence Reduce Home Advantage? (Premier League)",
    href: "https://github.com/ManuelLopezPaz/premier-league-home-advantage",
    icon: ChartLine,
  },
];

export const meParagraphs = {
  workBefore: "I've worked across",
  workAfter: "motorsport event operations, data volunteering, and a student-run health initiative.",
  projectsLabel: "My latest projects:",
  studyingBefore: "I'm studying EOR at VU Amsterdam, previously Business Administration & International Trade at",
  studyingAfter: ". Off the clock: a football fan, always down for a stubborn round of truco or Catan.",
};

export const projects: Project[] = [
  {
    id: "mate-predictor",
    title: "The Mate Predictor",
    description:
      "A football match predictor built on a bivariate Poisson (Dixon-Coles style) model — classical statistics, not machine learning. Team attack/defense strengths estimated from real historical league data. Not built yet, but the plan (and the data) are ready.",
    status: "in-progress",
    tag: "Flagship · Classical stats",
    icon: MateIcon,
    flagship: true,
  },
  {
    id: "premier-league-home-advantage",
    title: "Did Crowd Absence Reduce Home Advantage?",
    description:
      "Regression analysis on 9,380 Premier League matches (2000–2025) to isolate the effect of empty stadiums during COVID-19. Found a partial decline in home advantage.",
    status: "done",
    href: "https://github.com/ManuelLopezPaz/premier-league-home-advantage",
    tag: "Independent research",
    icon: ChartLine,
  },
  {
    id: "laliga-market-value",
    title: "Does the Transfer Market Reward Performance or Potential?",
    description:
      "Scraped and merged 2,679 player-seasons from understat.com and Transfermarkt to model La Liga transfer value with OLS regression. The market pays for potential — value peaks at 19–20, not the mid-twenties.",
    status: "done",
    href: "https://github.com/ManuelLopezPaz/laliga-market-value-analysis",
    tag: "Independent research",
    icon: TrendingUp,
  },
  {
    id: "advanced-ai-course",
    title: "Advanced AI course",
    description: "Coming soon — details to be decided.",
    status: "planned",
    tag: "Coming soon",
    icon: GraduationCap,
  },
  {
    id: "motorsport-ml",
    title: "ML for motorsport",
    description:
      "Machine learning applied to motorsport — pit-strategy analysis and race outcome prediction. Planned.",
    status: "planned",
    tag: "Planned",
    icon: Gauge,
  },
  {
    id: "first-hackathon",
    title: "First hackathon",
    description: "Looking for the first one — soon.",
    status: "planned",
    tag: "Planned",
    icon: Trophy,
  },
];

export const trackRecord: StatItem[] = [
  { id: "hackathons", label: "0 hackathons (the first one is on its way!)", icon: Trophy },
  { id: "research", label: "2 independent research projects", icon: ChartLine },
  { id: "experience", label: "3 hands-on experiences: motorsport, data, student org", icon: Briefcase },
];

export const socials: SocialItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manuellopezpaz/",
    icon: LinkedinIcon,
  },
  { id: "github", label: "GitHub", href: "https://github.com/ManuelLopezPaz", icon: GithubIcon },
  { id: "x", label: "X / Twitter", href: "https://x.com/manulopezpaz", icon: XIcon },
  { id: "email", label: "Email", href: `mailto:${email}`, icon: Mail },
];

export const spotifyProfileUrl = "https://open.spotify.com/user/lpmanuriver";

export const closingCopy = {
  heading: "Want to say hi?",
  body: "Have a sports + data + decisions project? Looking for someone for research or to build something applied to sports? Let's talk.",
  ctaLabel: "Let's talk",
  ctaHref: `mailto:${email}`,
};
