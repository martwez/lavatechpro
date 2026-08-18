import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/lavatechpro@gmail.com'

const serviceOptions = ['PC Help', 'Starlink Setup', 'Security Cameras', 'Website Building', '3D Printing', 'Other']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-[85px] px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto max-w-[650px] rounded-2xl border border-border bg-card p-[44px] text-center">
          <h2 className="mb-3 text-[1.8rem] font-extrabold">Let's get it fixed</h2>
          <p className="mb-7 text-text-dim">
            Reach out however's easiest — I'll get back to you soon.
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

          <div className="my-7 flex items-center gap-4 text-[0.8rem] font-semibold uppercase tracking-[1px] text-text-dim">
            <span className="h-px flex-1 bg-border" />
            or send details instead
            <span className="h-px flex-1 bg-border" />
          </div>

          {status === 'sent' ? (
            <p className="rounded-lg border border-lava bg-bg px-[22px] py-[18px] text-[0.95rem] font-semibold text-lava-light">
              Got it — thanks! I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
              <input type="hidden" name="_subject" value="New request from LavaTech Pro site" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />

              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="Name"
                placeholder="Your name"
                required
                className="rounded-lg border border-border bg-bg px-[18px] py-[12px] text-[0.95rem] text-text placeholder:text-text-dim focus:border-lava-light focus:outline-none"
              />
              <label htmlFor="contact-reach" className="sr-only">
                Best way to reach you (phone or email)
              </label>
              <input
                id="contact-reach"
                type="text"
                name="Phone or email"
                placeholder="Best way to reach you (phone or email)"
                required
                pattern="([^\s@]+@[^\s@]+\.[^\s@]+)|(\+?1?[ .\-]?\(?\d{3}\)?[ .\-]?\d{3}[ .\-]?\d{4})"
                title="Enter a valid email address or a 10-digit phone number"
                className="rounded-lg border border-border bg-bg px-[18px] py-[12px] text-[0.95rem] text-text placeholder:text-text-dim focus:border-lava-light focus:outline-none"
              />
              <label htmlFor="contact-service" className="sr-only">
                What do you need help with?
              </label>
              <select
                id="contact-service"
                name="Service"
                defaultValue=""
                required
                className="rounded-lg border border-border bg-bg px-[18px] py-[12px] text-[0.95rem] text-text focus:border-lava-light focus:outline-none"
              >
                <option value="" disabled>
                  What do you need help with?
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <label htmlFor="contact-message" className="sr-only">
                What's going on? Any details help.
              </label>
              <textarea
                id="contact-message"
                name="Message"
                placeholder="What's going on? Any details help."
                rows={4}
                required
                className="resize-none rounded-lg border border-border bg-bg px-[18px] py-[12px] text-[0.95rem] text-text placeholder:text-text-dim focus:border-lava-light focus:outline-none"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 inline-block rounded-lg bg-ember px-[30px] py-[14px] text-base font-bold text-ink transition-all hover:-translate-y-px hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>

              {status === 'error' && (
                <p className="text-[0.85rem] font-semibold text-ember">
                  Something went wrong sending that — mind calling or texting instead?
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
