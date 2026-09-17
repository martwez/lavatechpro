import Reveal from './Reveal'

const features = [
  {
    image: '/images/security-camera.jpg',
    alt: 'White security camera mounted under a house eave',
    eyebrow: 'Cameras',
    title: 'Camera systems, built around your property',
    description:
      "Every property is different, so I don't sell a fixed kit. I walk the property with you, figure out where cameras actually need to go instead of just where they're easy to mount, and install wired or wireless depending on what makes sense. When I'm done, you can pull up live video and recordings from your phone, and you'll know exactly how to use it before I leave.",
    bullets: [
      'Wired or wireless, based on the property',
      'Placement from a real walkthrough, not guesswork',
      'Live view and recorded footage on your phone',
      'Up to 4 cameras for most homes, more for larger properties',
    ],
  },
  {
    image: '/images/security-multibuilding.jpg',
    alt: 'Metal shop building with two bay doors',
    eyebrow: 'Commercial / Multi-Site',
    title: 'One system across multiple buildings',
    description:
      'Shops, barns, rental units, anything spread across a property: I can link cameras across buildings so everything reports back to one central system instead of a separate login for every building. For larger jobs that usually means a wireless point-to-point link between buildings and one central recorder, sized to however many buildings and cameras you actually need.',
    bullets: [
      'Point-to-point wireless links between buildings',
      'One centralized recorder and login',
      'Scales from two buildings to a full property',
      'Tiered quotes based on coverage',
    ],
  },
  {
    image: '/images/security-fixing.jpg',
    alt: 'Smart camera, sensor hub, and smartphone on a dark surface',
    eyebrow: 'Diagnosis & Setup Fixes',
    title: "Already have a system? Let's get it actually working",
    description:
      "A lot of what I get called for isn't a new install, it's a system someone else put in that never got finished right: an app that was never linked up, notifications that don't fire, nobody who explained how to use it. I'll diagnose what's going on and get the software and network side working properly. If the equipment itself is the problem, I'll tell you straight instead of patching something that won't hold, and quote a fresh install from there.",
    bullets: [
      'Diagnostic visit, honest assessment',
      'Getting remote app access and alerts working',
      'Network and login cleanup',
      'A real walkthrough of how to use it',
    ],
  },
]

const steps = [
  { title: 'Walkthrough', description: 'I come look at the property, in person, before anything gets quoted.' },
  { title: 'Written quote', description: 'A clear number before I book anything. Bigger jobs get a few tiers to pick from.' },
  { title: 'Install & walkthrough', description: 'Everything mounted and wired, then I show you how to use it on your phone before I leave.' },
]

export default function SecurityPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Cameras &amp; Home Security
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Security &amp; Camera Systems</h1>
          <p className="text-[1.05rem] text-text-dim">
            From a single camera over the garage to a full multi-building setup, I design the system around your
            property, not a prepackaged kit. Here's everything that falls under that.
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
              <div className="w-full shrink-0 overflow-hidden rounded-xl border-[3px] border-border min-[701px]:w-[320px]">
                <img src={feature.image} alt={feature.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
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
            Get a free walkthrough &amp; quote
          </a>
        </div>
      </div>
    </section>
  )
}
