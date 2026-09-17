export default function PortfolioPage() {
  return (
    <section className="bg-bg-alt px-5 py-24 text-center min-[701px]:px-6 min-[701px]:py-32">
      <div className="mx-auto max-w-[650px] px-6">
        <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
          Recent Work
        </span>
        <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Portfolio</h1>
        <p className="mb-8 text-[1.05rem] text-text-dim">
          This page is under construction. Photos and write-ups from recent camera installs, websites, and other
          jobs are coming soon. In the meantime, get in touch and I'm happy to share examples directly.
        </p>
        <a
          href="/#contact"
          className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
