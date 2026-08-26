export type IconComponent = React.ComponentType<{
  className?: string;
  size?: number;
  strokeWidth?: number;
}>;

export type BadgeItem = {
  id: string;
  label: string;
  href: string;
  icon?: IconComponent;
  imageSrc?: string;
  bg?: string;
};

export type ProjectStatus = "done" | "in-progress" | "planned";

export type Project = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  href?: string;
  tag?: string;
  icon: IconComponent;
  flagship?: boolean;
};

export type SocialItem = {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
};

export type StatItem = {
  id: string;
  label: string;
  icon: IconComponent;
};
