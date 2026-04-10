import styles from './styles.module.css'

export type FeaturesBlockType = {
  blockType: 'features'
  heading?: string | null
  features?: Array<{
    id?: string | null
    title: string
    description: string
    icon?: string | null
  }> | null
}

type FeaturesProps = {
  block: FeaturesBlockType
}

export function Features({ block }: FeaturesProps) {
  const { heading, features } = block

  if (!features || features.length === 0) {
    return null
  }

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={feature.id || index} className={styles.feature}>
              {feature.icon && <div className={styles.icon}>{feature.icon}</div>}
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

