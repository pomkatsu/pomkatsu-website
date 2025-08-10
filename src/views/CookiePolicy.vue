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
            <div><strong>Last Updated:</strong> August 10, 2025</div>
          </div>
        </div>

        <!-- Section 1: Introduction -->
        <h2 id="introduction">1. Introduction</h2>
        <p>
          This Cookie Policy explains how Pomkatsu LLC ("we," "our," "us") uses cookies and similar tracking 
          technologies on our website and web-based services. This policy is part of our 
          <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>.
        </p>

        <!-- Section 2: What Are Cookies? -->
        <h2 id="what-are-cookies">2. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites 
          remember your preferences and improve your user experience.
        </p>

        <!-- Section 3: Types of Cookies We Use -->
        <h2 id="types-of-cookies">3. Types of Cookies We Use</h2>

        <h3>Essential Cookies (Strictly Necessary)</h3>
        <p>These cookies are required for our services to function properly.</p>
        
        <div class="table-wrapper">
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Maintains user session</td>
                <td>Session</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>auth_token</td>
                <td>Authentication status</td>
                <td>7 days</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>security_token</td>
                <td>CSRF protection</td>
                <td>Session</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>cookie_consent</td>
                <td>Stores consent preferences</td>
                <td>1 year</td>
                <td>Pomkatsu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Functional Cookies</h3>
        <p>These cookies enable personalized features.</p>
        
        <div class="table-wrapper">
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>language_pref</td>
                <td>Language preference</td>
                <td>1 year</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>theme_setting</td>
                <td>Dark/light mode</td>
                <td>1 year</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>timezone</td>
                <td>User timezone</td>
                <td>30 days</td>
                <td>Pomkatsu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Analytics Cookies</h3>
        <p>These help us understand how users interact with our services.</p>
        
        <div class="table-wrapper">
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics tracking</td>
                <td>2 years</td>
                <td>Google</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics session</td>
                <td>24 hours</td>
                <td>Google</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Rate limiting</td>
                <td>1 minute</td>
                <td>Google</td>
              </tr>
              <tr>
                <td>firebase_analytics</td>
                <td>Firebase Analytics</td>
                <td>2 years</td>
                <td>Google</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Performance Cookies</h3>
        <p>These help us monitor and improve service performance.</p>
        
        <div class="table-wrapper">
          <table class="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>performance_metrics</td>
                <td>Load time tracking</td>
                <td>Session</td>
                <td>Pomkatsu</td>
              </tr>
              <tr>
                <td>error_tracking</td>
                <td>Error monitoring</td>
                <td>7 days</td>
                <td>Pomkatsu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section 4: Third-Party Cookies -->
        <h2 id="third-party-cookies">4. Third-Party Cookies</h2>
        <p>Our services may include third-party cookies from:</p>
        <ul class="styled-list">
          <li><strong>Google Analytics</strong>: Website analytics</li>
          <li><strong>Firebase</strong>: App analytics and performance</li>
          <li><strong>Stripe</strong>: Payment processing (only on payment pages)</li>
          <li><strong>CloudFlare</strong>: Security and performance</li>
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
        <p>Our mobile apps use similar technologies:</p>
        <ul class="styled-list">
          <li><strong>Device identifiers</strong>: For analytics and performance</li>
          <li><strong>Local storage</strong>: For offline functionality</li>
          <li><strong>Firebase Analytics</strong>: For usage patterns</li>
        </ul>

        <p>You can control mobile tracking through your device settings:</p>
        <ul class="styled-list">
          <li><strong>iOS</strong>: Settings > Privacy > Tracking</li>
          <li><strong>Android</strong>: Settings > Privacy > Ads</li>
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
  color: #46301C; /* primary */
}

.legal-header {
  background: transparent;
  border: 1px solid #F5E5C8; /* secondary-dark */
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.company-info {
  font-size: 1.25rem;
  color: #2E1F12; /* primary-dark */
  margin-bottom: 1rem;
}

.date-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  color: #5A3E26; /* primary-light */
  font-size: 0.875rem;
}

/* Typography */
.legal-content h2 {
  color: #46301C; /* primary */
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #F5E5C8; /* secondary-dark */
  scroll-margin-top: 80px;
}

.legal-content h3 {
  color: #46301C; /* primary */
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.legal-content h4 {
  color: #5A3E26; /* primary-light */
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.legal-content p {
  margin-bottom: 1rem;
  color: #5A3E26; /* primary-light */
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
  color: #5A3E26; /* primary-light */
}

.styled-list li::before,
.legal-content ul:not(.toc-nav) li::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #46301C; /* primary */
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
  background: #FFF8ED; /* secondary-light */
  border: 1px solid #F5E5C8; /* secondary-dark */
  border-radius: 8px;
  overflow: hidden;
}

.cookie-table thead {
  background: #FCF1DC; /* secondary */
  border-bottom: 2px solid #F5E5C8; /* secondary-dark */
}

.cookie-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #46301C; /* primary */
}

.cookie-table td {
  padding: 0.75rem 1rem;
  color: #5A3E26; /* primary-light */
  border-bottom: 1px solid #F5E5C8; /* secondary-dark */
}

.cookie-table tbody tr:last-child td {
  border-bottom: none;
}

.cookie-table tbody tr:hover {
  background: #FCF1DC; /* secondary */
}

/* Boxes */
.info-box {
  background: #FFF8ED; /* secondary-light */
  border-left: 4px solid #5A3E26; /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

/* Contact Section */
.contact-section {
  margin-top: 2rem;
}

.contact-card {
  background: #FFF8ED; /* secondary-light */
  border: 1px solid #F5E5C8; /* secondary-dark */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 1px 2px rgba(70, 48, 28, 0.05);
}

.contact-card h4 {
  color: #46301C; /* primary */
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.contact-card p {
  margin: 0.25rem 0;
  color: #5A3E26; /* primary-light */
}

/* Links */
.legal-link {
  color: #46301C; /* primary */
  text-decoration: none;
  border-bottom: 1px dotted #5A3E26;
  transition: all 0.2s ease;
}

.legal-link:hover {
  color: #2E1F12; /* primary-dark */
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