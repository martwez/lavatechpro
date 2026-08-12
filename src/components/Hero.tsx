import HeroBackdrop from './HeroBackdrop'

// Drop the photo in public/images and set this (e.g. '/images/l-mountain.jpg') to swap it in —
// the illustrated backdrop below steps aside automatically and the scrim underneath keeps the text readable.
const HERO_IMAGE = ''

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_15%,#241f19_0%,#1c1a17_60%)] px-5 pt-[60px] pb-[50px] text-center min-[701px]:px-6 min-[701px]:pt-[90px] min-[701px]:pb-[80px]">
      {HERO_IMAGE ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      ) : (
        <HeroBackdrop />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,15,13,0.55)_0%,rgba(16,15,13,0.3)_45%,rgba(16,15,13,0.8)_100%)]" />
      <div className="relative max-w-[1100px] mx-auto px-6">
        <h1 className="mx-auto mb-[18px] max-w-[750px] text-[2.1rem] font-extrabold leading-[1.15] min-[701px]:text-[2.8rem] animate-[fade-up_0.6s_ease-out_both]">
          Your local tech guy in <span className="text-lava-light">Lava Hot Springs</span>
        </h1>
        <p className="mx-auto mb-[34px] max-w-[600px] text-[1.15rem] text-text-dim animate-[fade-up_0.6s_ease-out_both] [animation-delay:120ms]">
          Computer repair, Starlink setup, security cameras, websites, and 3D printing — from someone who actually lives here. No driving in from out of town, no waiting a week for a callback.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-[fade-up_0.6s_ease-out_both] [animation-delay:240ms]">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-ember px-[30px] py-[14px] text-base font-bold text-white transition-all hover:-translate-y-px hover:brightness-110"
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
            <span className="h-[6px] w-[6px] rounded-full bg-ember" /> Free travel within 10 miles
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-ember" /> Available Fridays &amp; Weekends
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-ember" /> House calls &amp; local pickup
          </div>
        </div>
      </div>
    </section>
  )
}
