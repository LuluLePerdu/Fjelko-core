import type { PageDocument } from '@fjelkor/core/modules/page-builder/types'
import { Hero } from '@fjelkor/core/blocks/Hero'
import { Features } from '@fjelkor/core/blocks/Features'
import { CTA } from '@fjelkor/core/blocks/CTA'

type RenderBlocksProps = {
  blocks?: PageDocument['blocks']
}

/**
 * RenderBlocks - Orchestrateur de rendu des blocs
 * 
 * Ce composant mappe chaque blockType à son composant correspondant.
 * Pour ajouter un nouveau bloc :
 * 1. Importer le composant
 * 2. Ajouter un case dans le switch
 */
export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const key = `block-${index}`

        switch (block.blockType) {
          case 'hero':
            return <Hero key={key} block={block} />

          case 'features':
            return <Features key={key} block={block} />

          case 'cta':
            return <CTA key={key} block={block} />

          default:
            if (process.env.NODE_ENV === 'development') {
              console.warn(`Block type "${(block as any).blockType}" not mapped in RenderBlocks`)
            }
            return null
        }
      })}
    </>
  )
}

