const facts = [
  {
    icon: '📍',
    title: 'Service Area',
    detail: 'Free travel within ~10 miles of Lava Hot Springs; mileage rate applies beyond that',
  },
  {
    icon: '🗓️',
    title: 'Availability',
    detail: 'Fridays & weekends',
  },
  {
    icon: '🤝',
    title: 'How it Works',
    detail: "Message or call, describe the job, get a straight answer on cost before anything's scheduled",
  },
]

export default function ServiceArea() {
  return (
    <section id="area" className="px-5 py-[50px] min-[701px]:px-6 min-[701px]:py-[70px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[50px] px-6 min-[801px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-[10px] block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            Local &amp; Reliable
          </span>
          <h2 className="mb-[18px] text-[2rem] font-extrabold">
            Based in Lava Hot Springs — not driving in from Pocatello
          </h2>
          <p className="mb-4 text-text-dim">
            LavaTech Pro is a one-person operation, and that's on purpose. You get someone local, easy to reach, and easy to trust — not a call center or a rotating cast of technicians.
          </p>
          <p className="mb-4 text-text-dim">
            Currently taking jobs Fridays and weekends. Book ahead to lock in a time, especially for install jobs that take a bit longer.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-[26px]">
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
        </div>
      </div>
    </section>
  )
}
