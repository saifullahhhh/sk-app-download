import './App.css'

import skLogo from './assets/images/sk-logo.png'
import appStoreBadge from './assets/images/app-store.png'
import googlePlayBadge from './assets/images/google-play.png'

const APP_STORE_URL =
  'https://apps.apple.com/pk/app/s-k-livestock/id6754009240'

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.sk.livestock'

function App() {
  return (
    <main className="download-page">

      {/* Background decoration */}
      <div className="background-circle circle-one" />
      <div className="background-circle circle-two" />

      <div className="page-container">

        {/* =========================
            LEFT SIDE
        ========================= */}
        <section className="brand-section">

          <div className="brand-logo">
            <img
              src={skLogo}
              alt="SK Livestock"
            />

            <div className="brand-name">
              <span>SK</span>
              <strong>Livestock</strong>
            </div>
          </div>

          <div className="brand-content">

            <span className="brand-label">
              SK LIVESTOCK MOBILE APP
            </span>

            <h1>
              Everything
              <br />
              Livestock.
              <span> One Platform.</span>
            </h1>

            <p>
              Access livestock buying and selling,
              market rates, opportunities, farm services
              and more — wherever you are.
            </p>

            <div className="feature-row">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Buy & Sell Livestock</span>
              </div>

              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Live Market Rates</span>
              </div>

              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Industry Opportunities</span>
              </div>
            </div>

          </div>

          <p className="brand-footer">
            Pakistan&apos;s digital livestock ecosystem
          </p>

        </section>


        {/* =========================
            DOWNLOAD PANEL
        ========================= */}
        <section className="download-section">

          <div className="download-panel">

            <div className="app-icon">
              <img
                src={skLogo}
                alt=""
              />
            </div>

            <span className="download-label">
              GET THE APP
            </span>

            <h2>
              Download SK Livestock
            </h2>

            <p className="download-description">
              Choose your platform below and start
              exploring the livestock ecosystem.
            </p>

            <div className="store-buttons">

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button"
                aria-label="Download SK Livestock on the App Store"
              >
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                />
              </a>

              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button"
                aria-label="Get SK Livestock on Google Play"
              >
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                />
              </a>

            </div>

            <div className="availability">
              <span className="availability-dot" />

              <span>
                Available for iOS & Android
              </span>
            </div>

            <div className="divider" />

            <p className="safe-download">
              Official SK Livestock application
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}

export default App