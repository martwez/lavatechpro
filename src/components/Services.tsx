import Reveal from './Reveal'
import { PcHelpIcon, PhoneHelpIcon, StarlinkIcon, CameraIcon, WebsiteIcon, Printer3DIcon } from './ServiceIcons'

const accentColors = ['var(--color-mineral)', 'var(--color-ember)', 'var(--color-lava-light)']

const services = [
  {
    Icon: PcHelpIcon,
    slug: 'pc-help',
    title: 'PC Help',
    description: 'Repair, setup, and tutoring for the everyday stuff that goes wrong.',
    price: 'Starting at $40',
  },
  {
    Icon: PhoneHelpIcon,
    slug: 'phone-help',
    title: 'Phone & Tablet Help',
    description: 'Video calls with family, freeing up photo storage, patient device help.',
    price: 'Starting at $40',
  },
  {
    Icon: StarlinkIcon,
    slug: 'starlink',
    title: 'Starlink Setup & Troubleshooting',
    description: 'On-site testing, full install, and I stay your contact after.',
    price: 'Special promotion',
  },
  {
    Icon: CameraIcon,
    slug: 'security-cameras',
    path: 'security',
    title: 'Security Camera Installs',
    description: 'Wireless or wired systems, up to 4 cameras, quoted to fit your property.',
    price: 'Free quote',
  },
  {
    Icon: WebsiteIcon,
    slug: 'website-design',
    title: 'Website Building',
    description: 'Simple, clean one-page sites for local businesses. Fast turnaround.',
    price: 'Starting at $500',
  },
  {
    Icon: Printer3DIcon,
    slug: '3d-printing',
    title: '3D Printing',
    description: 'Bring your own file, I\'ll print it, single pieces or batch runs.',
    price: 'Free quote',
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
                style={{ borderTopColor: accentColors[i % accentColors.length] }}
                className="group flex h-full flex-col rounded-xl border-[2px] border-t-[3px] border-border bg-card-light p-5 transition-all hover:-translate-y-[3px]"
              >
                <div
                  style={{ backgroundColor: `color-mix(in srgb, ${accentColors[i % accentColors.length]} 28%, transparent)`, color: accentColors[i % accentColors.length] }}
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110"
                >
                  <service.Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-[1.05rem] font-bold">{service.title}</h3>
                <p className="mb-2 text-[0.85rem] text-text-dim-light">{service.description}</p>
                <p className="mb-4 text-[0.8rem] font-semibold text-lava-light">
                  Click to learn more &rarr;
                </p>
                <span className="mt-auto inline-block w-fit rounded-md bg-ember px-3 py-[6px] text-[0.8rem] font-bold text-ink transition-all group-hover:brightness-110">
                  {service.price}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
