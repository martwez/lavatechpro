import Reveal from './Reveal'
import { StarlinkIcon } from './ServiceIcons'

const features = [
  {
    Icon: StarlinkIcon,
    eyebrow: 'Free Site Test',
    title: "Not sure Starlink will even work at your property?",
    description:
      "Trees, terrain, and outbuildings can all block the sky view Starlink needs. Rather than guess, I'll come out with a dish and actually test the signal from a few spots on your property before you buy anything.",
    bullets: [
      'On-site signal test before you commit',
      'Best mounting spot identified up front',
      'No obligation if it turns out it won’t work well',
      'Works for homes, shops, and remote properties',
    ],
  },
  {
    Icon: StarlinkIcon,
    eyebrow: 'Install & Setup',
    title: 'Full install, mounted right and routed clean',
    description:
      "Once you're ready, I handle the whole install: mounting the dish, running cable, and setting up the router so your whole house is online. I test it before I leave to make sure the connection is stable, not just live.",
    bullets: [
      'Roof, pole, or wall mounting',
      'Cable routed cleanly, not just draped',
      'Router and wifi setup included',
      'Tested for stability, not just a signal',
    ],
  },
  {
    Icon: StarlinkIcon,
    eyebrow: 'Ongoing Support',
    title: "Your contact after it's installed, too",
    description:
      "If the connection acts up down the road, an obstruction shifted, the app is showing errors, whatever it is, I'm the same person you call. Troubleshooting visits are billed the same as a standard PC Help visit.",
    bullets: [
      'Same installer, same contact, later on',
      'Troubleshooting billed as a standard visit',
      'Help with the Starlink app and account',
      'Repositioning if something starts blocking the signal',
    ],
  },
]

const steps = [
  { title: 'Free site test', description: "I test the actual signal at your property before anything is sold." },
  { title: 'Quote & install', description: "If it works, I quote the mounting job and get everything installed and routed." },
  { title: 'Ongoing help', description: "I stay your contact for setup or signal issues after the fact." },
]

export default function StarlinkPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Rural Internet
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Starlink Setup & Troubleshooting</h1>
          <p className="text-[1.05rem] text-text-dim">
            From testing whether it'll work at your property to a full install and staying on as your contact
            after, here's the whole process.
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
            Get a free site test
          </a>
        </div>
      </div>
    </section>
  )
}
