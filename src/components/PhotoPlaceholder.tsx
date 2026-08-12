export default function PhotoPlaceholder({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-bg-alt px-4 py-8 text-center text-text-dim ${className}`}
    >
      <span className="text-[1.5rem]" aria-hidden="true">
        📷
      </span>
      <span className="text-[0.72rem] font-bold uppercase tracking-[1px]">{label}</span>
    </div>
  )
}
