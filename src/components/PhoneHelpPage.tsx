import LeanServicePage from './LeanServicePage'
import { VideoCallIcon, PhotoTransferIcon, PhoneHelpIcon } from './ServiceIcons'

const tiles = [
  {
    Icon: VideoCallIcon,
    accent: 'mineral' as const,
    title: 'Video calls made easy',
    description: 'FaceTime, WhatsApp, or whatever the family uses, set up and tested so it just works.',
  },
  {
    Icon: PhotoTransferIcon,
    accent: 'ember' as const,
    title: 'Freeing up storage',
    description: 'Moving photos off a full phone and onto a computer, so you keep the memories without the warnings.',
  },
  {
    Icon: PhoneHelpIcon,
    accent: 'lava' as const,
    title: 'New device setup',
    description: "Switching phones? I'll move your contacts, photos, and apps over so nothing gets lost.",
  },
]

export default function PhoneHelpPage() {
  return (
    <LeanServicePage
      eyebrow="Smartphones & Tablets"
      title="Phone & Tablet Help"
      subtitle="Patient, one-on-one help with the device you carry around, especially popular with older residents who'd rather have a person walk them through it than a manual."
      tiles={tiles}
      ctaLabel="Get a free quote"
      ctaHref="/#contact"
    />
  )
}
