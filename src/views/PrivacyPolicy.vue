<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
</script>

<template>
  <LegalLayout title="Privacy Policy">
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
        <h2 id="introduction">Introduction</h2>
        <p>
          Pomkatsu LLC, a Texas limited liability company ("we," "our," "us," "Company," or "Pomkatsu"), is committed to 
          protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
          information when you use our mobile applications and services (collectively, "Services"). This policy applies 
          to all mobile applications published by Pomkatsu LLC.
        </p>

        <div class="definition-box">
          <h4>Definitions:</h4>
          <ul>
            <li><strong>Personal Data/Information</strong>: Any information that can directly or indirectly identify you</li>
            <li><strong>Sensitive Personal Information</strong>: Special categories of data including racial/ethnic origin, political opinions, religious beliefs, health data, biometric data, or sexual orientation</li>
            <li><strong>Processing</strong>: Any operation performed on personal data</li>
            <li><strong>Data Controller</strong>: Pomkatsu LLC, who determines the purposes and means of processing</li>
            <li><strong>User/You</strong>: The individual using our Services</li>
          </ul>
        </div>

        <p>
          Please read this Privacy Policy carefully. By using our Services, you agree to the collection and use of 
          information in accordance with this policy. This Privacy Policy should be read in conjunction with our 
          <router-link to="/terms" class="legal-link">Terms of Service</router-link> and 
          <router-link to="/cookies" class="legal-link">Cookie Policy</router-link> (if applicable).
        </p>

        <!-- Section 2: Information We Collect -->
        <h2 id="information-we-collect">Information We Collect</h2>

        <h3>Categories of Personal Information We Collect</h3>

        <h4>Personal Information You Provide:</h4>
        <ul class="styled-list">
          <li><strong>Account Information</strong>: Name, email address, username, password</li>
          <li><strong>Profile Information</strong>: Avatar, preferences, language settings</li>
          <li><strong>Contact Information</strong>: When you contact support@pomkatsu.com</li>
          <li><strong>User Content</strong>: Documents you upload for translation, translations created</li>
          <li><strong>Payment Information</strong>: Processed by third-party payment processors (we do not store credit card details)</li>
          <li><strong>Communications</strong>: Messages, feedback, and correspondence with us</li>
        </ul>

        <h4>Information Collected Automatically:</h4>
        <ul class="styled-list">
          <li><strong>Device Information</strong>: Device type, operating system, unique device identifiers, mobile network information, device model, screen resolution</li>
          <li><strong>Usage Data</strong>: Features used, actions taken, time and date of activities, app performance data, translation history</li>
          <li><strong>Log Data</strong>: IP address, browser type, pages visited, time spent, crash reports, error logs</li>
          <li><strong>Location Information</strong>: Approximate location (country/region) based on IP address; precise location only with your explicit permission</li>
          <li><strong>Analytics Data</strong>: App usage patterns, feature engagement, performance metrics</li>
        </ul>

        <h4>Information from Third Parties:</h4>
        <ul class="styled-list">
          <li><strong>Authentication Providers</strong>: If you sign in using Google, Apple, or other providers</li>
          <li><strong>Payment Processors</strong>: Transaction confirmations (not full payment details)</li>
          <li><strong>Analytics Services</strong>: Aggregated usage insights</li>
        </ul>

        <h3>Sensitive Personal Information</h3>
        <p>
          We do not intentionally collect sensitive personal information. However, documents you upload for translation 
          may contain sensitive information. You are responsible for any sensitive data within your uploaded content. 
          We recommend not uploading documents containing:
        </p>
        <div class="warning-box">
          <ul>
            <li>Health/medical information</li>
            <li>Financial account numbers</li>
            <li>Government identification numbers</li>
            <li>Passwords or security credentials</li>
          </ul>
        </div>

        <h3>Legal Basis for Processing (GDPR)</h3>
        <p>We process your personal data based on:</p>
        <ul class="styled-list">
          <li><strong>Consent</strong>: For marketing communications and optional features</li>
          <li><strong>Contract</strong>: To provide our Services as agreed in our Terms</li>
          <li><strong>Legitimate Interests</strong>: For security, fraud prevention, and service improvements</li>
          <li><strong>Legal Obligation</strong>: When required by law</li>
        </ul>

        <!-- Section 3: How We Collect Information -->
        <h2 id="how-we-collect">How We Collect Information</h2>
        <p>We collect information through the following methods:</p>
        <ul class="styled-list">
          <li><strong>Directly from you</strong>: When you create an account, upload documents, make purchases, or contact us</li>
          <li><strong>Automatically</strong>: Through your use of our Services via SDKs, APIs, and tracking technologies</li>
          <li><strong>From third parties</strong>: Authentication providers, payment processors, and analytics services</li>
          <li><strong>Through our apps</strong>: When you interact with features, submit forms, or use translation services</li>
          <li><strong>Via support channels</strong>: When you email support@pomkatsu.com or submit feedback</li>
        </ul>

        <!-- Section 4: Why We Collect and Use Your Information -->
        <h2 id="why-we-collect">Why We Collect and Use Your Information</h2>

        <h3>Service Delivery (Contractual Basis)</h3>
        <ul class="styled-list">
          <li>Provide, maintain, and improve our translation services</li>
          <li>Process documents for translation</li>
          <li>Manage your account and authenticate users</li>
          <li>Process transactions and send confirmations</li>
          <li>Save your preferences and translation history</li>
        </ul>

        <h3>Communications (Consent/Legitimate Interest)</h3>
        <ul class="styled-list">
          <li>Send technical notices, updates, and security alerts</li>
          <li>Respond to support inquiries and provide customer service</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Notify you about changes to our Services</li>
        </ul>

        <h3>Service Improvement (Legitimate Interest)</h3>
        <ul class="styled-list">
          <li>Monitor and analyze usage trends and preferences</li>
          <li>Improve translation accuracy and app performance</li>
          <li>Develop new features and services</li>
          <li>Conduct research and analysis</li>
        </ul>

        <h3>Legal and Security (Legal Obligation/Legitimate Interest)</h3>
        <ul class="styled-list">
          <li>Detect, investigate, and prevent fraud and abuse</li>
          <li>Comply with legal obligations and respond to legal requests</li>
          <li>Protect rights, privacy, safety, or property</li>
          <li>Enforce our Terms of Service</li>
        </ul>

        <!-- Section 5: Document and File Handling -->
        <h2 id="document-handling">Document and File Handling</h2>

        <h3>Document Storage and Processing</h3>
        <div class="info-box">
          <ul>
            <li><strong>Temporary Processing</strong>: Documents uploaded for translation are processed through our Services and stored temporarily on Firebase cloud storage</li>
            <li><strong>Storage Duration</strong>: Documents are automatically deleted from our servers after 30 days unless you choose to save them to your account</li>
            <li><strong>Private by Default</strong>: All uploaded documents and translations are private by default and accessible only to you through your authenticated account</li>
            <li><strong>Encryption</strong>: Documents are encrypted in transit using TLS/SSL and at rest using Firebase's encryption standards</li>
            <li><strong>Processing</strong>: Documents may be processed through third-party translation services. These services process your documents solely for translation purposes and do not retain copies</li>
          </ul>
        </div>

        <h3>Public Sharing Features</h3>
        <div class="highlight-box">
          <h4>User-Controlled Sharing</h4>
          <p>You may choose to create public shareable links for your documents</p>
          
          <h4>Your Responsibility</h4>
          <p>When you create a public link, you are solely responsible for:</p>
          <ul>
            <li>Who you share the link with</li>
            <li>Any consequences of making documents publicly accessible</li>
            <li>Revoking access when no longer needed</li>
          </ul>

          <h4>Revocation</h4>
          <p>You can revoke public links at any time through the app, immediately preventing further access</p>

          <h4>No Liability for Shared Content</h4>
          <p>We are not responsible for any disclosure, modification, or deletion of documents that you make publicly available</p>
        </div>

        <!-- Section 6: Sharing Your Information -->
        <h2 id="sharing-information">Sharing Your Information</h2>

        <h3>Third-Party Service Providers</h3>
        <p>We share data with service providers who assist us in operating our Services:</p>
        <ul class="styled-list">
          <li><strong>Cloud Storage</strong>: Firebase/Google Cloud Platform for document storage</li>
          <li><strong>Translation Services</strong>: Third-party translation APIs for document processing</li>
          <li><strong>Payment Processors</strong>: Stripe, PayPal, Apple Pay, Google Pay for payment processing</li>
          <li><strong>Analytics</strong>: Google Analytics, Firebase Analytics for usage insights</li>
          <li><strong>Communication</strong>: Email service providers for transactional emails</li>
          <li><strong>Customer Support</strong>: Support ticketing systems</li>
        </ul>

        <h3>Business Transfers</h3>
        <p>
          In connection with any merger, sale of company assets, acquisition, or bankruptcy proceedings, your 
          information may be transferred to the acquiring entity.
        </p>

        <h3>Legal Requirements</h3>
        <p>We may disclose your information if required by law or in response to:</p>
        <ul class="styled-list">
          <li>Court orders, subpoenas, or legal process</li>
          <li>Government or regulatory requests</li>
          <li>Law enforcement requests with proper legal authority</li>
        </ul>

        <h3>Protection of Rights</h3>
        <p>
          To protect and defend our rights or property, investigate fraud, or protect against harm to the rights, 
          property, or safety of Pomkatsu LLC, our users, or the public.
        </p>

        <h3>With Your Consent</h3>
        <p>We may share your information for any other purpose with your explicit consent.</p>

        <h3>What We Don't Do</h3>
        <div class="highlight-box">
          <ul>
            <li>We do NOT sell your personal information to third parties</li>
            <li>We do NOT share your documents with other users without your permission</li>
            <li>We do NOT use your documents for training AI models or other purposes beyond providing translation services</li>
          </ul>
        </div>

        <!-- Section 7: Data Retention -->
        <h2 id="data-retention">Data Retention</h2>
        <p>
          We retain your information for as long as necessary to provide our Services and fulfill the purposes 
          outlined in this Privacy Policy:
        </p>
        <ul class="styled-list">
          <li><strong>Account Information</strong>: Retained while your account is active and for 90 days after deletion request</li>
          <li><strong>Documents</strong>: Automatically deleted after 30 days unless saved to your account</li>
          <li><strong>Saved Documents</strong>: Retained until you delete them or close your account</li>
          <li><strong>Transaction Records</strong>: Retained for 7 years for tax and legal compliance</li>
          <li><strong>Support Communications</strong>: Retained for 2 years for quality and training purposes</li>
          <li><strong>Analytics Data</strong>: Aggregated data retained for up to 2 years</li>
          <li><strong>Legal Holds</strong>: Data may be retained longer if subject to legal preservation obligations</li>
        </ul>
        <p>
          You can request deletion of your data at any time by contacting 
          <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>.
        </p>

        <!-- Section 8: Data Security -->
        <h2 id="data-security">Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your information, including:
        </p>
        <ul class="styled-list">
          <li><strong>Encryption</strong>: All data is encrypted in transit (TLS/SSL) and at rest</li>
          <li><strong>Access Controls</strong>: Strict authentication and authorization mechanisms</li>
          <li><strong>Firebase Security Rules</strong>: Documents are protected by Firebase security rules that ensure private access by default</li>
          <li><strong>Regular Security Reviews</strong>: We regularly review and update our security practices</li>
          <li><strong>Incident Response</strong>: We maintain incident response procedures to address potential security breaches</li>
        </ul>

        <div class="disclaimer-box">
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
            to protect your personal information and documents, we cannot guarantee absolute security.
          </p>
        </div>

        <h3>Your Security Responsibilities</h3>
        <p>You are responsible for:</p>
        <ul class="styled-list">
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>Using strong, unique passwords</li>
          <li>Being cautious about who you share public links with</li>
          <li>Revoking public links when no longer needed</li>
          <li>Not uploading documents containing passwords, financial information, or highly sensitive personal data unless necessary</li>
        </ul>

        <h3>Data Breach Notification</h3>
        <p>
          In the event of a data breach that may affect your personal information or documents, we will notify 
          affected users as required by applicable law.
        </p>

        <!-- Section 9: Your Rights and Choices -->
        <h2 id="your-rights">Your Rights and Choices</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal information:
        </p>

        <h3>Universal Rights</h3>
        <ul class="styled-list">
          <li><strong>Access</strong>: Request a copy of your personal information</li>
          <li><strong>Correction</strong>: Request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion</strong>: Request deletion of your personal information</li>
          <li><strong>Data Portability</strong>: Receive your data in a structured, machine-readable format</li>
          <li><strong>Opt-Out</strong>: Unsubscribe from promotional communications</li>
          <li><strong>Account Settings</strong>: Manage your preferences and privacy settings</li>
        </ul>

        <h3>Region-Specific Rights</h3>

        <div class="info-box">
          <h4>European Union/EEA/UK Residents (GDPR/UK GDPR):</h4>
          <ul>
            <li>Right to object to processing based on legitimate interests</li>
            <li>Right to restrict processing</li>
            <li>Right to withdraw consent at any time</li>
            <li>Right to lodge a complaint with your supervisory authority</li>
            <li>Right not to be subject to automated decision-making</li>
          </ul>
        </div>

        <div class="info-box">
          <h4>California Residents (CCPA/CPRA):</h4>
          <ul>
            <li>Right to know what personal information we collect, use, disclose, or sell</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of sale of personal information (we do not sell data)</li>
            <li>Right to non-discrimination for exercising privacy rights</li>
            <li>Right to correct inaccurate personal information</li>
            <li>Right to limit use of sensitive personal information</li>
          </ul>
        </div>

        <div class="info-box">
          <h4>Virginia Residents (VCDPA):</h4>
          <ul>
            <li>Right to confirm processing and access personal data</li>
            <li>Right to correct inaccuracies</li>
            <li>Right to delete personal data</li>
            <li>Right to data portability</li>
            <li>Right to opt-out of targeted advertising, sale, or profiling</li>
          </ul>
        </div>

        <div class="info-box">
          <h4>Other U.S. States (Colorado, Connecticut, etc.):</h4>
          <p>Similar rights as Virginia, including access, deletion, correction, portability, and opt-out rights.</p>
        </div>

        <h3>How to Exercise Your Rights</h3>
        <p>To exercise any of these rights:</p>
        <ul class="styled-list">
          <li>Email us at <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a> with your request</li>
          <li>Include "Privacy Rights Request" in the subject line</li>
          <li>Provide sufficient information to verify your identity</li>
          <li>Specify which rights you wish to exercise</li>
        </ul>
        <p>
          We will respond to your request within 30 days (or 45 days for complex requests). We do not charge fees 
          for exercising your rights unless requests are excessive or manifestly unfounded.
        </p>

        <h3>Do Not Track/Global Privacy Control</h3>
        <p>
          We honor Global Privacy Control (GPC) signals where legally required. We currently do not respond to 
          Do Not Track (DNT) browser signals.
        </p>

        <!-- Section 10: Children's Privacy -->
        <h2 id="childrens-privacy">Children's Privacy</h2>
        <p>
          Our Services are not intended for children under 13 years of age (or the applicable age of consent in 
          your jurisdiction). We do not knowingly collect personal information from children under 13. If you 
          believe we have collected information from a child under 13, please contact us immediately.
        </p>

        <!-- Section 11: International Data Transfers -->
        <h2 id="international-transfers">International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own, including the 
          United States where our servers are located.
        </p>

        <h3>Safeguards for International Transfers</h3>
        <p>When we transfer data internationally, we ensure appropriate safeguards are in place:</p>
        <ul class="styled-list">
          <li><strong>For EU/EEA/UK Data</strong>: We rely on Standard Contractual Clauses approved by the European Commission</li>
          <li><strong>For Other Regions</strong>: We implement appropriate technical and organizational measures</li>
          <li><strong>Service Providers</strong>: We require third parties to maintain adequate data protection standards</li>
        </ul>
        <p>
          By using our Services, you consent to the transfer of your information to the United States and other 
          countries where we or our service providers operate. These countries may have different data protection 
          laws than your country of residence.
        </p>

        <!-- Section 12: Data Processing Impact Assessment -->
        <h2 id="dpia">Data Processing Impact Assessment (DPIA)</h2>
        <p>We conduct Data Protection Impact Assessments when:</p>
        <ul class="styled-list">
          <li>Implementing new technologies that process personal data</li>
          <li>Processing sensitive personal information at scale</li>
          <li>Using automated decision-making that could significantly affect users</li>
          <li>Making significant changes to our data processing activities</li>
        </ul>
        <p>
          If you have concerns about our data processing activities, please contact us at 
          <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>.
        </p>

        <!-- Section 13: Automated Decision-Making -->
        <h2 id="automated-decision">Automated Decision-Making</h2>
        <p>
          We do not use automated decision-making or profiling that produces legal or similarly significant effects 
          on you. Translation services use automated processing, but all decisions about your account or access to 
          services involve human review.
        </p>

        <!-- Section 14: California Privacy Rights -->
        <h2 id="california-rights">California Privacy Rights</h2>
        <p>
          California residents have additional rights under the California Consumer Privacy Act (CCPA), including 
          the right to know, delete, opt-out, and non-discrimination. To exercise these rights, contact us at 
          <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>.
        </p>

        <!-- Section 15: Changes to This Privacy Policy -->
        <h2 id="changes">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, 
          legal requirements, or other factors. When we do:
        </p>
        <ul class="styled-list">
          <li>We will update the "Last Updated" date and version number at the top</li>
          <li>For material changes, we will notify you via:
            <ul>
              <li>Email to your registered email address</li>
              <li>In-app notification</li>
              <li>Prominent notice on our website</li>
            </ul>
          </li>
          <li>We will obtain your consent if required by applicable law</li>
          <li>The updated policy will be effective immediately upon posting unless otherwise specified</li>
        </ul>
        <p>
          We review this Privacy Policy at least annually to ensure compliance with applicable laws. Your continued 
          use of our Services after changes constitutes acceptance of the updated policy.
        </p>

        <!-- Section 16: Financial Incentives -->
        <h2 id="financial-incentives">Financial Incentives</h2>
        <p>
          We do not currently offer financial incentives, rewards, or price differences in exchange for your personal 
          information. If we introduce such programs in the future, we will update this policy and ensure any 
          incentive is reasonably related to the value of the data provided.
        </p>

        <!-- Section 17: Accessibility -->
        <h2 id="accessibility">Accessibility</h2>
        <p>
          We are committed to ensuring this Privacy Policy is accessible to individuals with disabilities. If you 
          need this policy in an alternative format, please contact us at 
          <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>.
        </p>

        <!-- Section 18: Contact Us -->
        <h2 id="contact">Contact Us</h2>
        <div class="contact-section">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
            please contact us:
          </p>
          
          <div class="contact-card">
            <h4>Pomkatsu LLC</h4>
            <p>A Texas Limited Liability Company</p>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Website: <a href="https://pomkatsu.com" class="legal-link">https://pomkatsu.com</a></p>
          </div>

          <div class="contact-card">
            <h4>For Privacy Rights Requests:</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Subject Line: "Privacy Rights Request"</p>
          </div>

          <div class="contact-card">
            <h4>For COPPA (Children's Privacy) Inquiries:</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Subject Line: "COPPA Request"</p>
          </div>

          <div class="contact-card">
            <h4>Data Protection Officer:</h4>
            <p>
              We have not appointed a formal Data Protection Officer as we do not meet the threshold requirements. 
              However, privacy inquiries should be directed to the email above.
            </p>
          </div>

          <div class="contact-card">
            <h4>Response Time:</h4>
            <p>
              We aim to respond to all privacy inquiries within 30 days. For complex requests, we may extend this 
              to 45 days with notice.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p><em>This Privacy Policy applies to all mobile applications and services provided by Pomkatsu LLC.</em></p>
          <p><em>Copyright © 2025 Pomkatsu LLC. All rights reserved.</em></p>
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

/* Nested lists */
.styled-list ul,
.legal-content ul:not(.toc-nav) ul {
  margin-top: 0.5rem;
  margin-left: 1rem;
}

/* Boxes */
.definition-box,
.info-box,
.highlight-box,
.process-box {
  background: #FFF8ED; /* secondary-light */
  border-left: 4px solid #5A3E26; /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.warning-box {
  background: #FFF8ED; /* secondary-light */
  border-left: 4px solid #be123c; /* pomkatsu-700 */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.disclaimer-box {
  background: #FCF1DC; /* secondary */
  border: 2px dashed #5A3E26; /* primary-light */
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.disclaimer-box p,
.disclaimer-box li {
  color: #5A3E26; /* primary-light */
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
  .disclaimer-box {
    border: 1px solid #000;
    background: white;
    color: black;
  }
}
</style>