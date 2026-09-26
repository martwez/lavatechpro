import Reveal from './Reveal'

const services = [
  {
    slug: 'pc-help',
    title: 'Computer & Network Assistance',
    description: 'Repair, setup, and tutoring for the everyday stuff that goes wrong.',
    price: 'Starting at $40',
    image: '/images/pc-help.webp',
  },
  {
    slug: 'phone-help',
    title: 'Mobile Device Assistance',
    description: 'Video calls with family, freeing up photo storage, patient device help.',
    price: 'Starting at $40',
    image: '/images/phone-help.webp',
  },
  {
    slug: 'starlink',
    title: 'Starlink Setup & Troubleshooting',
    description: 'On-site testing, full install, and I stay your contact after.',
    price: 'Special promotion',
    image: '/images/starlink.webp',
  },
  {
    slug: 'security-cameras',
    path: 'security',
    title: 'Security Camera Installs',
    description: 'Wireless or wired systems, up to 4 cameras, quoted to fit your property.',
    price: 'Free quote',
    image: '/images/security-cameras.webp',
  },
  {
    slug: 'website-design',
    title: 'Website Building',
    description: 'Clean, simple websites for local businesses, up to 5 pages. Fast turnaround.',
    price: 'Starting at $500',
    image: '/images/website-design.webp',
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    description: 'Bring your own file, I\'ll print it, single pieces or batch runs.',
    price: 'Free quote',
    image: '/images/3d-printing.webp',
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mx-auto mb-14 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            What I Do
          </span>
          <h2 className="mb-4 text-[2rem] font-extrabold">Services</h2>
          <p className="text-[1.05rem] text-text-dim">
            Straightforward tech help, priced fairly. Every job starts with a quick conversation. I won't book anything until you know what it'll cost.
          </p>
        </div>

        <div className="grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
          {services.map((service, i) => (
            <Reveal key={service.title} id={service.slug} delay={i * 80} className="h-full scroll-mt-[85px]">
              <a
                href={`/${service.path ?? service.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border-[2px] border-border bg-card-light transition-all hover:-translate-y-[3px]"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                )}
                <div className="flex h-full flex-col p-5">
                  <h3 className="mb-1 text-[1.05rem] font-bold">{service.title}</h3>
                  <p className="mb-4 text-[0.85rem] text-text-dim-light">{service.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="inline-block w-fit rounded-md border border-lava-light/50 px-3 py-[5px] text-[0.8rem] font-bold text-lava-light transition-colors group-hover:border-lava-light">
                      {service.price}
                    </span>
                    <span className="text-[0.85rem] font-semibold text-text transition-colors group-hover:text-lava-light">
                      Learn more{' '}
                      <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
