import Reveal from './Reveal'
import PhotoPlaceholder from './PhotoPlaceholder'

const highlights = ['Doing tech work since age 15', 'ISU College of Technology grad', '10 years in the Lava area']

export default function About() {
  return (
    <section id="about" className="px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[50px] px-6 min-[801px]:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <PhotoPlaceholder label="Photo: Adolfo" className="h-full min-h-[260px]" />
        </Reveal>
        <Reveal delay={100}>
          <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            About Me
          </span>
          <h2 className="mb-[18px] text-[2rem] font-extrabold">Hi, I'm Adolfo Martinez</h2>
          <p className="mb-4 text-text-dim">
            I've been the go-to tech person since I was about 15 — always the one fixing computers, routers, and
            random electronics for family and friends before it was ever a job. Ten years ago I moved out to the
            Lava Hot Springs area for Idaho State University and graduated from the College of Technology. I never
            really left.
          </p>
          <p className="mb-6 text-text-dim">
            These days I work as a systems administrator during the week, and LavaTech Pro is where that same
            hands-on troubleshooting goes to work for the neighbors and small businesses around here — Fridays and
            weekends, done right the first time.
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
