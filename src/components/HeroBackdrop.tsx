export default function HeroBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <path
        d="M0 260 C120 220 180 300 320 250 C460 200 520 280 640 240 C760 200 840 270 960 230 C1060 198 1140 240 1200 220 L1200 400 L0 400 Z"
        fill="var(--color-mineral)"
        opacity="0.07"
      />
      <path
        d="M0 300 C140 250 220 320 360 280 C500 240 580 310 700 270 C820 230 900 300 1040 260 C1110 240 1160 270 1200 260 L1200 400 L0 400 Z"
        fill="var(--color-lava-light)"
        opacity="0.1"
      />
      <g opacity="0.18" stroke="var(--color-mineral)" strokeWidth="1.5" fill="none">
        <path d="M40 120 C90 100 100 140 60 150" strokeLinecap="round" />
        <path d="M46 96 C96 76 106 116 66 126" strokeLinecap="round" />
        <path d="M52 72 C102 52 112 92 72 102" strokeLinecap="round" />
      </g>
      <g opacity="0.15" stroke="var(--color-mineral)" strokeWidth="1.5" fill="none">
        <path d="M1120 150 C1160 132 1168 168 1136 176" strokeLinecap="round" />
        <path d="M1126 128 C1166 110 1174 146 1142 154" strokeLinecap="round" />
      </g>
    </svg>
  )
}
