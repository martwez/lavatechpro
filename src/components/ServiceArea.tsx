import Reveal from './Reveal'

const facts = [
  {
    stat: '10 mi',
    title: 'Free travel radius',
    detail:
      'Beyond that, a small distance-based fee covers Inkom, McCammon, Robin, Arimo, Downey, Bancroft, Grace, and Soda Springs, about a 30-mile drive. Willing to go farther for the right job.',
    color: 'text-mineral',
  },
  {
    stat: 'Fri–Sun',
    title: 'Available',
    detail: 'On the road most Fridays and weekends. Book ahead to lock in a time, especially for longer install jobs.',
    color: 'text-lava-light',
  },
  {
    stat: '1 form',
    title: 'How it works',
    detail: 'Fill out the quick form (fastest way to reach me) or call/text. We talk through what you need before anything is scheduled.',
    color: 'text-ember',
  },
]

export default function ServiceArea() {
  return (
    <section id="area" className="scroll-mt-[85px] px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 items-center gap-[50px] min-[701px]:grid-cols-2">
          <Reveal>
            <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
              Service Area
            </span>
            <h2 className="mb-4 text-[2rem] font-bold">
              Coverage &amp; Availability
            </h2>
            <p className="mb-4 text-text-dim">
              Based in Lava Hot Springs and out on the road most Fridays and weekends, covering other nearby towns too. Book ahead to lock in a time, especially for install jobs that run a little longer.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src="/images/service-map.webp"
              alt="Map of the LavaTech Pro 30-mile service area around Lava Hot Springs, covering Inkom, McCammon, Robin, Arimo, Downey, Bancroft, Grace, and Soda Springs"
              className="aspect-[3/2] w-full rounded-xl border-2 border-border object-contain"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 rounded-xl border-2 border-mineral bg-card-light min-[701px]:grid-cols-3">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.title}
              delay={150 + i * 80}
              className={`px-7 py-8 ${i > 0 ? 'border-t-2 border-mineral min-[701px]:border-l-2 min-[701px]:border-t-0' : ''}`}
            >
              <div className={`mb-1 font-heading text-[2.4rem] font-bold leading-none tabular-nums ${fact.color}`}>{fact.stat}</div>
              <h3 className="mb-2 text-[0.95rem] font-bold">{fact.title}</h3>
              <p className="text-[0.85rem] text-text-dim-light">{fact.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
