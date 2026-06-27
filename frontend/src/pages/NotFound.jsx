import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="section-shell" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="glass-card" style={{ padding: '2rem', maxWidth: 520 }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>Page not found</h1>
        <p style={{ color: 'var(--color-muted)', margin: '1rem 0' }}>The page you are looking for is not available.</p>
        <Link className="button button-primary" to="/">Return Home</Link>
      </div>
    </main>
  );
}

export default NotFound;
