import Reveal from './Reveal'
import { PhoneHelpIcon } from './ServiceIcons'

const features = [
  {
    Icon: PhoneHelpIcon,
    eyebrow: 'One-on-One Help',
    title: "Patient, no-rush help with your phone or tablet",
    description:
      "Texting, video calls with family, taking and finding photos, or just getting comfortable with a device that feels like it changed overnight. I sit down with you, go at your pace, and explain things in plain language instead of tech-speak.",
    bullets: [
      'Texting, calling, and video calls',
      'Photos: taking, finding, and backing them up',
      'Apps you actually use, set up right',
      'Especially popular with older residents',
    ],
  },
  {
    Icon: PhoneHelpIcon,
    eyebrow: 'New Device',
    title: 'Switching phones without losing anything',
    description:
      "Got a new phone or tablet and dreading moving everything over? I'll transfer your contacts, photos, and apps from the old device to the new one, and make sure your accounts and passwords carry over cleanly.",
    bullets: [
      'Contacts, photos, and app transfer',
      'Account and password setup',
      'Old device wiped safely once you’re moved over',
      'Works across brands, not just matching devices',
    ],
  },
  {
    Icon: PhoneHelpIcon,
    eyebrow: 'Staying Connected',
    title: 'Video calls with the grandkids, actually working',
    description:
      "A lot of this job is getting a device set up so a family can stay in touch: video calls, shared photos, group texts. Once it's set up right, I make sure you know how to use it on your own before I leave.",
    bullets: [
      'Video call apps set up and tested',
      'Shown how to use it, not just handed a working phone',
      'Written down steps if you want a reminder',
      'Follow-up help if something changes',
    ],
  },
]

const steps = [
  { title: 'Quick call or message', description: "Tell me what device you have and what you're trying to do." },
  { title: 'Straightforward quote', description: "A real price before anything gets booked, starting at $40 for a standard visit." },
  { title: 'Shown, not just done', description: "I walk you through it so you can do it yourself next time." },
]

export default function PhoneHelpPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Smartphones & Tablets
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Phone & Tablet Help</h1>
          <p className="text-[1.05rem] text-text-dim">
            One-on-one help with the device you actually carry around: texting, video calls, photos, apps, or a
            brand new phone that needs setting up right.
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
            Get a free quote
          </a>
        </div>
      </div>
    </section>
  )
}
