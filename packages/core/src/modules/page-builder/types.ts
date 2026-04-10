import type { HeroBlockType } from '@fjelkor/core/blocks/Hero'
import type { FeaturesBlockType } from '@fjelkor/core/blocks/Features'
import type { CTABlockType } from '@fjelkor/core/blocks/CTA'

/**
 * Types spécifiques au module Page Builder
 */

export type PageBlock = HeroBlockType | FeaturesBlockType | CTABlockType

export type PageDocument = {
  id?: string | number
  title: string
  slug?: string | null
  blocks?: PageBlock[] | null
}

export type HeroBlock = Extract<PageBlock, { blockType: 'hero' }>
export type FeaturesBlock = Extract<PageBlock, { blockType: 'features' }>
export type CTABlock = Extract<PageBlock, { blockType: 'cta' }>

/**
 * Props pour les composants de blocs
 */
export type BlockComponentProps<T extends PageBlock> = {
  block: T
}