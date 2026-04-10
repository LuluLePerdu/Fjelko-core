# @fjelkor/core

Package core contenant tous les modules réutilisables pour Payload CMS.

## Structure

```
packages/core/src/
├── blocks/              # Blocs de contenu (config + component + styles)
│   ├── Hero/
│   │   ├── config.ts           # Configuration Payload
│   │   ├── Component.tsx       # Composant React
│   │   ├── styles.module.css   # Styles CSS Module
│   │   └── index.ts            # Exports
│   ├── Features/
│   └── CTA/
├── collections/         # Collections Payload
│   ├── Users.ts
│   ├── Media.ts
│   └── Pages.ts
├── globals/            # Globals Payload
│   └── SiteSettings.ts
├── access/             # Access control functions
│   ├── authenticated.ts
│   └── adminOnly.ts
├── modules/            # Modules métier
│   └── page-builder/
│       ├── types.ts
│       ├── server/
│       │   └── getPageBySlug.ts
│       └── components/
│           └── RenderBlocks.tsx
└── index.ts            # Point d'entrée principal
```

## Utilisation

### Dans un projet Payload

```typescript
// payload.config.ts
import { Users, Media, Pages, SiteSettings } from '@fjelkor/core'

export default buildConfig({
  collections: [Users, Media, Pages],
  globals: [SiteSettings],
  // ...
})
```

### Dans les composants React

```tsx
// app/[slug]/page.tsx
import { RenderBlocks, getPageBySlug, getAllPageSlugs } from '@fjelkor/core'

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug)
  return <RenderBlocks blocks={page?.blocks} />
}
```

## Architecture recommandee

- Le package `@fjelkor/core` est la source de verite pour les collections, blocks, globals et modules partageables.
- Le dossier `src/` de l'app doit contenir surtout le shell Next.js (`app/`, routes API, config runtime), sans dupliquer ces elements.

## Développement

```bash
# Installer les dépendances
npm install

# Build
npm run build

# Watch mode
npm run dev
```

## Ajouter un nouveau bloc

1. Créer le dossier `src/blocks/MonBloc/`
2. Créer `config.ts` (configuration Payload)
3. Créer `Component.tsx` (composant React)
4. Créer `styles.module.css` (styles)
5. Créer `index.ts` pour exporter
6. Ajouter dans `src/index.ts`

## Philosophie

- **Un seul endroit** : Tout le code réutilisable est ici
- **Copy-paste friendly** : Facile à copier dans un nouveau projet
- **Type-safe** : TypeScript partout
- **Modulaire** : Chaque bloc/collection est indépendant