<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
</script>

<template>
  <LegalLayout title="Cookie Policy">
    <div class="legal-container">
      <!-- Table of Contents Sidebar -->
      <TableOfContents />

      <!-- Main Content -->
      <div class="legal-content">
        <!-- Header Information -->
        <div class="legal-header">
          <div class="company-info">
            <strong>Pomkatsu LLC</strong>
          </div>
          <div class="date-info">
            <div><strong>Effective Date:</strong> August 10, 2025</div>
            <div><strong>Last Updated:</strong> April 9, 2026</div>
            <div><strong>Version:</strong> 1.1</div>
          </div>
        </div>

        <!-- Section 1: Introduction -->
        <h2 id="introduction">1. Introduction</h2>
        <p>
          This Cookie Policy explains how Pomkatsu LLC ("we," "our," "us") uses cookies and similar tracking
          technologies on our marketing websites (including <a href="https://pomkatsu.com" class="legal-link">pomkatsu.com</a>
          and our individual app landing pages such as <a href="https://myseedbook.com" class="legal-link">myseedbook.com</a>).
          This policy is part of our <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>.
        </p>
        <div class="info-box">
          <p>
            <strong>Short version:</strong> Our marketing websites are simple, mostly-static landing pages. They do
            not use advertising cookies, cross-site tracking, or fingerprinting. We do not set any cookies that require
            your consent under GDPR or similar laws.
          </p>
        </div>

        <!-- Section 2: What Are Cookies? -->
        <h2 id="what-are-cookies">2. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites 
          remember your preferences and improve your user experience.
        </p>

        <!-- Section 3: What We Actually Use -->
        <h2 id="types-of-cookies">3. What Pomkatsu Actually Uses</h2>

        <p>
          Our marketing websites are static Vue single-page applications served from a CDN. As of the effective date
          of this policy:
        </p>

        <ul class="styled-list">
          <li><strong>No advertising cookies.</strong> We do not run ads and we do not integrate with any ad network.</li>
          <li><strong>No cross-site tracking.</strong> We do not set third-party tracking cookies, pixels, or beacons.</li>
          <li><strong>No fingerprinting.</strong> We do not use canvas fingerprinting or other device-fingerprinting techniques.</li>
          <li><strong>No persistent analytics cookies by default.</strong> Our marketing sites do not currently embed Google Analytics, Firebase Analytics, PostHog, or similar client-side analytics SDKs. If this changes, this page will be updated to disclose them before they are activated.</li>
          <li><strong>Possible first-party local storage.</strong> Your browser may cache static assets (fonts, images, JavaScript bundles) to speed up page loads. This is normal browser caching and not used for tracking.</li>
          <li><strong>Possible CDN and hosting provider cookies.</strong> Our hosting/CDN provider (Netlify) may set strictly-necessary cookies for load-balancing, session affinity, or DDoS protection. These are essential to deliver the site and cannot be turned off without breaking the site.</li>
        </ul>

        <h3>Inside the Mobile Apps</h3>
        <p>
          Our mobile apps (including SeedBook, EasyTranslate AI, Astral, Destina, and FoodTally) are native apps and
          do not set web cookies. They do send product analytics events to PostHog as described in our
          <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>. Analytics event data sent from the
          apps contains only opaque user identifiers and does not include your name, email, journal contents, photos,
          or other personal content.
        </p>

        <h3>If We Ever Add Analytics</h3>
        <p>
          If we decide in the future to add client-side web analytics to our marketing websites, we will:
        </p>
        <ul class="styled-list">
          <li>Update this Cookie Policy to disclose the specific provider and data collected</li>
          <li>Add a consent banner for visitors in jurisdictions that require one (EU/EEA/UK)</li>
          <li>Respect Global Privacy Control (GPC) signals</li>
          <li>Respect the Do Not Track (DNT) header where legally required</li>
        </ul>

        <!-- Section 5: Your Cookie Choices -->
        <h2 id="cookie-choices">5. Your Cookie Choices</h2>

        <h3>Browser Settings</h3>
        <p>You can control cookies through your browser settings:</p>
        <ul class="styled-list">
          <li>Block all cookies</li>
          <li>Delete existing cookies</li>
          <li>Allow cookies from specific sites only</li>
          <li>Receive notifications when cookies are set</li>
        </ul>

        <h3>Cookie Consent Banner</h3>
        <p>We provide a cookie consent banner where you can:</p>
        <ul class="styled-list">
          <li>Accept all cookies</li>
          <li>Reject non-essential cookies</li>
          <li>Customize your preferences</li>
        </ul>

        <h3>Opt-Out Links</h3>
        <ul class="styled-list">
          <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" class="legal-link" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout</a></li>
          <li>Google Ads: <a href="https://adssettings.google.com" class="legal-link" target="_blank" rel="noopener">https://adssettings.google.com</a></li>
        </ul>

        <!-- Section 6: Impact of Disabling Cookies -->
        <h2 id="impact-of-disabling">6. Impact of Disabling Cookies</h2>
        <div class="info-box">
          <p>If you disable cookies:</p>
          <ul>
            <li>Essential features may not work properly</li>
            <li>You may need to log in repeatedly</li>
            <li>Your preferences won't be saved</li>
            <li>Some security features may be affected</li>
          </ul>
        </div>

        <!-- Section 7: Mobile App Tracking -->
        <h2 id="mobile-tracking">7. Mobile App Tracking</h2>
        <p>Our mobile apps use device-local technologies:</p>
        <ul class="styled-list">
          <li><strong>Device identifiers</strong>: Opaque, app-specific identifiers used for analytics and crash reporting (not advertising identifiers)</li>
          <li><strong>Local storage</strong>: For offline functionality, cached data, and user preferences stored on-device</li>
          <li><strong>PostHog analytics</strong>: Anonymized product analytics events (no PII, no content of your journal, catalog, or photos) &mdash; disclosed in the Privacy Policy</li>
        </ul>

        <p>You can control mobile tracking through your device settings:</p>
        <ul class="styled-list">
          <li><strong>iOS</strong>: Settings &rarr; Privacy &amp; Security &rarr; Tracking. You can also reset your advertising identifier in Settings &rarr; Privacy &amp; Security &rarr; Apple Advertising.</li>
          <li><strong>Android</strong>: Settings &rarr; Privacy &rarr; Ads. You can reset your advertising ID or opt out of personalized ads entirely.</li>
        </ul>

        <!-- Section 8: Do Not Track (DNT) -->
        <h2 id="do-not-track">8. Do Not Track (DNT)</h2>
        <p>
          We honor Do Not Track signals where legally required. When DNT is enabled:
        </p>
        <ul class="styled-list">
          <li>We disable non-essential analytics</li>
          <li>Third-party tracking is blocked</li>
          <li>Only essential cookies are used</li>
        </ul>

        <!-- Section 9: Global Privacy Control (GPC) -->
        <h2 id="global-privacy-control">9. Global Privacy Control (GPC)</h2>
        <p>
          We recognize Global Privacy Control signals as valid requests to opt-out of tracking cookies.
        </p>

        <!-- Section 10: Updates to This Policy -->
        <h2 id="updates">10. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy periodically. We will notify you of material changes through:
        </p>
        <ul class="styled-list">
          <li>Website banner notification</li>
          <li>Email notification for registered users</li>
          <li>Update date at the top of this policy</li>
        </ul>

        <!-- Section 11: Cookie Policy by Region -->
        <h2 id="policy-by-region">11. Cookie Policy by Region</h2>

        <h3>European Union (GDPR)</h3>
        <ul class="styled-list">
          <li>Explicit consent required for non-essential cookies</li>
          <li>Right to withdraw consent at any time</li>
          <li>Detailed information about each cookie provided</li>
        </ul>

        <h3>California (CCPA/CPRA)</h3>
        <ul class="styled-list">
          <li>Right to opt-out of sale/sharing (we don't sell data)</li>
          <li>Cookie information included in privacy disclosures</li>
        </ul>

        <h3>Other Regions</h3>
        <ul class="styled-list">
          <li>We apply the highest privacy standards globally</li>
          <li>Local laws may provide additional rights</li>
        </ul>

        <!-- Section 12: Contact Us -->
        <h2 id="contact">12. Contact Us</h2>
        <div class="contact-section">
          <p>For questions about our use of cookies:</p>
          
          <div class="contact-card">
            <h4>Pomkatsu LLC</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Website: <a href="https://pomkatsu.com" class="legal-link">https://pomkatsu.com</a></p>
          </div>

          <div class="contact-card">
            <h4>For privacy-specific inquiries:</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Subject: "Cookie Policy Question"</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p><em>This Cookie Policy is part of our Privacy Policy. By using our services with cookies enabled, you consent to their use as described in this policy.</em></p>
        </div>
      </div>
    </div>
  </LegalLayout>
</template>

<style scoped>
.legal-container {
  display: flex;
  gap: 2rem;
  position: relative;
}

/* Main Content */
.legal-content {
  flex: 1;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--legal-text); /* primary */
}

