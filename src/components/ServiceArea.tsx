import Reveal from './Reveal'

const facts = [
  {
    icon: '📍',
    title: 'Service Area',
    detail:
      'Free travel within about 10 miles of Lava Hot Springs. Beyond that, a small travel fee based on distance (included in your quote) covers Soda Springs, Bancroft, McCammon, Arimo, and other towns around them, about a 30-mile loop. Willing to travel farther for the right job. Just ask.',
  },
  {
    icon: '🗓️',
    title: 'Availability',
    detail: 'Fridays & weekends',
  },
  {
    icon: '🤝',
    title: 'How it Works',
    detail: 'Fill out the quick form (fastest way to reach me) or call/text. Happy to talk through what you need before anything is scheduled.',
  },
]

export default function ServiceArea() {
  return (
    <section id="area" className="scroll-mt-[85px] px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[50px] px-6 min-[801px]:grid-cols-[0.9fr_1.1fr_0.9fr]">
        <Reveal>
          <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Coverage &amp; Availability
          </span>
          <h2 className="mb-[18px] text-[2rem] font-extrabold">
            Where and when I work
          </h2>
          <p className="mb-4 text-text-dim">
            Based in Lava Hot Springs and out on the road most Fridays and weekends, covering other nearby towns too. Book ahead to lock in a time, especially for install jobs that run a little longer.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <img
            src="/images/on-the-job.jpg"
            alt="On the job locally"
            className="h-full min-h-[340px] w-full rounded-xl border border-border object-cover"
          />
        </Reveal>
        <Reveal delay={150} className="rounded-xl border border-border bg-card p-[26px]">
          {facts.map((fact, i) => (
            <div
              key={fact.title}
              className={`flex gap-[14px] py-[14px] ${i < facts.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="text-[1.3rem]" aria-hidden="true">{fact.icon}</div>
              <div>
                <h3 className="mb-[3px] text-[0.95rem] font-bold">{fact.title}</h3>
                <span className="text-[0.88rem] text-text-dim">{fact.detail}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
