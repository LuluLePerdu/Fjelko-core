import styles from './styles.module.css'

export type HeroBlockType = {
  blockType: 'hero'
  heading: string
  subheading?: string | null
  ctaText?: string | null
  ctaLink?: string | null
}

type HeroProps = {
  block: HeroBlockType
}

export function Hero({ block }: HeroProps) {
  const { heading, subheading, ctaText, ctaLink } = block

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{heading}</h1>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
        {ctaText && ctaLink && (
          <a href={ctaLink} className={styles.cta}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
