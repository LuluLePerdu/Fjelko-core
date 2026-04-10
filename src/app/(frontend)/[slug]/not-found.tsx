import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      background: '#E8E4DC',
      color: '#0A0A0A',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: '300',
          letterSpacing: '0.2em',
          margin: '0 0 24px',
          opacity: '0.3'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '300',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          margin: '0 0 32px'
        }}>
          PAGE NON TROUVÉE
        </h2>
        <p style={{
          fontSize: '1rem',
          fontWeight: '300',
          letterSpacing: '0.05em',
          lineHeight: '1.8',
          margin: '0 0 48px',
          opacity: '0.7'
        }}>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '18px 48px',
            background: 'transparent',
            color: '#0A0A0A',
            textDecoration: 'none',
            border: '1px solid #0A0A0A',
            fontSize: '0.875rem',
            fontWeight: '400',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'all 0.4s ease'
          }}
        >
          RETOUR À L'ACCUEIL
        </Link>
      </div>
    </main>
  )
}