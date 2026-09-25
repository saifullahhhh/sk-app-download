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
      <div className="background-grid" />

      <div className="page-container">

        {/* =========================
            LEFT BRAND SECTION
        ========================= */}
        <section className="brand-section">

          <div className="brand-logo">
            <img
              src={skLogo}
              alt="SK Livestock & Mart"
            />

            <div className="brand-name">
              <span>SK</span>
              <strong>Livestock & Mart</strong>
            </div>
          </div>

          <div className="brand-content">

            <span className="brand-label">
              SK LIVESTOCK & MEAT MART
            </span>

            <h1>
              Everything Livestock.
              <br />
              <span>Fresh Meat. One Platform.</span>
            </h1>

            <p>
              Buy and sell livestock, order fresh meat
              from Meat Mart, check market rates,
              discover opportunities, and access
              livestock services — all in one place.
            </p>

            <div className="feature-row">

              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Buy & Sell Livestock</span>
              </div>

              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Fresh Meat Mart</span>
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
            Livestock & fresh meat, connected digitally.
          </p>

        </section>


        {/* =========================
            DOWNLOAD SECTION
        ========================= */}
        <section className="download-section">

          <div className="download-panel">

            <div className="app-icon">
              <img
                src={skLogo}
                alt="SK Livestock & Mart"
              />
            </div>

            <span className="download-label">
              GET THE APP
            </span>

            <h2>
              Download
              <span className="download-title-brand">
                SK Livestock & Mart
              </span>
            </h2>

            <p className="download-description">
              Choose your platform and get access to
              livestock services and Meat Mart on the go.
            </p>

            <div className="store-buttons">

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button"
                aria-label="Download SK Livestock & Mart on the App Store"
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
                aria-label="Get SK Livestock & Mart on Google Play"
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
              Official SK Livestock & Mart application
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}

export default App