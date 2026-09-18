import LeanServicePage from './LeanServicePage'
import { FileIcon, BatchIcon, Printer3DIcon } from './ServiceIcons'

const tiles = [
  {
    Icon: FileIcon,
    accent: 'mineral' as const,
    title: 'Bring your own file',
    description: "Have an STL or other print-ready file? Send it over and I'll get it printed.",
  },
  {
    Icon: BatchIcon,
    accent: 'ember' as const,
    title: 'Batch runs',
    description: 'Need more than one? I can run multiples of the same file, no minimum order.',
  },
  {
    Icon: Printer3DIcon,
    accent: 'lava' as const,
    title: 'Material & color options',
    description: 'A range of plastics and colors depending on what the job calls for.',
  },
]

export default function Printer3DPage() {
  return (
    <LeanServicePage
      eyebrow="3D Printing"
      title="3D Printing"
      subtitle="Bring me a print-ready file and I'll take it from there, single pieces or batch runs."
      tiles={tiles}
      ctaLabel="Get a free quote"
      ctaHref="/#contact"
    />
  )
}
