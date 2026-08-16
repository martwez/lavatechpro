type IconProps = { className?: string }

const shared = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function PcHelpIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="6" y="7" width="36" height="23" rx="3" />
      <path d="M18 37h12M24 30v7" />
      <circle cx="35" cy="32" r="7" fill="var(--color-bg-alt)" />
      <path d="M35 28.5v2.2M35 35.3v0.01M31.8 32h2.2M37 32h0.01M32.7 29.7l1.5 1.5M35.8 32.8l1.5 1.5M32.7 34.3l1.5-1.5M35.8 31.2l1.5-1.5" />
    </svg>
  )
}

export function StarlinkIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <ellipse cx="19" cy="19" rx="13" ry="8" transform="rotate(-25 19 19)" />
      <circle cx="19" cy="19" r="2" fill="currentColor" stroke="none" />
      <path d="M19 27v11M13 38h12" />
      <path d="M30 11q4-2 7 1M33 7q6-3 11 2" strokeWidth="1.8" />
    </svg>
  )
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M14 18v-6h7" />
      <rect x="8" y="18" width="22" height="14" rx="7" />
      <circle cx="29" cy="25" r="5.5" />
      <circle cx="29" cy="25" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="6" y="9" width="36" height="28" rx="3" />
      <path d="M6 17h36" />
      <circle cx="11.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <path d="M13 24h10M13 29h16M13 34h7" />
    </svg>
  )
}

export function Printer3DIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M10 10h28M10 10v20M38 10v20" />
      <path d="M14 34h20" />
      <rect x="20" y="13" width="8" height="5" rx="1.5" />
      <path d="M24 18v4" />
      <path d="M18 26l6-3 6 3v6l-6 3-6-3z" />
      <path d="M18 26l6 3 6-3" />
    </svg>
  )
}
