import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto max-w-[650px] rounded-2xl border border-border bg-card p-[44px] text-center">
          <h2 className="mb-3 text-[1.8rem] font-extrabold">Let's get it fixed</h2>
          <p className="mb-7 text-text-dim">
            Reach out however's easiest — I'll get back to you same day when I can.
          </p>
          <div className="mb-2 flex flex-wrap justify-center gap-[14px]">
            <a
              href="tel:2084171081"
              className="min-w-[180px] rounded-lg border border-border bg-bg px-[22px] py-[14px] text-[0.95rem] font-semibold transition-colors hover:border-lava-light"
            >
              <span className="mb-1 block text-[0.78rem] font-bold uppercase tracking-[1px] text-lava-light">
                Call / Text
              </span>
              (208) 417-1081
            </a>
            <a
              href="mailto:lavatechpro@gmail.com"
              className="min-w-[180px] rounded-lg border border-border bg-bg px-[22px] py-[14px] text-[0.95rem] font-semibold transition-colors hover:border-lava-light"
            >
              <span className="mb-1 block text-[0.78rem] font-bold uppercase tracking-[1px] text-lava-light">
                Email
              </span>
              lavatechpro@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
