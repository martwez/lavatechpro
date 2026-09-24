import Reveal from './Reveal'

const sites = [
  {
    title: 'Dreamy Denz',
    tag: 'Business Website',
    description: "Kids' party rentals in Lava Hot Springs. Packages, pricing, and booking, built to work on a phone.",
    image: '/images/site-dreamydenz.jpg',
    href: 'https://dreamydenz.org',
    domain: 'dreamydenz.org',
  },
  {
    title: 'Cedar & Steam Cabins',
    tag: 'Lodging Site Demo',
    description: 'A sample site for a cabin rental, with photo galleries, a booking request form, and local things to do.',
    image: '/images/site-lodging.jpg',
    href: 'https://martwez.github.io/lodging-demo/',
    domain: 'martwez.github.io/lodging-demo',
  },
  {
    title: 'Basalt Ridge Construction',
    tag: 'Contractor Site Demo',
    description: 'A sample site for a construction and handyman business, with a project gallery and a free-estimate form.',
    image: '/images/site-handyman.jpg',
    href: 'https://martwez.github.io/handyman-demo/',
    domain: 'martwez.github.io/handyman-demo',
  },
]

const features = [
  {
    eyebrow: 'What You Get',
    title: 'A clean site built for a local business',
    description:
      "Up to five pages covering your services, hours, photos, and how to reach you. No bloated page builder and no plugins you'll have to keep updated forever.",
    bullets: [
      'Built to work well on phones first',
      'Your services, hours, and contact info up front',
      'Your photos, or a quick photo session if you need one',
      'Basic SEO and Google Business Profile setup',
      'Domain registered and managed for you, no extra charge',
    ],
  },
  {
    eyebrow: 'After Launch',
    title: 'Still here after the site goes live',
    description:
      "A site is never really finished: hours change, a new service gets added, a photo needs swapping. Your first year of care is included, so I keep the site running and handle the small stuff.",
    bullets: [
      'First year of hosting and care included',
      'Free fixes if something I built stops working',
      'A few small updates a year, like hours or prices',
      'A real person to call, not a support ticket',
    ],
  },
]

const steps = [
  {
    title: 'Conversation',
    description: 'We talk through your business and what the site needs to do. Half the price up front gets the build started.',
  },
  { title: 'Build & review', description: "I build the site and send it over for your feedback before it's live." },
  { title: 'Launch', description: 'Once you approve it, the rest is due and the site goes live on your domain.' },
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Sites start at $500 for up to five informational pages. Links to tools you already use, like Square, Calendly, or your Facebook page, are included. Extra features like an online store, booking, or a blog are quoted once we know what you need.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually about two weeks once I have your content: answers to a short list of questions about your business, plus your photos. I build on Fridays and weekends.',
  },
  {
    q: 'Will my site show up on Google?',
    a: "Every site gets basic SEO, plus Google Search Console and Google Business Profile setup under your own Google account, so Google can find and read your site. Nobody can honestly promise a top spot, but you'll start on solid footing.",
  },
  {
    q: 'What about my domain name?',
    a: "I register it and manage it for you, with no separate domain charge. If you ever want it in your own account, I'll transfer it to you for free as long as your account is paid up.",
  },
  {
    q: 'Does it include business email?',
    a: "Email like info@yourbusiness.com isn't included, but if you set it up with a provider like Google Workspace or Microsoft 365, I'll connect it to your domain for free.",
  },
  {
    q: 'I already have a website. Can you redo it?',
    a: 'Yes. If you already own your domain, the new site can go live on it, so customers find you at the same address.',
  },
  {
    q: 'What happens after launch?',
    a: "Your first year of Site Care is included: hosting, domain renewal, fixes if something breaks, and a few small updates. After that you can keep Site Care going, or take your site files and domain with you.",
  },
]

