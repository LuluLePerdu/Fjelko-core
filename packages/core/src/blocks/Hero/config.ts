import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Titre',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sous-titre',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texte du bouton',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Lien du bouton',
    },
  ],
}

