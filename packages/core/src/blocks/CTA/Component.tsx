import styles from './styles.module.css'

export type CTABlockType = {
  blockType: 'cta'
  heading: string
  description?: string | null
  primaryButton?: {
    text?: string | null
    link?: string | null
  } | null
  secondaryButton?: {
    text?: string | null
    link?: string | null
  } | null
}

type CTAProps = {
  block: CTABlockType
}

export function CTA({ block }: CTAProps) {
  const { heading, description, primaryButton, secondaryButton } = block

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.buttons}>
          {primaryButton?.text && primaryButton?.link && (
            <a href={primaryButton.link} className={styles.primaryButton}>
              {primaryButton.text}
            </a>
          )}
          {secondaryButton?.text && secondaryButton?.link && (
            <a href={secondaryButton.link} className={styles.secondaryButton}>
              {secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

