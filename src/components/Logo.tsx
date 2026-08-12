export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-ember)" strokeWidth="3" opacity="0.3" />

      <circle
        className="logo-ring-pulse"
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="var(--color-ember)"
        strokeWidth="5"
        style={{ animationDelay: '0s' }}
      />

      <circle cx="50" cy="50" r="23" fill="var(--color-lava)" stroke="var(--color-ember)" strokeWidth="2.5" />
      <text
        x="50"
        y="59"
        fontFamily="'Arial Narrow', 'Helvetica Neue', sans-serif"
        fontWeight="800"
        fontSize="21"
        fill="var(--color-ink-text)"
        textAnchor="middle"
      >
        LT
      </text>
    </svg>
  )
}
