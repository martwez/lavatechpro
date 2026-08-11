export default function Hero() {
  return (
    <section className="border-b border-border bg-[radial-gradient(circle_at_30%_20%,#cddaf0_0%,#e7ebf2_65%)] px-5 pt-[60px] pb-[50px] text-center min-[701px]:px-6 min-[701px]:pt-[90px] min-[701px]:pb-[80px]">
      <div className="max-w-[1100px] mx-auto px-6">
        <h1 className="mx-auto mb-[18px] max-w-[750px] text-[2.1rem] font-extrabold leading-[1.15] min-[701px]:text-[2.8rem] animate-[fade-up_0.6s_ease-out_both]">
          Your local tech guy in <span className="text-lava-light">Lava Hot Springs</span>
        </h1>
        <p className="mx-auto mb-[34px] max-w-[600px] text-[1.15rem] text-text-dim animate-[fade-up_0.6s_ease-out_both] [animation-delay:120ms]">
          Computer repair, Starlink setup, security cameras, websites, and 3D printing — from someone who actually lives here. No driving in from out of town, no waiting a week for a callback.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-[fade-up_0.6s_ease-out_both] [animation-delay:240ms]">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-lava px-[30px] py-[14px] text-base font-bold text-white transition-all hover:-translate-y-px hover:bg-lava-light"
          >
            Book a House Call
          </a>
          <a
            href="#services"
            className="inline-block rounded-lg border-[1.5px] border-border px-[30px] py-[14px] text-base font-bold text-text transition-colors hover:border-lava-light hover:text-lava-light"
          >
            See Services
          </a>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-7 text-[0.9rem] text-text-dim animate-[fade-up_0.6s_ease-out_both] [animation-delay:360ms]">
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-lava-light" /> Free travel within 10 miles
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-lava-light" /> Available Fridays &amp; Weekends
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-lava-light" /> House calls &amp; local pickup
          </div>
        </div>
      </div>
    </section>
  )
}
