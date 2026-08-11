import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#area', label: 'Service Area' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[rgba(243,245,248,0.92)] backdrop-blur-[6px] border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 text-[1.4rem] font-extrabold tracking-[0.5px]">
          <Logo />
          <span className="text-lava-light">LavaTech Pro</span>
        </div>

        <nav className="hidden min-[701px]:block">
          <ul className="flex gap-7">
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
          className="hidden min-[701px]:inline-block rounded-md bg-lava px-[18px] py-[10px] text-[0.9rem] font-bold text-white transition-colors hover:bg-lava-light"
        >
          Get a Quote
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
        <div className="min-[701px]:hidden border-t border-border bg-bg px-6 py-4">
          <ul className="flex flex-col gap-4">
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
                className="inline-block rounded-md bg-lava px-[18px] py-[10px] text-[0.9rem] font-bold text-white hover:bg-lava-light"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
