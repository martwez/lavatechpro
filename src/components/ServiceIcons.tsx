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

export function PhoneHelpIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="6" y="9" width="22" height="30" rx="3" />
      <path d="M13 15h8" strokeWidth="1.8" />
      <rect x="24" y="19" width="15" height="25" rx="3" fill="var(--color-bg-alt)" />
      <circle cx="31.5" cy="40" r="1.3" fill="currentColor" stroke="none" />
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

export function InstallIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M10 30l14-20 14 20z" />
      <path d="M6 38h36" />
      <path d="M18 30v8M30 30v8" />
    </svg>
  )
}

export function TroubleshootIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="7" />
      <path d="M24 8v8M24 32v8M8 24h8M32 24h8" />
      <path d="M13.5 13.5l5.7 5.7M28.8 28.8l5.7 5.7M34.5 13.5l-5.7 5.7M19.2 28.8l-5.7 5.7" strokeWidth="1.8" />
    </svg>
  )
}

export function ExtendCoverageIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="6" y="20" width="13" height="14" rx="2" />
      <rect x="29" y="10" width="13" height="24" rx="2" />
      <path d="M20 21q4-5 8 0" strokeWidth="1.8" />
    </svg>
  )
}

export function VideoCallIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="6" y="10" width="22" height="28" rx="3" />
      <path d="M32 18l10-6v24l-10-6z" />
    </svg>
  )
}

export function PhotoTransferIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="4" y="8" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <path d="M6 19l4-4 3 3 5-6 3 4" />
      <path d="M26 15h16" />
      <path d="M38 10l4 5-4 5" />
    </svg>
  )
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M14 6h14l8 8v26a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M28 6v8h8" />
      <path d="M17 27l6-3 6 3v6l-6 3-6-3z" />
    </svg>
  )
}

export function BatchIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="7" y="21" width="15" height="15" rx="2" />
      <rect x="17" y="11" width="15" height="15" rx="2" fill="var(--color-bg-alt)" />
      <rect x="27" y="21" width="15" height="15" rx="2" />
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
