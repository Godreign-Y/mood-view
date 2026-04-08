import { useNavigate } from 'react-router-dom';
import './Landing.css';

const MOOD_CARDS = [
  { emoji: '😊', label: 'Happy', name: 'Sarah', className: 'landing__mood-card--1' },
  { emoji: '🔥', label: 'Fired Up', name: 'Alex', className: 'landing__mood-card--2' },
  { emoji: '😌', label: 'Calm', name: 'Jordan', className: 'landing__mood-card--3' },
  { emoji: '🤔', label: 'Thinking', name: 'Mia', className: 'landing__mood-card--4' },
  { emoji: '😎', label: 'Cool', name: 'Sam', className: 'landing__mood-card--5' },
];

const FEATURES = [
  {
    icon: '🎭',
    name: 'Express Yourself',
    desc: "Share your mood with emojis and short notes. Let your team know how you're feeling today.",
  },
  {
    icon: '👥',
    name: 'Team Connection',
    desc: 'See how everyone on your team is doing at a glance. Build empathy and understanding.',
  },
  {
    icon: '📊',
    name: 'Mood Insights',
    desc: 'Track team mood trends over time. Spot patterns and celebrate the good days.',
  },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Background animated orbs */}
      <div className="landing__bg-orbs" aria-hidden="true">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
      </div>

      {/* Navbar */}
      <nav className="landing__nav" id="landing-nav">
        <div className="landing__logo">
          <span className="landing__logo-icon">🎯</span>
          <span className="landing__logo-text">MoodView</span>
        </div>
        <ul className="landing__nav-links">
          <li>
            <a href="#features" className="landing__nav-link">Features</a>
          </li>
          <li>
            <a href="#about" className="landing__nav-link">About</a>
          </li>
          <li>
            <button
              className="landing__nav-cta"
              onClick={() => navigate('/login')}
              id="nav-login-btn"
            >
              Sign In
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="landing__hero" id="hero-section">
        <div className="landing__hero-content">
          <div className="landing__badge">
            <span className="landing__badge-dot" />
            Team Wellness Tracker
          </div>

          <h1 className="landing__title">
            How's Your{' '}
            <span className="landing__title-gradient">Team Feeling</span>{' '}
            Today?
          </h1>

          <p className="landing__subtitle">
            A simple, beautiful way for teams to share daily moods, build
            empathy, and stay connected — one emoji at a time.
          </p>

          <div className="landing__cta-group">
            <button
              className="landing__cta-primary"
              onClick={() => navigate('/login')}
              id="hero-cta-btn"
            >
              Get Started
              <span className="landing__cta-arrow">→</span>
            </button>
            <a href="#features" className="landing__cta-secondary">
              Learn More ↓
            </a>
          </div>
        </div>

        {/* Floating Mood Cards */}
        <div className="landing__hero-visual">
          <div className="landing__emoji-scene">
            <div className="landing__center-ring" />
            {MOOD_CARDS.map((card) => (
              <div
                key={card.label}
                className={`landing__mood-card ${card.className}`}
              >
                <span className="landing__mood-emoji">{card.emoji}</span>
                <span className="landing__mood-label">{card.label}</span>
                <span className="landing__mood-name">— {card.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing__features" id="features">
        <div className="landing__features-header">
          <span className="landing__features-tag">Why MoodView?</span>
          <h2 className="landing__features-title">
            Everything you need to stay in sync
          </h2>
          <p className="landing__features-subtitle">
            Simple tools to help your team communicate feelings and build a
            healthier work culture.
          </p>
        </div>

        <div className="landing__features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.name} className="landing__feature-card">
              <span className="landing__feature-icon">{feature.icon}</span>
              <h3 className="landing__feature-name">{feature.name}</h3>
              <p className="landing__feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="landing__footer">
        <p className="landing__footer-text">
          Made with{' '}
          <span className="landing__footer-heart">♥</span>{' '}
          by Team MoodView · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Landing;
