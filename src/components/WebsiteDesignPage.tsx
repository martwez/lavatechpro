import Reveal from './Reveal'
import { WebsiteIcon } from './ServiceIcons'

const features = [
  {
    Icon: WebsiteIcon,
    eyebrow: 'One-Page Sites',
    title: 'Simple, clean, and built for local businesses',
    description:
      "Your name, your services, your hours, and a way for people to reach you, all on one fast-loading page. No bloated page builder, no plugins you'll have to keep updated forever, just a site that does its job and looks good doing it.",
    bullets: [
      'Built to work well on phones first',
      'Your services, hours, and contact info up front',
      'No subscription page-builder lock-in',
      'Fast to load, easy to find',
    ],
  },
  {
    Icon: WebsiteIcon,
    eyebrow: 'Process',
    title: 'A quick turnaround, without cutting corners',
    description:
      "We start with a short conversation about your business and what you want visitors to do when they land on your site. From there I build it, send it over for your feedback, and get it live once you're happy with it.",
    bullets: [
      'A conversation first, not a form to fill out',
      'A build you can review before it goes live',
      'Revisions worked in before launch',
      'Domain and hosting help if you need it',
    ],
  },
  {
    Icon: WebsiteIcon,
    eyebrow: 'After Launch',
    title: "Still here after the site goes live",
    description:
      "A site is never really finished, hours change, a new service gets added, a photo needs swapping. I'm around after launch for updates and care, and we can talk through what makes sense for how often you expect to need changes.",
    bullets: [
      'Small updates and edits after launch',
      'A real person to call, not a support ticket',
      'Options discussed up front, nothing sprung on you',
      'No obligation to sign up for ongoing care',
    ],
  },
]

const steps = [
  { title: 'Conversation', description: "We talk through your business and what the site needs to do." },
  { title: 'Build & review', description: "I build the site and send it over for your feedback before it's live." },
  { title: 'Launch', description: "Once you're happy with it, it goes live on your domain, starting at $500." },
]

export default function WebsiteDesignPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Website Building
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Website Design</h1>
          <p className="text-[1.05rem] text-text-dim">
            I build simple, clean one-page websites for local businesses: your name, services, contact info, and
            hours. Fast turnaround, nothing bloated.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 80}
              className={`flex flex-col gap-7 py-10 min-[701px]:items-center min-[701px]:gap-12 min-[701px]:py-12 min-[701px]:flex-row ${
                i % 2 === 1 ? 'min-[701px]:flex-row-reverse' : ''
              } ${i > 0 ? 'border-t-[3px] border-border' : ''}`}
            >
              <div className="flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border-[3px] border-border bg-card-light text-lava-light min-[701px]:w-[320px]">
                <feature.Icon className="h-20 w-20" />
              </div>
              <div className="flex-1">
                <span className="mb-2 block text-[0.8rem] font-bold uppercase tracking-[1.5px] text-mineral">
                  {feature.eyebrow}
                </span>
                <h2 className="mb-3 text-[1.4rem] font-bold">{feature.title}</h2>
                <p className="mb-4 max-w-[640px] text-[0.98rem] leading-relaxed text-text-dim">{feature.description}</p>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-[0.92rem] text-text-dim min-[701px]:grid-cols-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-mineral">&bull;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid max-w-[1100px] grid-cols-1 gap-8 border-t-[3px] border-border pt-10 min-[701px]:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-mineral text-[0.9rem] font-bold text-mineral">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1 font-bold">{step.title}</h3>
                <p className="text-[0.9rem] text-text-dim">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
