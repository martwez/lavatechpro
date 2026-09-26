import { serviceLinks } from './Header'

const contactLinks = [
  { href: 'tel:2084171081', label: '(208) 417-1081' },
  { href: 'mailto:lavatechpro@gmail.com', label: 'lavatechpro@gmail.com' },
  { href: 'https://www.facebook.com/profile.php?id=61579679710291', label: 'Facebook', external: true },
]

const headingClass = 'mb-4 text-[0.78rem] font-bold uppercase tracking-[1px] text-lava-light'
const linkClass = 'transition-colors hover:text-lava-light'

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-ink px-6 pt-14 pb-8 text-[0.9rem] text-ink-text/70">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 min-[701px]:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="/" aria-label="LavaTech Pro home" className="mb-4 inline-block">
            <img src="/images/lavatech-logo.svg" alt="" className="h-14 w-auto" />
          </a>
          <p className="max-w-[300px]">
            Local tech help based in Lava Hot Springs, ID, serving towns within about 30 miles. Available Fridays &amp;
            weekends.
          </p>
        </div>

        <div>
          <h2 className={headingClass}>Services</h2>
          <ul className="flex flex-col gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <ul className="flex flex-col gap-2">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="mt-5 inline-block rounded-md bg-ember px-[18px] py-[10px] text-[0.9rem] font-bold text-ink transition-all hover:brightness-110"
          >
            Reach Out
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1100px] flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[0.8rem]">
        <span>© {new Date().getFullYear()} LavaTech Pro</span>
        <a href="/privacy/" className={linkClass}>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