function BrowserFrame({ src, alt, domain }: { src: string; alt: string; domain: string }) {
  return (
    <div className="overflow-hidden rounded-t-xl border-b-[2px] border-border bg-ink">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="flex-1 truncate rounded-md bg-bg-alt px-3 py-1 text-center text-[0.72rem] text-text-dim">
          {domain}
        </span>
      </div>
      <img src={src} alt={alt} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
    </div>
  )
}

export default function WebsiteDesignPage() {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            For Local Businesses
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Website Design</h1>
          <p className="mb-7 text-[1.05rem] text-text-dim">
            Simple, clean websites for local businesses: your name, services, contact info, and hours. Fast
            turnaround, nothing bloated.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 min-[701px]:flex-row">
            <a
              href="/#contact"
              className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
            >
              Start your site
            </a>
            <span className="text-[0.95rem] font-semibold text-text-dim-light">Starting at $500</span>
          </div>
        </Reveal>

        <div className="mb-20">
          <Reveal className="mb-6 text-center">
            <span className="block text-[0.8rem] font-bold uppercase tracking-[1.5px] text-mineral">Recent Work</span>
          </Reveal>
          <div className="mx-auto grid max-w-[500px] grid-cols-1 gap-7 min-[901px]:max-w-none min-[901px]:grid-cols-3">
            {sites.map((site, i) => (
              <Reveal key={site.title} delay={i * 80}>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border-[2px] border-border bg-card-light transition-all hover:-translate-y-[3px] hover:border-mineral"
                >
                  <BrowserFrame src={site.image} alt={`${site.title} website`} domain={site.domain} />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-1 block text-[0.75rem] font-bold uppercase tracking-[1px] text-mineral">
                      {site.tag}
                    </span>
                    <h2 className="mb-1 text-[1.15rem] font-bold">{site.title}</h2>
                    <p className="mb-4 text-[0.9rem] text-text-dim-light">{site.description}</p>
                    <span className="mt-auto inline-block w-fit text-[0.85rem] font-semibold text-lava-light">
                      Visit site &rarr;
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-7 min-[701px]:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 80}
              className="rounded-xl border-[2px] border-border bg-card-light p-6 min-[701px]:p-8"
            >
              <span className="mb-2 block text-[0.8rem] font-bold uppercase tracking-[1.5px] text-mineral">
                {feature.eyebrow}
              </span>
              <h2 className="mb-3 text-[1.3rem] font-bold">{feature.title}</h2>
              <p className="mb-5 text-[0.95rem] leading-relaxed text-text-dim-light">{feature.description}</p>
              <ul className="flex flex-col gap-2.5 text-[0.92rem] text-text-dim-light">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-mineral">&#10003;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mb-20">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 block text-[0.8rem] font-bold uppercase tracking-[1.5px] text-mineral">
              How It Works
            </span>
            <h2 className="text-[1.6rem] font-bold">Three steps to a live site</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 min-[701px]:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-mineral text-[0.9rem] font-bold text-mineral">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-bold">{step.title}</h3>
                  <p className="text-[0.9rem] text-text-dim">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-20 max-w-[760px]">
          <Reveal className="mb-8 text-center">
            <span className="mb-2 block text-[0.8rem] font-bold uppercase tracking-[1.5px] text-mineral">FAQ</span>
            <h2 className="text-[1.6rem] font-bold">Common questions</h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border-[2px] border-border bg-card-light px-5 py-4 open:border-mineral"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-[1.2rem] text-mineral transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-text-dim-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <Reveal className="rounded-xl border-[2px] border-mineral bg-card-light px-6 py-10 text-center">
          <h2 className="mb-2 text-[1.5rem] font-bold">Ready to get your business online?</h2>
          <p className="mx-auto mb-6 max-w-[520px] text-[0.98rem] text-text-dim-light">
            Tell me a little about your business and we'll figure out what your site needs.
          </p>
          <a
            href="/#contact"
            className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
          >
            Start your site
          </a>
        </Reveal>
      </div>
    </section>
  )
}
