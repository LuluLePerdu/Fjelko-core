import styles from './HomeFooter.module.css'

export type HomeFooterProps = {
  company: string
  location: string
  email: string
  year?: number
}

export function HomeFooter({ company, location, email, year = new Date().getFullYear() }: HomeFooterProps) {
  return (
    <footer className={styles.footerSection} role="contentinfo">
      <p className={styles.footerPrimary}>© {year} · {company} · {location}</p>
      <p className={styles.footerSecondary}>{email}</p>
    </footer>
  )
}