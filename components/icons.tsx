import type { SVGProps } from "react";

type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

function svgProps({ size = 24, className }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
    fill: "currentColor",
  };
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M13.64 10.4 21.16 1.5h-1.78l-6.53 7.72L7.66 1.5H1.02l7.9 11.5L1.02 22.5h1.78l6.9-8.15 5.52 8.15h6.64l-8.2-12.1Zm-2.44 2.89-.8-1.15L3.6 2.83h2.73l5.13 7.35.8 1.15 6.68 9.56h-2.73l-5.44-7.6Z" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12S5.65 23.5 12 23.5 23.5 18.35 23.5 12 18.35 0.5 12 0.5Zm5.34 16.06a0.75 0.75 0 0 1-1.03 0.25c-2.82-1.72-6.37-2.11-10.55-1.16a0.75 0.75 0 1 1-0.33-1.46c4.58-1.04 8.5-0.59 11.66 1.34a0.75 0.75 0 0 1 0.25 1.03Zm1.36-3.03a0.94 0.94 0 0 1-1.29 0.31c-3.23-1.98-8.15-2.56-11.97-1.4a0.94 0.94 0 1 1-0.55-1.8c4.37-1.32 9.8-0.68 13.5 1.6a0.94 0.94 0 0 1 0.31 1.29Zm0.12-3.16C15.02 8.2 8.9 8 5.42 9.05a1.13 1.13 0 1 1-0.65-2.16c3.99-1.21 10.7-0.98 14.93 1.53a1.13 1.13 0 1 1-1.15 1.94Z" />
    </svg>
  );
}

export function MateIcon(props: IconProps) {
  const { size = 24, className, strokeWidth = 1.8 } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7.25" y="6.5" width="9.5" height="12" rx="4.75" />
      <path d="M7.6 9.3h8.8" />
      <path d="M13.2 6.7 15.6 3.3" />
      <circle cx="16" cy="2.8" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
