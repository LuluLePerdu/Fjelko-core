import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import type { Page } from './payload-types'

import { Users } from '../packages/core/src/collections/Users'
import { Media } from '../packages/core/src/collections/Media'
import { Pages, ROOT_SLUG, defaultRootBlocks } from '../packages/core/src/collections/Pages'
import { SiteSettings } from '../packages/core/src/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  onInit: async (payload) => {
    const existingRootPage = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: ROOT_SLUG,
        },
      },
      limit: 1,
      depth: 0,
    })

    if (existingRootPage.docs.length === 0) {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Accueil',
          slug: ROOT_SLUG,
          blocks: defaultRootBlocks as NonNullable<Page['blocks']>,
        },
      })
    }
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})