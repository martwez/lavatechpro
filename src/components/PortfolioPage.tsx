import Reveal from './Reveal'

const projects = [
  {
    title: 'Dreamy Denz',
    tag: 'Website Design',
    description:
      "Kids' party rentals in Lava Hot Springs: bounce houses, soft play, and balloon arches. A clean, mobile-friendly site for browsing packages and booking a date.",
    image: '/images/portfolio-dreamydenz.jpg',
    href: 'https://dreamydenz.org',
  },
  {
    title: 'Chokecherry & Wren Makery',
    tag: 'Online Shop Demo',
    description:
      'A sample storefront for a handmade craft seller: rotating banners, product collections, quick view, and secure Stripe checkout on every item. Built as a starting point for local makers who want to sell online.',
    image: '/images/portfolio-craftshop.jpg',
    href: 'https://martwez.github.io/craft-shop-demo/',
  },
  {
    title: 'Cedar & Steam Cabins',
    tag: 'Lodging Demo',
    description:
      'A sample site for vacation rental hosts: cabin galleries, a direct "Request to Book" form that shows guests what they save on booking fees, and Airbnb/VRBO links for guests who prefer them.',
    image: '/images/portfolio-lodging.jpg',
    href: 'https://martwez.github.io/lodging-demo/',
  },
  {
    title: 'Basalt Ridge Construction',
    tag: 'Contractor Demo',
    description:
      'A sample site for construction and handyman businesses: service cards for every trade, a filterable project gallery, and a detailed free-estimate form that collects everything needed to quote the job.',
    image: '/images/portfolio-handyman.jpg',
    href: 'https://martwez.github.io/handyman-demo/',
  },
  {
    title: 'Bannock Peak Realty',
    tag: 'Real Estate Demo',
    description:
      'A sample site for a local real estate agent: property search, listing pages with photo galleries, a mortgage calculator, and home valuation and showing request forms.',
    image: '/images/portfolio-realtor.jpg',
    href: 'https://martwez.github.io/realtor-demo/',
  },
]

export default function PortfolioPage() {
  return (
    <section className="bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[650px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Recent Work
          </span>
          <h1 className="mb-4 text-[2rem] font-extrabold min-[701px]:text-[2.3rem]">Portfolio</h1>
          <p className="text-[1.05rem] text-text-dim">
            A few examples of finished work. More photos and write-ups from camera installs and other jobs are coming soon.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[500px] grid-cols-1 gap-7 min-[701px]:max-w-[1000px] min-[701px]:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 80}
              // An odd last card sits centered under the two-column grid instead of hanging left.
              className="min-[701px]:last:odd:col-span-2 min-[701px]:last:odd:mx-auto min-[701px]:last:odd:w-[calc(50%-14px)]"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border-[2px] border-border bg-card-light transition-all hover:-translate-y-[3px]"
              >
                <img src={project.image} alt={project.title} className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 block w-fit rounded-md bg-[#ec4899]/20 px-2 py-1 text-[0.75rem] font-bold text-[#f472b6]">
                    {project.tag}
                  </span>
                  <h2 className="mb-1 text-[1.1rem] font-bold">{project.title}</h2>
                  <p className="mb-4 text-[0.9rem] text-text-dim-light">{project.description}</p>
                  <span className="mt-auto inline-block w-fit text-[0.85rem] font-semibold text-lava-light">
                    Visit site &rarr;
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#contact"
            className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
