import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  admin: {
    description: 'Configuration globale du site web',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Nom du site',
      required: true,
      defaultValue: 'FJELKOR',
    },
    {
      name: 'headerAdminLabel',
      type: 'text',
      label: 'Label du lien Admin (header)',
      defaultValue: 'ADMIN',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      label: 'Description du site',
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Pied de page',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Nom de la compagnie',
          defaultValue: 'FJELKOR',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Localisation',
          defaultValue: 'Sherbrooke',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email de contact',
          defaultValue: 'contact@fjelkor.studio',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter URL',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
      ],
    },
  ],
}
