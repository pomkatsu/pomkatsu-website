<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
</script>

<template>
  <LegalLayout title="End User License Agreement (EULA)">
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

        <!-- Important Notice -->
        <div class="critical-warning">
          <h4>⚠️ IMPORTANT - READ CAREFULLY</h4>
          <p>
            This End User License Agreement ("EULA") is a legal agreement between you ("User," "you") and 
            Pomkatsu LLC ("Company," "we," "our," "us") for all mobile applications published by Pomkatsu LLC 
            ("Software," "App," "Application").
          </p>
          <p class="warning-text">
            BY DOWNLOADING, INSTALLING, OR USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THIS EULA. 
            IF YOU DO NOT AGREE, DO NOT DOWNLOAD, INSTALL, OR USE THE SOFTWARE.
          </p>
        </div>

        <!-- Section 1: License Grant -->
        <h2 id="license-grant">1. License Grant</h2>
        <p>
          Subject to your compliance with this EULA, Pomkatsu LLC grants you a limited, non-exclusive, 
          non-transferable, revocable license to:
        </p>
        <ul class="styled-list">
          <li>Download and install the Software on devices you own or control</li>
          <li>Use the Software for personal, non-commercial purposes</li>
          <li>Access features according to your subscription level</li>
        </ul>

        <!-- Section 2: License Restrictions -->
        <h2 id="license-restrictions">2. License Restrictions</h2>
        <div class="warning-box">
          <p><strong>You SHALL NOT:</strong></p>
          <ul>
            <li>Copy, modify, or create derivative works of the Software</li>
            <li>Reverse engineer, decompile, or disassemble the Software</li>
            <li>Remove, alter, or obscure any proprietary notices</li>
            <li>Rent, lease, lend, sell, sublicense, or redistribute the Software</li>
            <li>Use the Software to develop competing products or services</li>
            <li>Violate any applicable laws or third-party rights</li>
            <li>Use the Software for any illegal or unauthorized purpose</li>
            <li>Bypass any technical limitations or security measures</li>
          </ul>
        </div>

        <!-- Section 3: Intellectual Property Rights -->
        <h2 id="intellectual-property">3. Intellectual Property Rights</h2>

        <h3>Ownership</h3>
        <p>
          The Software and all worldwide intellectual property rights therein are the exclusive property 
          of Pomkatsu LLC and its licensors. All rights not expressly granted are reserved.
        </p>

        <h3>Feedback</h3>
        <p>
          Any feedback, suggestions, or ideas you provide become the property of Pomkatsu LLC without 
          compensation to you.
        </p>

        <h3>Third-Party Components</h3>
        <p>
          The Software may include third-party components subject to separate license terms, which we 
          will identify in the Software documentation.
        </p>

        <!-- Section 4: AI-Generated Content Terms -->
        <h2 id="ai-content">4. AI-Generated Content Terms</h2>

        <h3>AI Output License</h3>
        <p>You own the rights to content you create using our AI features, subject to:</p>
        <ul class="styled-list">
          <li>Input content ownership (you must have rights to input material)</li>
          <li>Third-party rights (AI output may not be unique)</li>
          <li>Our right to improve our services using anonymous usage data</li>
        </ul>

        <h3>AI Limitations</h3>
        <div class="info-box">
          <ul>
            <li>AI-generated content may contain errors or biases</li>
            <li>No warranty of accuracy, completeness, or fitness for purpose</li>
            <li>You are responsible for reviewing and verifying AI outputs</li>
            <li>Not suitable for legal, medical, or professional advice</li>
          </ul>
        </div>

        <h3>Prohibited AI Uses</h3>
        <ul class="styled-list">
          <li>Training competing AI models with our outputs</li>
          <li>Automated mass content generation for spam</li>
          <li>Creating misleading or deceptive content</li>
          <li>Bypassing safety filters or limitations</li>
        </ul>

        <!-- Section 5: User Content and Data -->
        <h2 id="user-content">5. User Content and Data</h2>

        <h3>Your Content</h3>
        <ul class="styled-list">
          <li>You retain ownership of content you upload or create</li>
          <li>You grant us a license to process your content as described in our 
            <router-link to="/privacy" class="legal-link">Privacy Policy</router-link></li>
          <li>You are responsible for ensuring you have rights to all uploaded content</li>
        </ul>

        <h3>Data Collection</h3>
        <p>
          Our data practices are governed by our 
          <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>, 
          incorporated herein by reference.
        </p>

        <!-- Section 6: Updates and Modifications -->
        <h2 id="updates">6. Updates and Modifications</h2>

        <h3>Automatic Updates</h3>
        <p>The Software may automatically download and install updates. These updates may:</p>
        <ul class="styled-list">
          <li>Add new features or remove existing ones</li>
          <li>Modify the user interface</li>
          <li>Change system requirements</li>
          <li>Include security patches</li>
        </ul>

        <h3>Mandatory Updates</h3>
        <p>Some updates may be mandatory for continued use of the Software.</p>

        <!-- Section 7: Subscription Terms -->
        <h2 id="subscription">7. Subscription Terms</h2>

        <h3>Payment</h3>
        <ul class="styled-list">
          <li>Subscriptions are processed through app stores (Apple App Store, Google Play)</li>
          <li>Prices are subject to change with notice</li>
          <li>All sales are final unless required by law</li>
        </ul>

        <h3>Auto-Renewal</h3>
        <p>Subscriptions automatically renew unless cancelled before the renewal date.</p>

        <h3>Cancellation</h3>
        <p>You may cancel subscriptions through your app store account settings.</p>

        <!-- Section 8: Warranty Disclaimer -->
        <h2 id="warranty">8. Warranty Disclaimer</h2>
        <div class="disclaimer-box">
          <p>
            THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, 
            EXPRESS OR IMPLIED, INCLUDING:
          </p>
          <ul>
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>ACCURACY OR RELIABILITY OF RESULTS</li>
            <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
          </ul>
        </div>

        <!-- Section 9: Limitation of Liability -->
        <h2 id="liability">9. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>

        <h3>Exclusion of Damages</h3>
        <div class="disclaimer-box">
          <p><strong>WE SHALL NOT BE LIABLE FOR ANY:</strong></p>
          <ul>
            <li>INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
            <li>LOST PROFITS, REVENUE, OR DATA</li>
            <li>BUSINESS INTERRUPTION</li>
            <li>COST OF SUBSTITUTE GOODS OR SERVICES</li>
          </ul>
        </div>

        <h3>Liability Cap</h3>
        <div class="info-box">
          <p>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SOFTWARE IN THE TWELVE 
            MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS LESS.
          </p>
        </div>

        <h3>Essential Purpose</h3>
        <p>THESE LIMITATIONS APPLY EVEN IF REMEDIES FAIL THEIR ESSENTIAL PURPOSE.</p>

        <!-- Section 10: Indemnification -->
        <h2 id="indemnification">10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Pomkatsu LLC from any claims, damages, losses, or 
          expenses arising from:
        </p>
        <ul class="styled-list">
          <li>Your use of the Software</li>
          <li>Your violation of this EULA</li>
          <li>Your violation of any third-party rights</li>
          <li>Your content or translations</li>
        </ul>

        <!-- Section 11: Termination -->
        <h2 id="termination">11. Termination</h2>

        <h3>By You</h3>
        <p>You may terminate this EULA by deleting the Software and all copies.</p>

        <h3>By Us</h3>
        <p>We may terminate this EULA immediately if you violate any terms.</p>

        <h3>Effect of Termination</h3>
        <p>Upon termination:</p>
        <ul class="styled-list">
          <li>All licenses granted to you terminate</li>
          <li>You must stop using and delete the Software</li>
          <li>Provisions that should survive will remain in effect</li>
        </ul>

        <!-- Section 12: Export Compliance -->
        <h2 id="export-compliance">12. Export Compliance</h2>
        <div class="warning-box">
          <p>
            You may not use or export the Software in violation of U.S. export laws and regulations. 
            You represent that you are not:
          </p>
          <ul>
            <li>Located in an embargoed country</li>
            <li>On any U.S. government restricted party list</li>
          </ul>
        </div>

        <!-- Section 13: U.S. Government Rights -->
        <h2 id="government-rights">13. U.S. Government Rights</h2>
        <p>
          If you are a U.S. Government end user, the Software is "Commercial Computer Software" 
          licensed under this EULA.
        </p>

        <!-- Section 14: Governing Law -->
        <h2 id="governing-law">14. Governing Law</h2>
        <p>
          This EULA is governed by the laws of Texas, United States, without regard to conflict of 
          law principles.
        </p>

        <!-- Section 15: Dispute Resolution -->
        <h2 id="dispute-resolution">15. Dispute Resolution</h2>

        <h3>Binding Arbitration</h3>
        <p>
          Disputes shall be resolved through binding arbitration in Texas under the American Arbitration 
          Association rules.
        </p>

        <h3>Class Action Waiver</h3>
        <div class="disclaimer-box">
          <p>You waive any right to participate in class actions or class arbitrations.</p>
        </div>

        <h3>Small Claims Exception</h3>
        <p>Either party may bring claims in small claims court if eligible.</p>

        <!-- Section 16: Severability -->
        <h2 id="severability">16. Severability</h2>
        <p>
          If any provision is found unenforceable, the remaining provisions remain in full effect.
        </p>

        <!-- Section 17: Entire Agreement -->
        <h2 id="entire-agreement">17. Entire Agreement</h2>
        <p>
          This EULA, along with our <router-link to="/terms" class="legal-link">Terms of Service</router-link> 
          and <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>, constitutes the 
          entire agreement between you and Pomkatsu LLC regarding the Software.
        </p>

        <!-- Section 18: App Store Additional Terms -->
        <h2 id="app-store-terms">18. App Store Additional Terms</h2>

        <h3>Apple App Store</h3>
        <p>If you download the Software from Apple App Store:</p>
        <ul class="styled-list">
          <li>Apple has no obligation to provide maintenance or support</li>
          <li>Apple is not responsible for any product warranties</li>
          <li>Apple is not responsible for addressing claims relating to the Software</li>
          <li>Apple is not responsible for third-party intellectual property claims</li>
          <li>Apple and its subsidiaries are third-party beneficiaries of this EULA</li>
        </ul>

        <h3>Google Play Store</h3>
        <p>If you download the Software from Google Play Store:</p>
        <ul class="styled-list">
          <li>You acknowledge Google is not responsible for the Software</li>
          <li>Your use must comply with Google Play Terms of Service</li>
        </ul>

        <!-- Section 19: Contact Information -->
        <h2 id="contact">19. Contact Information</h2>
        <div class="contact-section">
          <p>For questions about this EULA:</p>
          
          <div class="contact-card">
            <h4>Pomkatsu LLC</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Website: <a href="https://pomkatsu.com" class="legal-link">https://pomkatsu.com</a></p>
          </div>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p><em>By downloading or using our Software, you acknowledge that you have read, understood, and agree to be bound by this EULA.</em></p>
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

