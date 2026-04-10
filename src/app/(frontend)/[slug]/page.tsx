import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

import { RenderBlocks, getPageBySlug } from '@fjelkor/core'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

/**
 * Page dynamique - Page Builder
 * 
 * Cette page récupère le contenu depuis Payload CMS en fonction du slug
 * et rend les blocs dans l'ordre défini par l'utilisateur.
 */
export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const page = await getPageBySlug(slug, payload)

  if (!page) {
    notFound()
  }

  return (
    <main>
      <RenderBlocks blocks={page.blocks} />
    </main>
  )
}

/**
 * Génération des métadonnées dynamiques
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const page = await getPageBySlug(slug, payload)

  if (!page) {
    return {
      title: 'Page non trouvée',
    }
  }

  return {
    title: page.title,
    description: `Page ${page.title}`,
  }
}
