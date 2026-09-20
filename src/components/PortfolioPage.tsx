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

        <div className="mx-auto grid max-w-[500px] grid-cols-1 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
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
