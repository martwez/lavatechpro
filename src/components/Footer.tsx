export default function Footer() {
  return (
    <footer className="border-t-[3px] border-border bg-ink px-6 py-12 text-center text-[0.85rem] text-ink-text/70">
      <div className="mb-1 font-extrabold text-ink-text">LavaTech Pro</div>
      <div>Lava Hot Springs, ID (serving towns within ~30 miles) · lavatechpro.com</div>
      <a href="/privacy/" className="mt-3 inline-block underline-offset-2 transition-colors hover:text-lava-light hover:underline">
        Privacy Policy
      </a>
    </footer>
  )
}
