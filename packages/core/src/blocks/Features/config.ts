import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Titre de la section',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Liste des fonctionnalités',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titre',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icône (emoji ou nom)',
        },
      ],
    },
  ],
}
