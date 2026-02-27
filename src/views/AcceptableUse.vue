<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
</script>

<template>
  <LegalLayout title="Acceptable Use Policy">
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
            <div><strong>Version:</strong> 1.0</div>
          </div>
        </div>

        <!-- Section 1: Introduction -->
        <h2 id="introduction">1. Introduction</h2>
        <p>
          This Acceptable Use Policy ("AUP") governs your use of all services, applications, and products 
          provided by Pomkatsu LLC ("we," "our," "us"). By using our Services, you agree to comply with 
          this policy. Violation of this AUP may result in suspension or termination of your account.
        </p>
        <p>
          This AUP is incorporated into and forms part of our 
          <router-link to="/terms" class="legal-link">Terms of Service</router-link>.
        </p>

        <!-- Section 2: Prohibited Content -->
        <h2 id="prohibited-content">2. Prohibited Content</h2>
        <p>You may NOT upload, translate, generate, share, or process content that:</p>

        <h3>Illegal Content</h3>
        <ul class="styled-list">
          <li>Violates any local, state, federal, or international law</li>
          <li>Facilitates illegal activities or promotes criminal conduct</li>
          <li>Contains or distributes controlled substances information</li>
          <li>Involves human trafficking or exploitation</li>
          <li>Constitutes fraud, deception, or misrepresentation</li>
        </ul>

        <h3>Harmful or Abusive Content</h3>
        <ul class="styled-list">
          <li>Contains malware, viruses, or malicious code</li>
          <li>Promotes violence, terrorism, or extremist ideologies</li>
          <li>Contains hate speech or discriminatory content</li>
          <li>Harasses, threatens, or intimidates others</li>
          <li>Exploits or harms minors in any way</li>
          <li>Promotes self-harm or suicide</li>
        </ul>

        <h3>Intellectual Property Violations</h3>
        <ul class="styled-list">
          <li>Infringes copyrights, trademarks, or patents</li>
          <li>Violates trade secrets or confidential information</li>
          <li>Circumvents digital rights management (DRM)</li>
          <li>Plagiarizes or misrepresents authorship</li>
        </ul>

        <h3>Sensitive Personal Information</h3>
        <div class="warning-box">
          <ul>
            <li>Social Security numbers or government IDs (without authorization)</li>
            <li>Credit card or financial account numbers</li>
            <li>Medical records (without proper authorization)</li>
            <li>Passwords or authentication credentials</li>
            <li>Private personal information of others without consent</li>
          </ul>
        </div>

        <h3>AI-Specific Prohibited Uses</h3>
        <ul class="styled-list">
          <li>Attempting to extract or reverse-engineer AI models</li>
          <li>Using outputs to train competing AI systems</li>
          <li>Generating content for automated spam or manipulation</li>
          <li>Creating deepfakes or synthetic media for deception</li>
          <li>Bypassing AI safety measures or content filters</li>
          <li>Mass-producing AI content for SEO manipulation</li>
        </ul>

        <!-- Section 3: Prohibited Activities -->
        <h2 id="prohibited-activities">3. Prohibited Activities</h2>
        <p>You may NOT:</p>

        <h3>System Abuse</h3>
        <ul class="styled-list">
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Probe, scan, or test system vulnerabilities</li>
          <li>Interfere with service to any user, host, or network</li>
          <li>Send unsolicited bulk messages (spam)</li>
          <li>Exceed designated rate limits or quotas</li>
          <li>Use automated systems without explicit permission</li>
        </ul>

        <h3>Service Manipulation</h3>
        <ul class="styled-list">
          <li>Create multiple accounts to evade restrictions</li>
          <li>Share accounts or authentication credentials</li>
          <li>Manipulate or artificially inflate usage metrics</li>
          <li>Resell or redistribute services without authorization</li>
          <li>Use the service for competitive analysis or benchmarking</li>
          <li>Scrape or harvest data from our services</li>
        </ul>

        <h3>Translation and AI-Specific Restrictions</h3>
        <div class="info-box">
          <ul>
            <li>Submit documents larger than 50MB per file</li>
            <li>Process more than 100 documents per hour</li>
            <li>Use translations for official/certified purposes without verification</li>
            <li>Generate AI content for illegal or deceptive purposes</li>
            <li>Attempt to "jailbreak" or manipulate AI systems</li>
            <li>Use AI outputs without human review for critical decisions</li>
          </ul>
        </div>

        <h3>Commercial Restrictions</h3>
        <ul class="styled-list">
          <li>Use free/personal accounts for commercial purposes</li>
          <li>Operate a translation or AI service bureau without commercial license</li>
          <li>Bulk processing for third parties without authorization</li>
          <li>Integrate our services into commercial products without agreement</li>
        </ul>

        <!-- Section 4: Content Moderation and Filtering -->
        <h2 id="content-moderation">4. Content Moderation and Filtering</h2>
        <p>We employ automated and manual systems to detect violations:</p>
        <ul class="styled-list">
          <li>AI-based content filtering for prohibited content</li>
          <li>Rate limiting and abuse detection algorithms</li>
          <li>Manual review of flagged content</li>
          <li>User reporting mechanisms</li>
        </ul>

        <!-- Section 5: Enforcement and Consequences -->
        <h2 id="enforcement">5. Enforcement and Consequences</h2>

        <h3>First Violation</h3>
        <div class="info-box">
          <ul>
            <li>Warning issued via email</li>
            <li>Temporary restriction of specific features</li>
            <li>Removal of violating content</li>
          </ul>
        </div>

        <h3>Repeat Violations</h3>
        <div class="warning-box">
          <ul>
            <li>Account suspension (duration varies by severity)</li>
            <li>Permanent account termination</li>
            <li>IP address blocking</li>
            <li>Legal action if warranted</li>
          </ul>
        </div>

        <h3>Immediate Termination Offenses</h3>
        <div class="critical-warning">
          <h4>⚠️ IMMEDIATE TERMINATION</h4>
          <ul>
            <li>Child exploitation material</li>
            <li>Terrorist content</li>
            <li>Malware distribution</li>
            <li>Severe copyright infringement</li>
            <li>Criminal activity</li>
          </ul>
        </div>

        <!-- Section 6: Fair Use Guidelines -->
        <h2 id="fair-use">6. Fair Use Guidelines</h2>

        <h3>Reasonable Use Includes:</h3>
        <ul class="styled-list">
          <li>Personal document translation</li>
          <li>Educational and research purposes</li>
          <li>Accessibility assistance</li>
          <li>Business use with appropriate subscription</li>
          <li>Testing and evaluation within limits</li>
        </ul>

        <h3>Resource Limits (Subject to Plan):</h3>
        <div class="table-wrapper">
          <table class="limit-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Documents/Day</th>
                <th>Max File Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Free Tier</strong></td>
                <td>10 documents</td>
                <td>5MB</td>
              </tr>
              <tr>
                <td><strong>Personal</strong></td>
                <td>100 documents</td>
                <td>25MB</td>
              </tr>
              <tr>
                <td><strong>Professional</strong></td>
                <td>500 documents</td>
                <td>50MB</td>
              </tr>
              <tr>
                <td><strong>Enterprise</strong></td>
                <td>Custom limits</td>
                <td>Custom</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section 7: AI Content Guidelines -->
        <h2 id="ai-guidelines">7. AI Content Guidelines</h2>
        <p>When using AI-generated features:</p>

        <h3>Required Disclosures</h3>
        <ul class="styled-list">
          <li>Identify AI-generated content when sharing publicly</li>
          <li>Do not represent AI content as human-created</li>
          <li>Include appropriate disclaimers for AI translations</li>
        </ul>

        <h3>Quality Standards</h3>
        <div class="info-box">
          <ul>
            <li>Review AI outputs before relying on them</li>
            <li>Verify translations for important documents</li>
            <li>Do not use AI outputs for legal/medical advice</li>
            <li>Understand AI limitations and potential biases</li>
          </ul>
        </div>

        <!-- Section 8: Reporting Violations -->
        <h2 id="reporting">8. Reporting Violations</h2>
        <p>To report AUP violations:</p>
        <div class="contact-card">
          <p>Email: <a href="mailto:support@pomkatsu.com?subject=AUP%20Violation%20Report" class="legal-link">support@pomkatsu.com</a></p>
          <p>Subject: "AUP Violation Report"</p>
          <p>Include evidence and specific details</p>
          <p>We investigate reports within 48 hours</p>
        </div>

        <!-- Section 9: Export Control Compliance -->
        <h2 id="export-control">9. Export Control Compliance</h2>
        <div class="warning-box">
          <p><strong>You may NOT use our services if you are:</strong></p>
          <ul>
            <li>Located in a U.S. embargoed country</li>
            <li>On any U.S. government restricted party list</li>
            <li>Engaged in activities restricted by U.S. export laws</li>
          </ul>
        </div>

        <p>
          Currently restricted countries include: Cuba, Iran, North Korea, Syria, Russia, and the Crimea, 
          Donetsk, and Luhansk regions.
        </p>

        <!-- Section 10: Changes to This Policy -->
        <h2 id="changes">10. Changes to This Policy</h2>
        <p>
          We may update this AUP at any time. Continued use after changes constitutes acceptance of the 
          modified policy.
        </p>

        <!-- Section 11: Appeals Process -->
        <h2 id="appeals">11. Appeals Process</h2>
        <p>If your account is suspended or terminated:</p>
        <div class="process-box">
          <ol class="numbered-list">
            <li>Submit an appeal to support@pomkatsu.com within 30 days</li>
            <li>Include your account information and explanation</li>
            <li>We will review and respond within 5 business days</li>
            <li>Our decision on appeals is final</li>
          </ol>
        </div>

        <!-- Section 12: Contact Information -->
        <h2 id="contact">12. Contact Information</h2>
        <div class="contact-section">
          <p>For questions about this Acceptable Use Policy:</p>
          
          <div class="contact-card">
            <h4>Pomkatsu LLC</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Website: <a href="https://pomkatsu.com" class="legal-link">https://pomkatsu.com</a></p>
          </div>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p><em>This Acceptable Use Policy is part of our Terms of Service. Violation of this policy may result in immediate termination of service.</em></p>
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