/* Boxes */
.info-box {
  background: var(--legal-bg-box); /* secondary-light */
  border-left: 4px solid var(--legal-border-accent); /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.warning-box {
  background: var(--legal-bg-box); /* secondary-light */
  border-left: 4px solid #be123c; /* pomkatsu-700 */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.critical-warning {
  background: var(--legal-warning-bg); /* pomkatsu-200 - light pink background */
  color: var(--legal-warning-text); /* primary-dark for readability */
  border: 2px solid #be123c; /* pomkatsu-700 */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.critical-warning h4 {
  color: var(--legal-warning-heading); /* pomkatsu-900 */
  margin-top: 0;
}

.critical-warning p {
  color: var(--legal-warning-text); /* primary-dark */
  margin-bottom: 0.75rem;
}

.warning-text {
  font-weight: 600;
  color: var(--legal-warning-heading); /* pomkatsu-900 */
  text-transform: uppercase;
  font-size: 0.875rem;
}

.disclaimer-box {
  background: var(--legal-bg-surface); /* secondary */
  border: 2px dashed var(--legal-border-accent); /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.disclaimer-box p,
.disclaimer-box li {
  color: var(--legal-text-secondary); /* primary-light */
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

  .warning-box,
  .critical-warning,
  .disclaimer-box {
    border: 1px solid #000;
    background: white;
  }

  .critical-warning h4,
  .critical-warning p,
  .warning-text {
    color: black;
  }
}
</style>