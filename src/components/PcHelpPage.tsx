import Reveal from './Reveal'
import { PcHelpIcon } from './ServiceIcons'

const features = [
  {
    Icon: PcHelpIcon,
    eyebrow: 'Repair & Troubleshooting',
    title: 'The everyday stuff that goes wrong',
    description:
      "A computer that's slow for no reason, a virus that snuck in, a program that won't open right. I'll figure out what's actually causing it and fix that, instead of just telling you to restart it and hope. Windows or Mac, desktop or laptop.",
    bullets: [
      'Virus and malware removal',
      'Speeding up a slow or cluttered computer',
      'Software and driver issues',
      'Hardware troubleshooting and upgrades',
    ],
  },
  {
    Icon: PcHelpIcon,
    eyebrow: 'Setup',
    title: 'Getting a new machine (or your network) actually working',
    description:
      "New computer setup, moving your files and logins over from the old one, getting your printer and email working right. This is also where home wifi issues usually get sorted out, dead zones, dropped connections, or a router that's never been touched since install day.",
    bullets: [
      'New computer setup and file transfer',
      'Email and printer setup',
      'Home wifi troubleshooting',
      'Software installs and updates',
    ],
  },
  {
    Icon: PcHelpIcon,
    eyebrow: 'Tutoring',
    title: "One-on-one, at your pace, no jargon",
    description:
      "Some of this isn't a repair at all, it's just wanting a real person to sit down and walk you through something: video calls, a new app, backing up your photos. I'll explain it in plain terms and make sure it sticks before I leave.",
    bullets: [
      'Basic computer skills, taught patiently',
      'Backups and photo organization',
      'Setting up accounts and passwords safely',
      'Whatever you’ve been putting off asking about',
    ],
  },
]

const steps = [
  { title: 'Quick call or message', description: "Tell me what's going on. Most of the time I can get a sense of it before I even show up." },
  { title: 'Straightforward quote', description: "A real price before anything gets booked, starting at $40 for a standard visit." },
  { title: 'Fixed, and explained', description: "I fix it, then walk you through what happened so it's less likely to happen again." },
]

export default function PcHelpPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Computer Repair & Support
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">PC Help</h1>
          <p className="text-[1.05rem] text-text-dim">
            Repair, setup, and tutoring for the everyday tech problems that pile up. No jargon, no upselling,
            just getting it working and making sure you understand it.
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
              <div className="flex aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border-[3px] border-border bg-card text-lava-light min-[701px]:w-[320px]">
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
            Get a free quote
          </a>
        </div>
      </div>
    </section>
  )
}
