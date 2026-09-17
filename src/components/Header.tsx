import { useEffect, useRef, useState } from 'react'

const serviceLinks = [
  { href: '/pc-help/', label: 'PC Help' },
  { href: '/phone-help/', label: 'Phone & Tablet Help' },
  { href: '/starlink/', label: 'Starlink' },
  { href: '/security/', label: 'Security & Cameras' },
  { href: '/website-design/', label: 'Website Design' },
  { href: '/3d-printing/', label: '3D Printing' },
]

const navLinks = [
  { href: '/#area', label: 'Service Area' },
  { href: '/#about', label: 'About' },
  { href: '/portfolio/', label: 'Portfolio' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onClickAway = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClickAway)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickAway)
      document.removeEventListener('keydown', onEscape)
    }
  }, [servicesOpen])

  return (
    <header
      className={`sticky top-0 z-50 bg-[rgba(28,26,23,0.9)] backdrop-blur-[6px] border-b-[3px] border-border transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-[1100px] mx-auto">
        <a href="/" aria-label="LavaTech Pro home" className="flex items-center no-underline">
          <img src="/images/lavatech-logo.svg" alt="" className="h-14 w-auto" />
        </a>

        <nav className="hidden min-[701px]:block">
          <ul className="flex items-center gap-7">
            <li className="relative" ref={servicesRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
                className="flex items-center gap-1 bg-transparent font-semibold text-[0.95rem] text-text-dim transition-colors hover:text-lava-light"
              >
                Services
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl border-[3px] border-border bg-card p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-[0.9rem] font-semibold text-text-dim transition-colors hover:bg-bg-alt hover:text-lava-light"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-[0.95rem] text-text-dim transition-colors hover:text-lava-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden min-[701px]:inline-block rounded-md bg-ember px-[18px] py-[10px] text-[0.9rem] font-bold text-ink transition-all hover:brightness-110"
        >
          Reach Out
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="min-[701px]:hidden bg-transparent border-none text-text text-[1.6rem] cursor-pointer leading-none"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="min-[701px]:hidden border-t-[3px] border-border bg-bg px-6 py-4 animate-[menu-in_0.25s_ease-out_both]">
          <ul className="flex flex-col gap-4">
            <li>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between bg-transparent font-semibold text-[0.95rem] text-text-dim"
              >
                Services
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-3 flex flex-col gap-3 border-l-[3px] border-border pl-4">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => {
                          setMobileServicesOpen(false)
                          setMenuOpen(false)
                        }}
                        className="text-[0.9rem] font-semibold text-text-dim hover:text-lava-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-[0.95rem] text-text-dim hover:text-lava-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-md bg-ember px-[18px] py-[10px] text-[0.9rem] font-bold text-ink hover:brightness-110"
              >
                Reach Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
