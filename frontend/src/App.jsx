import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Teammates: drop your components here */}
        <Route path="/login" element={<PlaceholderPage title="Login" />} />
        <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

/* Temporary placeholder for routes other team members will build */
function PlaceholderPage({ title }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-family)',
        color: 'var(--color-text)',
        gap: '1rem',
      }}
    >
      <span style={{ fontSize: '3rem' }}>🚧</span>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>{title} Page</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Coming soon — this page will be built by a teammate.
      </p>
      <a
        href="/"
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1.5rem',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px',
          color: 'var(--color-text-muted)',
          fontSize: '0.875rem',
        }}
      >
        ← Back to Home
      </a>
    </div>
  );
}

export default App;