.legal-header {
  background: transparent;
  border: 1px solid var(--legal-border); /* secondary-dark */
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.company-info {
  font-size: 1.25rem;
  color: var(--legal-text-strong); /* primary-dark */
  margin-bottom: 1rem;
}

.date-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  color: var(--legal-text-secondary); /* primary-light */
  font-size: 0.875rem;
}

/* Typography */
.legal-content h2 {
  color: var(--legal-text); /* primary */
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--legal-border); /* secondary-dark */
  scroll-margin-top: 80px;
}

.legal-content h3 {
  color: var(--legal-text); /* primary */
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.legal-content h4 {
  color: var(--legal-text-secondary); /* primary-light */
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.legal-content p {
  margin-bottom: 1rem;
  color: var(--legal-text-secondary); /* primary-light */
}

/* Lists */
.styled-list,
.legal-content ul:not(.toc-nav) {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.styled-list li,
.legal-content ul:not(.toc-nav) li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--legal-text-secondary); /* primary-light */
}

.styled-list li::before,
.legal-content ul:not(.toc-nav) li::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: var(--legal-text); /* primary */
  font-weight: bold;
}

/* Tables */
.table-wrapper {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--legal-bg-box); /* secondary-light */
  border: 1px solid var(--legal-border); /* secondary-dark */
  border-radius: 8px;
  overflow: hidden;
}

