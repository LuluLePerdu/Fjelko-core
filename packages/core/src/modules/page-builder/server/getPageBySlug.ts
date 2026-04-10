import type { Payload } from 'payload'
import type { PageDocument } from '@fjelkor/core/modules/page-builder/types'

/**
 * Récupère une page par son slug depuis Payload CMS
 * 
 * Cette fonction est utilisée côté serveur (Server Component)
 * pour récupérer les données d'une page dynamique.
 * 
 * @param slug - Le slug de la page (ex: "about", "contact")
 * @returns La page trouvée ou null
 */
export async function getPageBySlug(slug: string, payload: Payload): Promise<PageDocument | null> {
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 0,
  })

  return (docs[0] as PageDocument | undefined) ?? null
}

/**
 * Récupère tous les slugs de pages pour la génération statique
 * 
 * Utilisé dans generateStaticParams pour pré-générer les pages
 * au moment du build
 */
export async function getAllPageSlugs(payload: Payload): Promise<string[]> {
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
    select: {
      slug: true,
    },
  })

  return docs.map((page) => page.slug).filter((slug): slug is string => Boolean(slug))
}