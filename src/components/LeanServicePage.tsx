import type { ComponentType } from 'react'
import Reveal from './Reveal'

type Accent = 'mineral' | 'ember' | 'lava'

type Tile = {
  Icon: ComponentType<{ className?: string }>
  title: string
  description: string
  accent: Accent
}

type Promo = {
  title: string
  description: string
  ctaLabel: string
  href: string
}

type LeanServicePageProps = {
  eyebrow: string
  title: string
  subtitle: string
  tiles: Tile[]
  promo?: Promo
  ctaLabel: string
  ctaHref: string
}

const accentClasses: Record<Accent, string> = {
  mineral: 'bg-[color-mix(in_srgb,var(--color-mineral)_18%,var(--color-bg-alt))] text-mineral',
  ember: 'bg-[color-mix(in_srgb,var(--color-ember)_18%,var(--color-bg-alt))] text-ember',
  lava: 'bg-[color-mix(in_srgb,var(--color-lava-light)_18%,var(--color-bg-alt))] text-lava-light',
}

export default function LeanServicePage({ eyebrow, title, subtitle, tiles, promo, ctaLabel, ctaHref }: LeanServicePageProps) {
  return (
    <section className="scroll-mt-[85px] bg-bg-alt px-5 py-16 min-[701px]:px-6 min-[701px]:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        <Reveal className="mx-auto mb-12 max-w-[600px] text-center">
          <span className="mb-3 block text-[0.85rem] font-bold uppercase tracking-[1.5px] text-lava-light">
            {eyebrow}
          </span>
          <h1 className="mb-4 text-[2rem] font-bold min-[701px]:text-[2.3rem]">{title}</h1>
          <p className="text-[1.05rem] text-text-dim">{subtitle}</p>
        </Reveal>

        <div className="mb-8 grid grid-cols-1 gap-4 min-[701px]:grid-cols-2">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 80}>
              <div className="h-full rounded-xl border-[2px] border-border bg-card-light p-5">
                <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${accentClasses[tile.accent]}`}>
                  <tile.Icon className="h-5 w-5" />
                </div>
                <h2 className="mb-1 text-[1rem] font-bold">{tile.title}</h2>
                <p className="text-[0.9rem] leading-relaxed text-text-dim">{tile.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {promo && (
          <Reveal delay={tiles.length * 80} className="mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border-[2px] border-ember bg-[color-mix(in_srgb,var(--color-ember)_14%,var(--color-card-light))] px-6 py-5">
              <div>
                <h3 className="mb-1 text-[1rem] font-bold">{promo.title}</h3>
                <p className="text-[0.9rem] text-text-dim">{promo.description}</p>
              </div>
              <a
                href={promo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit shrink-0 rounded-md bg-ember px-4 py-[10px] text-[0.85rem] font-bold text-ink transition-all hover:brightness-110"
              >
                {promo.ctaLabel}
              </a>
            </div>
          </Reveal>
        )}

        <div className="text-center">
          <a
            href={ctaHref}
            className="inline-block rounded-md bg-ember px-6 py-3 text-[0.95rem] font-bold text-ink transition-all hover:brightness-110"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
