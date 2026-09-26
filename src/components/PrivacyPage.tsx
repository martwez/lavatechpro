import Reveal from './Reveal'

const EFFECTIVE_DATE = 'September 25, 2026'

const sections = [
  {
    title: 'What I collect',
    body: [
      "When you use the contact form, I get whatever you type in: your name, email and/or phone number, the service you picked, and your message. If you call, text, or email me directly, I get your phone number or email address and what you send.",
      "That's it. This site doesn't use cookies, analytics, ad trackers, or tracking pixels.",
    ],
  },
  {
    title: 'How I use it',
    body: [
      'Only to reply to you, schedule and do the work you asked about, and send invoices or follow-ups for that work. I never sell, rent, or trade your information, and I don\'t add you to marketing lists.',
    ],
  },
  {
    title: 'Who else handles it',
    body: [
      'Contact form messages are passed through FormSubmit (formsubmit.co), a form service that forwards them to my Gmail inbox. The site itself is hosted on GitHub Pages, which may keep basic server logs (like IP addresses) for security. Those services have their own privacy policies.',
    ],
  },
  {
    title: 'How long I keep it',
    body: [
      'I keep messages and job details as long as I need them to do the work and keep normal business records. If you want me to delete what I have from you, just ask and I will, unless I need to keep something like an invoice for tax records.',
    ],
  },
  {
    title: 'Kids',
    body: ["This site isn't meant for children under 13, and I don't knowingly collect information from them."],
  },
  {
    title: 'Changes',
    body: ['If this policy changes, I\'ll update it here and change the date at the top.'],
  },
]

export default function PrivacyPage() {
  return (
    <section className="bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="mx-auto max-w-[750px] px-6">
        <Reveal className="mb-12 text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Privacy Policy
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Your info stays with me</h1>
          <p className="text-[1.05rem] text-text-dim">
            LavaTech Pro is a one-person business. Here's plainly what happens to the info you send through this site.
          </p>
          <p className="mt-3 text-[0.85rem] text-text-dim">Effective {EFFECTIVE_DATE}</p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border-[2px] border-border bg-card-light p-6">
              <h2 className="mb-2 text-[1.1rem] font-bold">{section.title}</h2>
              {section.body.map((p) => (
                <p key={p} className="mb-2 text-[0.95rem] leading-relaxed text-text-dim last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <div className="rounded-xl border-[2px] border-border bg-card-light p-6">
            <h2 className="mb-2 text-[1.1rem] font-bold">Questions</h2>
            <p className="text-[0.95rem] leading-relaxed text-text-dim">
              Email{' '}
              <a href="mailto:lavatechpro@gmail.com" className="font-semibold text-lava-light hover:underline">
                lavatechpro@gmail.com
              </a>{' '}
              or call/text{' '}
              <a href="tel:2084171081" className="font-semibold text-lava-light hover:underline">
                (208) 417-1081
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
