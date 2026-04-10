import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { HomeFooter, ROOT_SLUG, RenderBlocks, getPageBySlug } from '@fjelkor/core'

const fallbackHomeBlocks = [
  {
    blockType: 'hero' as const,
    heading: 'FJELKOR',
    subheading: 'Creations digitales durables et memorables, pensees en profondeur.',
    ctaText: 'Demarrer une conversation',
    ctaLink: '/admin',
  },
  {
    blockType: 'features' as const,
    heading: 'Services',
    features: [
      {
        title: 'Direction Visuelle',
        description: 'Identites et systemes de design coherents, penses dans la duree. Logique avant esthetique.',
      },
      {
        title: 'Interfaces Numeriques',
        description: "Experiences intuitives et precises. UX/UI qui respecte l'intention utilisateur.",
      },
      {
        title: 'Solutions Web',
        description: 'Developpement performant et maintenable. Code de qualite, architecture durable.',
      },
    ],
  },
  {
    blockType: 'cta' as const,
    heading: 'Un projet en tete?',
    description: 'Construisons une base solide pour votre presence numerique.',
    primaryButton: {
      text: 'Demarrer une conversation',
      link: '/admin',
    },
  },
]

export default async function HomePage() {
  const payload = await getPayload({ config })

  const [homePage, siteSettings] = await Promise.all([
    getPageBySlug(ROOT_SLUG, payload),
    payload.findGlobal({
      slug: 'site-settings',
      depth: 0,
    }),
  ])

  const siteName = siteSettings?.siteName || 'FJELKOR'
  const adminLabel = siteSettings?.headerAdminLabel || 'ADMIN'
  const footerCompany = siteSettings?.footer?.company || siteName
  const footerLocation = siteSettings?.footer?.location || 'Sherbrooke'
  const footerEmail = siteSettings?.footer?.email || 'contact@fjelkor.studio'
  const blocks = homePage?.blocks?.length ? homePage.blocks : fallbackHomeBlocks
  const heroBlock = blocks.find((block) => block.blockType === 'hero')
  const nonHeroBlocks = blocks.filter((block) => block.blockType !== 'hero')
  const heroTitle = heroBlock?.heading || siteName
  const heroTagline = heroBlock?.subheading || 'Creations digitales durables et memorables, pensees en profondeur.'
  const heroCtaText = heroBlock?.ctaText || 'Demarrer une conversation'
  const heroCtaLink = heroBlock?.ctaLink || '/admin'

  return (
    <div className="landing">
      {/* ─────────────────────── HEADER ─────────────────────── */}
      <header className="header-bar" role="banner">
        <div className="header-content">
          <div className="header-logo-mark" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 160 160" fill="none">
              <path
                d="M54 28L100 56L82 68L82 110L54 132L54 78L26 94L26 46L54 28Z"
                fill="currentColor"
              />
              <path
                d="M82 68L126 44L126 62L100 76L100 114L82 126L82 68Z"
                fill="currentColor"
                opacity="0.72"
              />
              <path
                d="M54 28L82 44L82 68L54 54L54 28Z"
                fill="currentColor"
                opacity="0.14"
              />
              <path
                d="M26 46L54 28L54 54L26 70L26 46Z"
                fill="currentColor"
                opacity="0.2"
              />
            </svg>
          </div>
          <div className="header-wordmark">{siteName}</div>
        </div>
        <nav aria-label="Main navigation">
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              {adminLabel}
            </span>
          </Link>
        </nav>
      </header>

      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="hero-section" role="region" aria-label="Hero section">
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <p className="hero-label">STUDIO DIGITAL</p>
          <p className="hero-subtitle">Direction Visuelle · Interfaces · Solutions Web</p>

          <div className="hero-logo" aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 160 160" fill="none">
              <path
                d="M54 28L100 56L82 68L82 110L54 132L54 78L26 94L26 46L54 28Z"
                fill="currentColor"
              />
              <path
                d="M82 68L126 44L126 62L100 76L100 114L82 126L82 68Z"
                fill="currentColor"
                opacity="0.72"
              />
              <path
                d="M54 28L82 44L82 68L54 54L54 28Z"
                fill="currentColor"
                opacity="0.14"
              />
              <path
                d="M26 46L54 28L54 54L26 70L26 46Z"
                fill="currentColor"
                opacity="0.2"
              />
            </svg>
          </div>

          <h1 className="hero-title">{heroTitle}</h1>
          <p className="hero-tagline">{heroTagline}</p>
          <p className="hero-services">Design · Développement · Direction Artistique</p>
          <div style={{ marginTop: '24px' }}>
            <Link href={heroCtaLink} className="cta-link">
              {heroCtaText}
            </Link>
          </div>
        </div>
      </section>

      <RenderBlocks blocks={nonHeroBlocks} />

      {/* ─────────────────────── FOOTER ─────────────────────── */}
      <HomeFooter company={footerCompany} location={footerLocation} email={footerEmail} />
    </div>
  )
}
