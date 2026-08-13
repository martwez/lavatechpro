import Reveal from './Reveal'

const services = [
  {
    icon: '💻',
    title: 'PC Help',
    description:
      "Computer repair and IT support for the everyday stuff — a slow computer, a nasty virus, a new machine to set up. That covers email and printer setup, some basic tutoring, and getting your home wifi actually working.",
    price: 'Starting at $40',
  },
  {
    icon: '🛰️',
    title: 'Starlink Setup & Troubleshooting',
    description:
      "Not sure if Starlink will even work at your property? I'll come test it. If it works, I'll handle the Starlink installation and configuration, and I'm your contact for any troubleshooting after — billed as a standard visit, same as PC Help.",
    price: 'Free quote',
  },
  {
    icon: '📷',
    title: 'Security Camera Installs',
    description:
      "Wireless or wired camera systems for your home or small property, up to 4 cameras. Placement, mounting, and getting the app working are all part of it — I'll quote it based on what you need.",
    price: 'Free quote',
  },
  {
    icon: '🌐',
    title: 'Website Building',
    description:
      "I build simple, clean one-page websites for local businesses — your name, services, contact info, and hours. Fast turnaround, nothing bloated.",
    price: 'Starting at $400',
  },
  {
    icon: '🖨️',
    title: '3D Printing',
    description:
      "Custom prints, replacement parts, prototypes, and small-batch projects. Send me what you need and I'll let you know what's possible.",
    price: 'Free quote',
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[85px] bg-bg-alt px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mx-auto mb-12 max-w-[650px] text-center">
          <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            What I Do
          </span>
          <h2 className="mb-3 text-[2rem] font-extrabold">Services</h2>
          <p className="text-[1.05rem] text-text-dim">
            Straightforward tech help, priced fairly. Every job starts with a quick conversation — I won't book anything until you know what it'll cost.
          </p>
        </div>

        <div className="grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-[3px] hover:border-lava">
                <div
                  className="mb-[14px] text-[1.8rem] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="mb-[10px] text-[1.2rem] font-bold">{service.title}</h3>
                <p className="mb-4 text-[0.95rem] text-text-dim">{service.description}</p>
                <span className="inline-block rounded-md bg-ember px-3 py-[6px] text-[0.85rem] font-bold text-ink">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
