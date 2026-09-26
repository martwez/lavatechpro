import Reveal from './Reveal'

const highlights = ['Doing tech work since age 15', 'ISU College of Technology grad', '10 years in the Lava area']

export default function About() {
  return (
    <section id="about" className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[50px] px-6 min-[801px]:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <figure>
            <img
              src="/images/about-me.webp"
              alt="My wife and I"
              className="aspect-[4/5] w-full rounded-xl border-2 border-border object-cover"
            />
            <figcaption className="mt-3 text-center text-[0.85rem] text-text-dim">
              My wife and I
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            About Me
          </span>
          <h2 className="mb-4 text-[2rem] font-bold">The go-to IT guy</h2>
          <p className="mb-4 text-text-dim">
            Fixing computers, routers, and random electronics for friends and family, long before it was ever a
            job. Now I'd like to extend that same help to the rest of my community.
          </p>
          <p className="mb-7 text-text-dim">
            Ten years ago I moved to Lava Hot Springs while I attended Idaho State University in Pocatello. I
            graduated from the College of Technology and never really left. These days I work as a systems
            administrator during the week, and LavaTech Pro is where that same hands-on troubleshooting goes to
            work for the neighbors and small businesses around here, done right the first time.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[0.9rem] text-text-dim">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-ember" /> {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
