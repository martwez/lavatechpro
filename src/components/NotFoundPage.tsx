import Reveal from './Reveal'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/portfolio/', label: 'Portfolio' },
]

export default function NotFoundPage() {
  return (
    <section className="bg-bg-alt px-5 py-20 min-[701px]:px-6 min-[701px]:py-28">
      <Reveal className="mx-auto max-w-[600px] px-6 text-center">
        <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">404</span>
        <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">That page doesn't exist</h1>
        <p className="mb-10 text-[1.05rem] text-text-dim">
          The link might be old or mistyped. Here are a few places to pick back up, or just reach out and ask.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block rounded-lg border-[3px] border-border bg-ink px-[22px] py-[12px] text-[0.95rem] font-bold text-text transition-colors hover:border-lava-light hover:text-lava-light"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/#contact"
          className="inline-block rounded-lg bg-ember px-[30px] py-[14px] text-base font-bold text-ink transition-all hover:-translate-y-px hover:brightness-110"
        >
          Reach Out
        </a>
      </Reveal>
    </section>
  )
}
