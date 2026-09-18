import LeanServicePage from './LeanServicePage'
import { StarlinkIcon, InstallIcon, TroubleshootIcon, ExtendCoverageIcon } from './ServiceIcons'

const tiles = [
  {
    Icon: StarlinkIcon,
    accent: 'mineral' as const,
    title: 'Site test',
    description: "Not sure Starlink will work at your property? I'll come test the signal in person before you commit to anything.",
  },
  {
    Icon: InstallIcon,
    accent: 'ember' as const,
    title: 'Install',
    description: 'Dish mounted, cable routed clean, router set up, and the connection tested before I leave.',
  },
  {
    Icon: TroubleshootIcon,
    accent: 'lava' as const,
    title: 'Troubleshooting',
    description: "Signal acting up down the road? I'm the same contact, billed as a standard visit.",
  },
  {
    Icon: ExtendCoverageIcon,
    accent: 'mineral' as const,
    title: 'Extend coverage',
    description: 'Need it reaching a shop, barn, or second building? I can extend the network out to it.',
  },
]

export default function StarlinkPage() {
  return (
    <LeanServicePage
      eyebrow="Rural Internet"
      title="Starlink Setup & Troubleshooting"
      subtitle="On-site testing, full install, and I stay your contact after, whatever you need, one visit at a time."
      tiles={tiles}
      promo={{
        title: 'Get a free month of Starlink',
        description: "Order through my referral link and you'll get a free month applied to your service.",
        ctaLabel: 'Use my referral link',
        href: 'https://starlink.com?referral=RC-DF-11158806-57224-96',
      }}
      ctaLabel="Call or text to get started"
      ctaHref="/#contact"
    />
  )
}
