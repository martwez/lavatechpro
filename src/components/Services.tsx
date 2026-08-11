const services = [
  {
    icon: '💻',
    title: 'PC Help',
    description:
      'Repairs, virus & malware cleanup, new computer setup, email/printer setup, basic tutoring, and home wifi/network troubleshooting.',
    price: 'Starting at $40',
  },
  {
    icon: '🛰️',
    title: 'Starlink Setup & Troubleshooting',
    description:
      "Not sure if Starlink will even work at your property? I'll come test it. If it works, I'll install and configure it, and I'm your contact if anything needs troubleshooting after.",
    price: 'Free quote',
  },
  {
    icon: '📷',
    title: 'Security Camera Installs',
    description:
      'Wireless security camera systems for homes and small properties, up to 4 cameras. Placement, mounting, and app setup included.',
    price: 'Starting at $75/camera',
  },
  {
    icon: '🌐',
    title: 'Website Building',
    description:
      'Simple, clean one-page websites for local businesses — name, services, contact info, and hours. Fast turnaround, no bloated templates.',
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
    <section id="services" className="bg-bg-alt px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mx-auto mb-12 max-w-[650px] text-center">
          <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            What I Do
          </span>
          <h2 className="mb-3 text-[2rem] font-extrabold">Services</h2>
          <p className="text-[1.05rem] text-text-dim">
            Straightforward tech help, priced fairly. Every job starts with a quick conversation — nothing gets booked without you knowing the cost first.
          </p>
        </div>

        <div className="grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-[3px] hover:border-lava"
            >
              <div className="mb-[14px] text-[1.8rem]">{service.icon}</div>
              <h3 className="mb-[10px] text-[1.2rem] font-bold">{service.title}</h3>
              <p className="mb-4 text-[0.95rem] text-text-dim">{service.description}</p>
              <span className="inline-block rounded-md bg-[rgba(13,148,136,0.12)] px-3 py-[6px] text-[0.85rem] font-bold text-lava-light">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
