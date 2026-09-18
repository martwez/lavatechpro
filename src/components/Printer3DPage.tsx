import Reveal from './Reveal'
import { Printer3DIcon } from './ServiceIcons'

const features = [
  {
    Icon: Printer3DIcon,
    eyebrow: 'Replacement Parts',
    title: 'The one broken piece holding up the whole thing',
    description:
      "A cracked bracket, a missing knob, a part that's been discontinued for years. Send me a photo and some measurements, or the original if you have it, and I'll model or find a print that fits.",
    bullets: [
      'Modeled from a photo, sketch, or the broken part',
      'Common household and appliance parts',
      'A range of plastics depending on the job',
      'Quoted before anything gets printed',
    ],
  },
  {
    Icon: Printer3DIcon,
    eyebrow: 'Prototypes & Small Batches',
    title: 'From an idea to something you can hold',
    description:
      "Working on a design and want to see it in your hand before committing further? I can print one-off prototypes or small batches, iterating with you as you refine it.",
    bullets: [
      'One-off prototypes for testing fit and form',
      'Small batch runs, no minimum order from a factory',
      'Iteration between prints as the design changes',
      'Bring your own file or start from a sketch',
    ],
  },
  {
    Icon: Printer3DIcon,
    eyebrow: 'Custom & Odd Jobs',
    title: "Not sure it's even possible? Ask anyway",
    description:
      "A lot of what comes in is a one-off idea nobody's quite sure how to describe. Send me what you need, even if it's rough, and I'll tell you honestly whether it's doable and what it'll run.",
    bullets: [
      'Honest feedback on whether it’s practical to print',
      'Help turning a rough idea into a printable design',
      'Small hobby and craft projects welcome',
      'No job too small to ask about',
    ],
  },
]

const steps = [
  { title: 'Send me the idea', description: "A photo, a file, a sketch, or just a description of what you need." },
  { title: 'Straightforward quote', description: "I'll tell you what's possible and what it costs before anything is printed." },
  { title: 'Printed & delivered', description: "Picked up or dropped off, whatever's easiest for you." },
]

export default function Printer3DPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Custom Fabrication
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">3D Printing</h1>
          <p className="text-[1.05rem] text-text-dim">
            Replacement parts, prototypes, and small-batch projects. Send me what you need and I'll let you know
            what's possible.
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