.cookie-table thead {
  background: var(--legal-bg-surface); /* secondary */
  border-bottom: 2px solid var(--legal-border); /* secondary-dark */
}

.cookie-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--legal-text); /* primary */
}

.cookie-table td {
  padding: 0.75rem 1rem;
  color: var(--legal-text-secondary); /* primary-light */
  border-bottom: 1px solid var(--legal-border); /* secondary-dark */
}

.cookie-table tbody tr:last-child td {
  border-bottom: none;
}

.cookie-table tbody tr:hover {
  background: var(--legal-bg-surface); /* secondary */
}

/* Boxes */
.info-box {
  background: var(--legal-bg-box); /* secondary-light */
  border-left: 4px solid var(--legal-border-accent); /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

/* Contact Section */
.contact-section {
  margin-top: 2rem;
}

.contact-card {
  background: var(--legal-bg-box); /* secondary-light */
  border: 1px solid var(--legal-border); /* secondary-dark */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 1px 2px var(--legal-shadow);
}

.contact-card h4 {
  color: var(--legal-text); /* primary */
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.contact-card p {
  margin: 0.25rem 0;
  color: var(--legal-text-secondary); /* primary-light */
}

/* Links */
.legal-link {
  color: var(--legal-link); /* primary */
  text-decoration: none;
  border-bottom: 1px dotted var(--legal-link-border);
  transition: all 0.2s ease;
}

.legal-link:hover {
  color: var(--legal-link-hover); /* primary-dark */
  border-bottom-style: solid;
}

/* Footer */
.legal-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid #E5E7EB;
  text-align: center;
  color: #9CA3AF;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .legal-content h2 {
    font-size: 1.5rem;
  }

  .legal-content h3 {
    font-size: 1.125rem;
  }

  .date-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .legal-header {
    padding: 1.5rem;
  }

  .cookie-table {
    font-size: 0.875rem;
  }

  .cookie-table th,
  .cookie-table td {
    padding: 0.5rem;
  }
}

/* Print Styles */
@media print {
  .toc-sidebar {
    display: none;
  }

  .legal-content {
    max-width: 100%;
  }

  .legal-link {
    border-bottom: none;
    color: inherit;
  }

  .cookie-table {
    border: 1px solid #000;
    background: white;
  }

  .cookie-table thead {
    background: #f0f0f0;
  }
}
</style>