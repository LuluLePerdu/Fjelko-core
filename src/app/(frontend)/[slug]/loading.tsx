export default function Loading() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      background: '#E8E4DC',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '400px' }}>
        <div
          className="spinner"
          style={{
            width: '64px',
            height: '64px',
            border: '2px solid rgba(10, 10, 10, 0.1)',
            borderTopColor: '#0A0A0A',
            borderRadius: '50%',
            margin: '0 auto 32px',
          }}
        />
        <p style={{
          fontSize: '0.875rem',
          fontWeight: '300',
          color: '#0A0A0A',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: '0.6'
        }}>
          Chargement
        </p>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .spinner {
            animation: spin 1.2s linear infinite;
          }
        `
      }} />
    </main>
  )
}

