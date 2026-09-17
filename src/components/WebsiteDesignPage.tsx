export default function WebsiteDesignPage() {
  return (
    <section className="bg-bg-alt px-5 py-[70px] text-center min-[701px]:px-6 min-[701px]:py-[110px]">
      <div className="mx-auto max-w-[650px] px-6">
        <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
          Website Building
        </span>
        <h1 className="mb-[18px] text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Website Design</h1>
        <p className="mb-7 text-[1.05rem] text-text-dim">
          This page is under construction. Full details on the website building process, pricing, and past work
          are coming soon. In the meantime, get in touch and I'm happy to talk through what you need.
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
