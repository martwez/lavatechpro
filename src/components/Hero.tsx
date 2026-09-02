import HeroBackdrop from './HeroBackdrop'

// Drop the photo in public/images and set this (e.g. '/images/l-mountain.jpg') to swap it in.
// The illustrated backdrop below steps aside automatically and the scrim underneath keeps the text readable.
const HERO_IMAGE = '/images/l-mountain.jpg'

// Drop a video in public/videos and set this (e.g. '/videos/tubing.mp4') to use it as the hero
// background instead. It takes priority over HERO_IMAGE, which is then used as its poster frame
// while the video loads. Keep clips short (10-20s) and under a few MB so mobile stays fast.
const HERO_VIDEO = ''

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_15%,#241f19_0%,#1c1a17_60%)] px-5 pt-[60px] pb-[50px] text-center min-[701px]:px-6 min-[701px]:pt-[90px] min-[701px]:pb-[80px]">
      {HERO_VIDEO ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_IMAGE || undefined}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : HERO_IMAGE ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      ) : (
        <HeroBackdrop />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,15,13,0.4)_0%,rgba(16,15,13,0.26)_45%,rgba(16,15,13,0.58)_100%)]" />
      <div className="relative max-w-[1100px] mx-auto px-6">
        <h1 className="mx-auto mb-[18px] max-w-[750px] text-[2.1rem] font-extrabold leading-[1.15] [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_4px_18px_rgba(0,0,0,0.6)] min-[701px]:text-[2.8rem] animate-[fade-up_0.6s_ease-out_both]">
          Your local tech guy, right here in <span className="text-lava-light">Lava Hot Springs</span>
        </h1>
        <p className="mx-auto mb-[34px] max-w-[600px] text-[1.15rem] text-[#e4e0d6] [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_10px_rgba(0,0,0,0.6)] animate-[fade-up_0.6s_ease-out_both] [animation-delay:120ms]">
          Computer repair, Starlink setup, security cameras, websites, and 3D printing. Quick to schedule, no waiting a week for a callback.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-[fade-up_0.6s_ease-out_both] [animation-delay:240ms]">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-ember px-[30px] py-[14px] text-base font-bold text-ink transition-all hover:-translate-y-px hover:brightness-110"
          >
            Book a Visit
          </a>
          <a
            href="#services"
            className="inline-block rounded-lg border-[1.5px] border-border bg-ink px-[30px] py-[14px] text-base font-bold text-text transition-colors hover:border-lava-light hover:text-lava-light"
          >
            See Services
          </a>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-7 text-[0.9rem] text-[#e4e0d6] [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_10px_rgba(0,0,0,0.6)] animate-[fade-up_0.6s_ease-out_both] [animation-delay:360ms]">
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
