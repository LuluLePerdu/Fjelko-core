import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Titre',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'primaryButton',
      type: 'group',
      label: 'Bouton principal',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Texte',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Lien',
          required: true,
        },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      label: 'Bouton secondaire (optionnel)',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Texte',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Lien',
        },
      ],
    },
  ],
}