/* Numbered Lists */
.numbered-list {
  counter-reset: list-counter;
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.numbered-list > li {
  counter-increment: list-counter;
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 0.75rem;
  color: var(--legal-text-secondary); /* primary-light */
}

.numbered-list > li::before {
  content: counter(list-counter) ".";
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

.limit-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--legal-bg-box); /* secondary-light */
  border: 1px solid var(--legal-border); /* secondary-dark */
  border-radius: 8px;
  overflow: hidden;
}

.limit-table thead {
  background: var(--legal-bg-surface); /* secondary */
  border-bottom: 2px solid var(--legal-border); /* secondary-dark */
}

.limit-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--legal-text); /* primary */
}

.limit-table td {
  padding: 0.75rem 1rem;
  color: var(--legal-text-secondary); /* primary-light */
  border-bottom: 1px solid var(--legal-border); /* secondary-dark */
}

.limit-table tbody tr:last-child td {
  border-bottom: none;
}

.limit-table tbody tr:hover {
  background: var(--legal-bg-surface); /* secondary */
}

/* Boxes */
.info-box,
.process-box {
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

.critical-warning li {
  color: var(--legal-warning-text); /* primary-dark */
}

.critical-warning li::before {
  color: #be123c; /* pomkatsu-700 */
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

  .limit-table {
    font-size: 0.875rem;
  }

  .limit-table th,
  .limit-table td {
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

  .warning-box,
  .critical-warning {
    border: 1px solid #000;
    background: white;
  }

  .critical-warning h4,
  .critical-warning li {
    color: black;
  }

  .limit-table {
    border: 1px solid #000;
    background: white;
  }

  .limit-table thead {
    background: #f0f0f0;
  }
}
</style>