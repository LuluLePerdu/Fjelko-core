import type { CollectionConfig } from 'payload'
import type { PageDocument } from '@fjelkor/core/modules/page-builder/types'

import { HeroBlock } from '@fjelkor/core/blocks/Hero/config'
import { FeaturesBlock } from '@fjelkor/core/blocks/Features/config'
import { CTABlock } from '@fjelkor/core/blocks/CTA/config'

export const ROOT_SLUG = '/'

export const defaultRootBlocks: NonNullable<PageDocument['blocks']> = [
  {
    blockType: 'hero',
    heading: 'FJELKOR',
    subheading: 'Creations digitales durables et memorables, pensees en profondeur.',
    ctaText: 'Demarrer une conversation',
    ctaLink: '/admin',
  },
  {
    blockType: 'features',
    heading: 'Services',
    features: [
      {
        title: 'Direction Visuelle',
        description: 'Identites et systemes de design coherents, penses dans la duree. Logique avant esthetique.',
      },
      {
        title: 'Interfaces Numeriques',
        description: "Experiences intuitives et precises. UX/UI qui respecte l'intention utilisateur.",
      },
      {
        title: 'Solutions Web',
        description: 'Developpement performant et maintenable. Code de qualite, architecture durable.',
      },
    ],
  },
  {
    blockType: 'cta',
    heading: 'Un projet en tete?',
    description: 'Construisons une base solide pour votre presence numerique.',
    primaryButton: {
      text: 'Demarrer une conversation',
      link: '/admin',
    },
  },
]

function normalizeRootBlocks(blocks: unknown): unknown[] {
  const inputBlocks = Array.isArray(blocks) ? blocks : []
  const firstByType = new Map<string, Record<string, unknown>>()

  for (const block of inputBlocks) {
    if (!block || typeof block !== 'object') continue

    const blockType = (block as { blockType?: unknown }).blockType
    if (typeof blockType !== 'string') continue
    if (firstByType.has(blockType)) continue

    firstByType.set(blockType, block as Record<string, unknown>)
  }

  return defaultRootBlocks.map((defaultBlock) => {
    const existing = firstByType.get(defaultBlock.blockType) || {}

    return {
      ...defaultBlock,
      ...existing,
      blockType: defaultBlock.blockType,
    }
  })
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre de la page',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL (slug)',
      required: true,
      defaultValue: ROOT_SLUG,
      unique: true,
      index: true,
      admin: {
        description: "URL de la page (ex: /, about, contact, services). La page '/' garde des modules fixes.",
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Contenu de la page',
      blocks: [HeroBlock, FeaturesBlock, CTABlock],
      admin: {
        description:
          "Construisez votre page avec des blocs. Pour la page '/', les blocs sont fixes (hero/features/cta) mais leur contenu reste editable.",
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        if (data.slug === ROOT_SLUG) {
          data.blocks = normalizeRootBlocks(data.blocks)
        }

        return data
      },
    ],
  },
  timestamps: true,
}

