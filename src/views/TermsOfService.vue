<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import TableOfContents from '../components/TableOfContents.vue'
</script>

<template>
  <LegalLayout title="Terms of Service">
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

        <!-- Section 1: Acceptance of Terms -->
        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>
          These Terms of Service ("Terms," "Agreement") govern your use of all mobile applications and services 
          (collectively, "Services") provided by Pomkatsu LLC, a Texas limited liability company ("we," "our," 
          "us," "Company," or "Pomkatsu"). By accessing, downloading, or using our Services, you agree to be 
          bound by these Terms. If you do not agree to these Terms, do not use our Services.
        </p>

        <div class="definition-box">
          <h4>Definitions:</h4>
          <ul>
            <li><strong>"App" or "Application"</strong>: Any mobile application published by Pomkatsu LLC</li>
            <li><strong>"User," "you," "your"</strong>: Any individual who accesses or uses our Services</li>
            <li><strong>"Content"</strong>: Any text, images, documents, or other materials</li>
            <li><strong>"User Content"</strong>: Content you create, upload, or share through our Services</li>
            <li><strong>"Account"</strong>: Your registered user account with our Services</li>
            <li><strong>"Subscription"</strong>: Paid access to premium features of our Services</li>
          </ul>
        </div>

        <p>
          These Terms work in conjunction with our <router-link to="/privacy" class="legal-link">Privacy Policy</router-link> 
          and any other policies or guidelines posted within our Services.
        </p>

        <!-- Section 2: Eligibility -->
        <h2 id="eligibility">2. Eligibility</h2>
        <p>
          You must be at least 13 years old (or the minimum age required in your jurisdiction) to use our Services. 
          By using our Services, you represent and warrant that you meet these eligibility requirements.
        </p>

        <!-- Section 3: License to Use -->
        <h2 id="license">3. License to Use</h2>
        
        <h3>Grant of License</h3>
        <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
        <ul class="styled-list">
          <li>Download and install our Apps on devices you own or control</li>
          <li>Access and use the Services for personal, non-commercial purposes</li>
          <li>Create and manage documents for translation</li>
        </ul>

        <h3>License Restrictions</h3>
        <div class="warning-box">
          <p><strong>You may NOT:</strong></p>
          <ul>
            <li>Copy, modify, or create derivative works of our Apps</li>
            <li>Reverse engineer, decompile, or disassemble our software</li>
            <li>Remove any proprietary notices or labels</li>
            <li>Resell, sublicense, or commercially exploit our Services</li>
            <li>Use our Services to develop competing products</li>
            <li>Share your account credentials with others</li>
            <li>Use automated systems to access our Services without permission</li>
          </ul>
        </div>

        <h3>Account Registration</h3>
        
        <h4>Account Creation</h4>
        <ul class="styled-list">
          <li>You may need to create an account to access certain features</li>
          <li>You must provide accurate, current, and complete information</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>You are responsible for all activities that occur under your account</li>
        </ul>

        <h4>Account Security</h4>
        <ul class="styled-list">
          <li>Notify us immediately at <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a> if you suspect unauthorized access</li>
          <li>We are not liable for any loss or damage from your failure to protect your account</li>
        </ul>

        <!-- Section 4: Acceptable Use -->
        <h2 id="acceptable-use">4. Acceptable Use</h2>
        <div class="warning-box">
          <p><strong>You agree NOT to:</strong></p>
          <ul>
            <li>Violate any laws, regulations, or third-party rights</li>
            <li>Use the Services for any illegal or unauthorized purpose</li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or harvest other users' information</li>
            <li>Use automated systems or software to extract data from our Services</li>
            <li>Interfere with or disrupt the Services or servers</li>
            <li>Circumvent any content filtering or security measures</li>
            <li>Use the Services for commercial purposes without our permission</li>
          </ul>
        </div>

        <!-- Section 5: User Content and Document Handling -->
        <h2 id="user-content">5. User Content and Document Handling</h2>

        <h3>Your Content</h3>
        <ul class="styled-list">
          <li>You retain ownership of content you create and share through our Services ("User Content"), including all documents you upload for translation</li>
          <li>You are solely responsible for your User Content and the consequences of uploading, sharing, or publishing it</li>
          <li>You represent that you have all necessary rights to your User Content and that it does not violate any laws or third-party rights</li>
        </ul>

        <h3>AI-Generated Content</h3>
        <div class="info-box">
          <ul>
            <li><strong>Ownership</strong>: You own the rights to AI-generated content you create using our Services, subject to the terms below</li>
            <li><strong>Non-Exclusivity</strong>: AI outputs may not be unique; similar outputs may be generated for other users</li>
            <li><strong>No Copyright Claim</strong>: You cannot claim copyright on unmodified AI outputs without substantial human authorship</li>
            <li><strong>Attribution</strong>: When sharing AI-generated content publicly, you should disclose its AI origin</li>
            <li><strong>Our Rights</strong>: We may use anonymized interaction data to improve our AI services</li>
          </ul>
        </div>

        <h3>AI Content Restrictions</h3>
        <div class="warning-box">
          <p><strong>You may NOT use AI-generated content to:</strong></p>
          <ul>
            <li>Train or develop competing AI models or services</li>
            <li>Generate spam, phishing, or deceptive content</li>
            <li>Create deepfakes or misleading synthetic media</li>
            <li>Circumvent safety measures or content filters</li>
            <li>Violate any third-party intellectual property rights</li>
            <li>Generate content at scale for SEO manipulation</li>
            <li>Create content that violates our Acceptable Use Policy</li>
          </ul>
        </div>

        <h3>Document Security and Privacy</h3>
        <div class="highlight-box">
          <h4>Private by Default</h4>
          <p>All documents are private by default and only accessible to you</p>
          
          <h4>Public Sharing</h4>
          <p>If you create public shareable links:</p>
          <ul>
            <li>You do so at your own risk</li>
            <li>You are solely responsible for any consequences</li>
            <li>Anyone with the link can access the document</li>
            <li>You should revoke links when access is no longer needed</li>
          </ul>

          <h4>No Monitoring</h4>
          <p>We do not monitor or review the content of your private documents</p>

          <h4>Your Responsibility</h4>
          <p>You are responsible for:</p>
          <ul>
            <li>The content of all documents you upload</li>
            <li>Ensuring you have the right to upload and translate documents</li>
            <li>Not uploading illegal, harmful, or infringing content</li>
            <li>Maintaining backups of important documents</li>
            <li>The security of any public links you create</li>
          </ul>
        </div>

        <h3>Sensitive Information Warning</h3>
        <div class="critical-warning">
          <h4>⚠️ YOU SHOULD NOT UPLOAD DOCUMENTS CONTAINING:</h4>
          <ul>
            <li>Social Security numbers or government ID numbers (unless necessary)</li>
            <li>Credit card or banking information</li>
            <li>Medical records (unless you accept the risk)</li>
            <li>Passwords or authentication credentials</li>
            <li>Trade secrets or confidential business information (unless you own it)</li>
          </ul>
          <p class="warning-text">
            IF YOU CHOOSE TO UPLOAD SUCH INFORMATION, YOU DO SO AT YOUR OWN RISK AND WE DISCLAIM ALL LIABILITY 
            FOR ANY RESULTING DAMAGES.
          </p>
        </div>

        <h3>License to Us</h3>
        <p>
          By uploading documents for translation or using AI features, you grant us a limited, non-exclusive, 
          royalty-free license to process, store, and analyze your content solely for the purpose of providing 
          and improving our Services. This license terminates when you delete your content or account.
        </p>

        <h3>Content Standards</h3>
        <p>User Content must not:</p>
        <ul class="styled-list">
          <li>Be false, misleading, or deceptive</li>
          <li>Be obscene, pornographic, or sexually explicit</li>
          <li>Promote violence or discrimination</li>
          <li>Infringe any third-party rights</li>
          <li>Violate any law or regulation</li>
        </ul>

        <!-- Section 6: Intellectual Property -->
        <h2 id="intellectual-property">6. Intellectual Property</h2>

        <h3>Our Property</h3>
        <p>
          All content, features, and functionality of our Services, including but not limited to text, graphics, 
          logos, icons, images, audio clips, and software, are owned by Pomkatsu LLC or our licensors and are 
          protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h3>Feedback</h3>
        <p>
          Any feedback, suggestions, or ideas you provide about our Services become our property and may be 
          used without compensation to you.
        </p>

        <!-- Section 7: Purchases, Subscriptions, and Refunds -->
        <h2 id="purchases">7. Purchases, Subscriptions, and Refunds</h2>

        <h3>Payment Terms</h3>
        <ul class="styled-list">
          <li>All purchases are final and processed through the applicable app store (Apple App Store or Google Play Store)</li>
          <li>Prices are displayed in USD and subject to change with 30 days notice</li>
          <li>You are responsible for all applicable taxes</li>
          <li>Payment information is processed by third-party payment processors</li>
        </ul>

        <h3>Subscriptions</h3>
        <ul class="styled-list">
          <li>Subscription fees are billed in advance on a recurring basis (monthly or annually)</li>
          <li>Your subscription automatically renews unless cancelled before the renewal date</li>
          <li>You may cancel your subscription at any time through your app store account settings</li>
          <li>Cancellation takes effect at the end of the current billing period</li>
          <li>No partial refunds for unused subscription time</li>
        </ul>

        <h3>Free Trials and Promotions</h3>
        <ul class="styled-list">
          <li>We may offer free trials or promotional pricing at our discretion</li>
          <li>Free trials automatically convert to paid subscriptions unless cancelled</li>
          <li>Promotional pricing is subject to stated terms and limitations</li>
        </ul>

        <h3>Refunds</h3>
        <div class="info-box">
          <ul>
            <li>Refunds are handled according to the policies of the applicable app store</li>
            <li><strong>Apple App Store</strong>: Request refunds through Apple's purchase history</li>
            <li><strong>Google Play Store</strong>: Request refunds through Google Play's refund process</li>
            <li>We reserve the right to deny refund requests for abuse or violation of these Terms</li>
          </ul>
        </div>

        <h3>Currency and Pricing Errors</h3>
        <ul class="styled-list">
          <li>Prices are in US Dollars unless otherwise specified</li>
          <li>We reserve the right to correct pricing errors</li>
          <li>If a pricing error occurs, we will notify you and give you the option to cancel</li>
        </ul>

        <!-- Section 8: Privacy and Data Protection -->
        <h2 id="privacy">8. Privacy and Data Protection</h2>
        <p>
          Your use of our Services is subject to our <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>, 
          which is incorporated into these Terms by reference. By using our Services, you acknowledge that you 
          have read and understood our Privacy Policy.
        </p>

        <div class="highlight-box">
          <h4>Key Privacy Points:</h4>
          <ul>
            <li>We collect and process personal data as described in our Privacy Policy</li>
            <li>Documents are encrypted and stored securely on Firebase</li>
            <li>You control sharing through public links at your own risk</li>
            <li>We do not sell your personal information</li>
            <li>You have rights regarding your data as outlined in our Privacy Policy</li>
          </ul>
        </div>

        <!-- Section 9: Third-Party Services and Links -->
        <h2 id="third-party">9. Third-Party Services and Links</h2>
        <p>
          Our Services may contain links to or integrate with third-party websites, services, or content. 
          We are not responsible for:
        </p>
        <ul class="styled-list">
          <li>The availability or accuracy of third-party services</li>
          <li>The content, products, or services offered by third parties</li>
          <li>Your interactions with third-party services</li>
          <li>The privacy practices of third parties</li>
        </ul>

        <p>
          Your use of third-party services is governed by their respective terms and policies. Third-party 
          services integrated into our Apps may include:
        </p>
        <ul class="styled-list">
          <li>Translation APIs and services</li>
          <li>Cloud storage providers (Firebase/Google Cloud)</li>
          <li>Analytics services</li>
          <li>Payment processors</li>
          <li>Authentication providers</li>
        </ul>

        <!-- Section 10: Disclaimers and Warranties -->
        <h2 id="disclaimers">10. Disclaimers and Warranties</h2>

        <h3>As-Is Basis</h3>
        <div class="disclaimer-box">
          <p>
            OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, 
            AND NON-INFRINGEMENT.
          </p>
        </div>

        <h3>No Warranty</h3>
        <div class="disclaimer-box">
          <p><strong>WE DO NOT WARRANT THAT:</strong></p>
          <ul>
            <li>THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE</li>
            <li>DEFECTS WILL BE CORRECTED</li>
            <li>THE SERVICES OR SERVERS ARE FREE OF VIRUSES OR HARMFUL COMPONENTS</li>
            <li>THE RESULTS FROM USING THE SERVICES WILL MEET YOUR REQUIREMENTS</li>
            <li>TRANSLATIONS WILL BE 100% ACCURATE OR ERROR-FREE</li>
            <li>YOUR DOCUMENTS WILL BE SECURE FROM ALL UNAUTHORIZED ACCESS</li>
            <li>DATA WILL NEVER BE LOST OR CORRUPTED</li>
            <li>THE SERVICES WILL BE AVAILABLE AT ALL TIMES</li>
          </ul>
        </div>

        <h3>Translation Accuracy Disclaimer</h3>
        <div class="critical-warning">
          <ul>
            <li>AUTOMATED TRANSLATIONS MAY CONTAIN ERRORS</li>
            <li>WE ARE NOT RESPONSIBLE FOR TRANSLATION INACCURACIES</li>
            <li>DO NOT RELY ON TRANSLATIONS FOR LEGAL, MEDICAL, FINANCIAL, OR CRITICAL PURPOSES WITHOUT PROFESSIONAL REVIEW</li>
            <li>YOU ARE RESPONSIBLE FOR VERIFYING IMPORTANT TRANSLATIONS</li>
            <li>WE ARE NOT CERTIFIED TRANSLATORS</li>
          </ul>
        </div>

        <h3>Security Disclaimer</h3>
        <div class="disclaimer-box">
          <p><strong>WHILE WE IMPLEMENT INDUSTRY-STANDARD SECURITY MEASURES:</strong></p>
          <ul>
            <li>NO SYSTEM IS 100% SECURE</li>
            <li>WE CANNOT GUARANTEE AGAINST ALL POSSIBLE SECURITY BREACHES</li>
            <li>YOU UPLOAD DOCUMENTS AT YOUR OWN RISK</li>
            <li>YOU ARE RESPONSIBLE FOR MAINTAINING COPIES OF IMPORTANT DOCUMENTS</li>
          </ul>
        </div>

        <h3>Professional Advice Disclaimer</h3>
        <p>
          Nothing in our Services constitutes professional advice. Translations and AI-generated content should 
          not be relied upon for:
        </p>
        <ul class="styled-list">
          <li>Legal proceedings or contracts</li>
          <li>Medical diagnoses or treatments</li>
          <li>Financial decisions or tax matters</li>
          <li>Immigration or government documents requiring certified translation</li>
        </ul>

        <h3>AI-Specific Disclaimers</h3>
        <ul class="styled-list">
          <li>AI outputs may contain errors, biases, or inaccuracies</li>
          <li>AI-generated content may not be factually accurate</li>
          <li>Similar outputs may be generated for other users</li>
          <li>We do not guarantee AI outputs are free from third-party IP rights</li>
          <li>AI systems may produce unexpected or inappropriate results</li>
          <li>You must review and verify all AI-generated content before use</li>
        </ul>

        <!-- Section 11: Limitation of Liability -->
        <h2 id="limitation">11. Limitation of Liability</h2>

        <h3>Maximum Liability Cap</h3>
        <div class="disclaimer-box">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, POMKATSU LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
            DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
        </div>

        <h3>Specific Exclusions</h3>
        <div class="disclaimer-box">
          <p><strong>WE ARE NOT LIABLE FOR:</strong></p>
          <ul>
            <li>ANY LOSS, THEFT, OR UNAUTHORIZED ACCESS TO YOUR DOCUMENTS</li>
            <li>ANY DISCLOSURE OF DOCUMENTS THROUGH PUBLIC LINKS YOU CREATE</li>
            <li>ANY DAMAGES FROM DATA BREACHES, HACKING, OR SECURITY INCIDENTS</li>
            <li>LOSS OR CORRUPTION OF YOUR DOCUMENTS OR TRANSLATIONS</li>
            <li>ANY CONSEQUENCES FROM TRANSLATION ERRORS OR INACCURACIES</li>
            <li>UNAUTHORIZED ACCESS TO YOUR ACCOUNT DUE TO YOUR NEGLIGENCE</li>
            <li>ANY THIRD-PARTY ACCESS TO DOCUMENTS YOU CHOOSE TO SHARE</li>
            <li>DAMAGES FROM YOUR VIOLATION OF CONFIDENTIALITY OBLIGATIONS TO THIRD PARTIES</li>
            <li>ANY SENSITIVE INFORMATION YOU CHOOSE TO UPLOAD DESPITE OUR WARNINGS</li>
          </ul>
        </div>

        <h3>Data Breach Limitation</h3>
        <div class="info-box">
          <p><strong>IN THE EVENT OF A DATA BREACH OR SECURITY INCIDENT:</strong></p>
          <ul>
            <li>OUR LIABILITY IS LIMITED TO THE FEES YOU PAID US IN THE PAST 12 MONTHS OR $100, WHICHEVER IS LESS</li>
            <li>WE ARE NOT LIABLE FOR ANY INDIRECT OR CONSEQUENTIAL DAMAGES</li>
            <li>YOU ACKNOWLEDGE THAT THE FEES REFLECT THIS ALLOCATION OF RISK</li>
          </ul>
        </div>

        <h3>Force Majeure</h3>
        <p>
          We are not liable for any failure or delay in performance due to circumstances beyond our reasonable 
          control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargos, 
          acts of civil or military authorities, fire, floods, accidents, pandemic, strikes, or shortages of 
          transportation facilities, fuel, energy, labor, or materials.
        </p>

        <!-- Section 12: Indemnification -->
        <h2 id="indemnification">12. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Pomkatsu LLC, its officers, directors, employees, 
          agents, and affiliates from any claims, damages, losses, liabilities, costs, and expenses (including 
          attorneys' fees) arising from:
        </p>
        <ul class="styled-list">
          <li>Your use of the Services</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Your User Content, including any documents you upload</li>
          <li>Any breach of confidentiality resulting from your use of the Services</li>
          <li>Any documents you make publicly available through shareable links</li>
          <li>Your failure to maintain appropriate security measures for your account</li>
          <li>Any sensitive information you choose to upload</li>
          <li>Any claims that your documents or their translation violate any law or third-party right</li>
          <li>Any dispute between you and third parties regarding documents processed through our Services</li>
        </ul>

        <!-- Section 13: Termination -->
        <h2 id="termination">13. Termination</h2>

        <h3>By You</h3>
        <p>
          You may stop using our Services at any time and delete your account by contacting us at 
          <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>.
        </p>

        <h3>By Us</h3>
        <p>
          We may suspend or terminate your access to the Services at any time for any reason, including 
          violation of these Terms.
        </p>

        <h3>Effect of Termination</h3>
        <p>Upon termination:</p>
        <ul class="styled-list">
          <li>Your right to use the Services immediately ceases</li>
          <li>We may delete your account and data</li>
          <li>Provisions that by their nature should survive termination will remain in effect</li>
        </ul>

        <!-- Section 14: Governing Law and Dispute Resolution -->
        <h2 id="governing-law">14. Governing Law and Dispute Resolution</h2>

        <h3>Governing Law</h3>
        <p>
          These Terms are governed by the laws of the State of Texas, United States, without regard to conflict 
          of law principles. You agree to submit to the personal jurisdiction of the state and federal courts 
          located in Texas.
        </p>

        <h3>Dispute Resolution Process</h3>
        <div class="process-box">
          <h4>Step 1: Informal Resolution</h4>
          <p>
            Before filing any legal action, you agree to try to resolve disputes informally by contacting us at 
            <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a>. We'll try to 
            resolve the dispute informally for 60 days after submission.
          </p>

          <h4>Step 2: Binding Arbitration</h4>
          <p>
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Services 
            shall be resolved through binding arbitration in accordance with the rules of the American Arbitration 
            Association. The arbitration will be conducted in Texas, and judgment on the award may be entered in 
            any court having jurisdiction.
          </p>

          <h4>Exceptions to Arbitration:</h4>
          <ul>
            <li>Small claims court actions if eligible</li>
            <li>Injunctive relief for intellectual property violations</li>
            <li>Disputes related to theft, piracy, or unauthorized use</li>
          </ul>
        </div>

        <h3>Class Action Waiver</h3>
        <div class="disclaimer-box">
          <p>
            YOU AGREE TO RESOLVE DISPUTES WITH US ON AN INDIVIDUAL BASIS AND WAIVE YOUR RIGHT TO PARTICIPATE IN 
            CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS. This waiver applies to the maximum 
            extent permitted by law.
          </p>
        </div>

        <h3>Limitation Period</h3>
        <p>
          Any claim arising from these Terms or our Services must be brought within one (1) year after the cause 
          of action arises, or such claim is permanently barred.
        </p>

        <!-- Section 15: General Provisions -->
        <h2 id="general">15. General Provisions</h2>

        <h3>Entire Agreement</h3>
        <p>
          These Terms, along with our Privacy Policy, constitute the entire agreement between you and Pomkatsu LLC 
          regarding the Services.
        </p>

        <h3>Severability</h3>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in 
          full effect.
        </p>

        <h3>Waiver</h3>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver.
        </p>

        <h3>Assignment</h3>
        <p>
          We may assign or transfer these Terms without restriction. You may not assign or transfer these Terms 
          without our prior written consent.
        </p>

        <!-- Section 16: Changes to Terms -->
        <h2 id="changes">16. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. We will notify you of material changes by posting the updated 
          Terms and updating the "Last Updated" date. Your continued use of the Services after changes constitutes 
          acceptance of the modified Terms.
        </p>

        <!-- Section 17: Contact Information -->
        <h2 id="contact">17. Contact Information</h2>
        <div class="contact-section">
          <p>For questions about these Terms or our Services, please contact us:</p>
          
          <div class="contact-card">
            <h4>Pomkatsu LLC</h4>
            <p>A Texas Limited Liability Company</p>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Website: <a href="https://pomkatsu.com" class="legal-link">https://pomkatsu.com</a></p>
          </div>

          <div class="contact-card">
            <h4>For Support:</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Response Time: Within 2 business days</p>
          </div>

          <div class="contact-card">
            <h4>For Legal Matters:</h4>
            <p>Email: <a href="mailto:support@pomkatsu.com" class="legal-link">support@pomkatsu.com</a></p>
            <p>Subject Line: "Legal Inquiry"</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="legal-footer">
          <p><em>These Terms of Service apply to all mobile applications and services provided by Pomkatsu LLC.</em></p>
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
.definition-box,
.info-box,
.highlight-box,
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

.warning-text {
  font-weight: 600;
  margin-top: 1rem;
  color: var(--legal-warning-heading); /* pomkatsu-900 */
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
    color: black;
  }

  .critical-warning h4,
  .critical-warning li,
  .warning-text {
    color: black;
  }
}
</style>