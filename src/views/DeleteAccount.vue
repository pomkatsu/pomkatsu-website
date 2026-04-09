<script setup>
import { computed } from 'vue'
import { getDomainConfig } from '../config/domains'
import AppLayout from '../components/apps/AppLayout.vue'

const domainConfig = getDomainConfig()
const appName = domainConfig?.name || 'Pomkatsu'
const appDataDescription = domainConfig?.deleteAccount?.dataDescription || null
const subscriptionName = domainConfig?.deleteAccount?.subscriptionName || 'subscription'

// Pick the AppLayout variant that matches the current app (falls back to default)
const layoutVariant = computed(() => domainConfig?.layoutVariant || 'default')
const isSeedbook = computed(() => layoutVariant.value === 'seedbook')
</script>

<template>
  <AppLayout :variant="layoutVariant">
    <section
      class="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      :class="isSeedbook ? 'bg-seedbook-parch' : 'bg-white'"
    >
      <div class="max-w-3xl mx-auto">
        <!-- Section label (seedbook only) -->
        <div v-if="isSeedbook" class="flex items-center gap-3 mb-6">
          <span class="h-px w-10 bg-seedbook-clay"></span>
          <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
            account · deletion
          </span>
        </div>

        <h1
          :class="
            isSeedbook
              ? 'font-display text-5xl sm:text-6xl font-semibold text-seedbook-forest tracking-tight leading-[0.98] mb-10'
              : 'text-3xl font-bold mb-6 text-gray-900'
          "
        >
          Delete your account.
        </h1>

        <div :class="isSeedbook ? 'space-y-10 text-seedbook-forest/80' : 'prose max-w-none'">
          <!-- How to Delete -->
          <div>
            <h2
              :class="
                isSeedbook
                  ? 'font-display text-2xl text-seedbook-forest mb-4 tracking-tight'
                  : 'text-2xl font-semibold mb-4 text-gray-800'
              "
            >
              How to delete your {{ appName }} account
            </h2>

            <p :class="isSeedbook ? 'mb-5 text-[15px] leading-relaxed' : 'mb-4 text-gray-700'">
              To delete your account and all associated data from {{ appName }}, follow these steps from inside the app:
            </p>

            <ol
              :class="
                isSeedbook
                  ? 'list-decimal list-inside space-y-2 mb-6 text-[15px] leading-relaxed'
                  : 'list-decimal list-inside space-y-2 mb-6 text-gray-700'
              "
            >
              <li>Open the app on your device</li>
              <li>Navigate to <strong>Settings</strong></li>
              <li>Scroll to the bottom of the page</li>
              <li>Tap <strong>Delete Account</strong></li>
              <li>Confirm deletion when prompted</li>
            </ol>

            <div
              :class="
                isSeedbook
                  ? 'border-l-2 border-seedbook-clay bg-seedbook-parch-warm px-5 py-4 mb-2'
                  : 'border-l-4 bg-amber-50 border-amber-500 p-4 mb-6'
              "
            >
              <p :class="isSeedbook ? 'text-[14px] text-seedbook-forest/80' : 'text-sm text-amber-800'">
                <strong>Note:</strong> Your account and data will be permanently deleted within 30 days of your request.
              </p>
            </div>
          </div>

          <!-- What Gets Deleted -->
          <div>
            <h2
              :class="
                isSeedbook
                  ? 'font-display text-2xl text-seedbook-forest mb-4 tracking-tight'
                  : 'text-2xl font-semibold mb-4 text-gray-800'
              "
            >
              What gets deleted
            </h2>
            <ul
              :class="
                isSeedbook
                  ? 'list-disc list-inside space-y-2 text-[15px] leading-relaxed'
                  : 'list-disc list-inside space-y-2 mb-6 text-gray-700'
              "
            >
              <li>Your email address, account credentials, and profile information</li>
              <li v-if="appDataDescription">
                <strong>Your {{ appName }} data:</strong> {{ appDataDescription }}
              </li>
              <li v-else>
                App content you've created (entries, logs, photos, saved content, and any other user-generated data)
              </li>
              <li>AI-generated content associated with your account (scan results, identifications, analysis reports)</li>
              <li>Usage statistics, preferences, and settings</li>
              <li>Subscription entitlements and in-app purchase history tied to your account</li>
            </ul>
          </div>

          <!-- Retention Window -->
          <div>
            <h2
              :class="
                isSeedbook
                  ? 'font-display text-2xl text-seedbook-forest mb-4 tracking-tight'
                  : 'text-2xl font-semibold mb-4 text-gray-800'
              "
            >
              Data retention window
            </h2>
            <ul
              :class="
                isSeedbook
                  ? 'list-disc list-inside space-y-2 text-[15px] leading-relaxed'
                  : 'list-disc list-inside space-y-2 mb-6 text-gray-700'
              "
            >
              <li><strong>Account data:</strong> permanently deleted within 30 days of your request</li>
              <li><strong>Backups:</strong> encrypted backups containing your data are rotated out within 35 days</li>
              <li>
                <strong>Transaction records:</strong> retained for up to 7 years as required by U.S. tax and financial
                recordkeeping law (these records contain no app content &mdash; only purchase metadata)
              </li>
              <li>
                <strong>Anonymized analytics:</strong> aggregated, non-identifying usage statistics may be retained up
                to 2 years for product improvement
              </li>
              <li>
                <strong>Legal holds:</strong> data subject to an active legal preservation obligation may be retained
                longer as required by law
              </li>
            </ul>
          </div>

          <!-- Subscription -->
          <div>
            <h2
              :class="
                isSeedbook
                  ? 'font-display text-2xl text-seedbook-forest mb-4 tracking-tight'
                  : 'text-2xl font-semibold mb-4 text-gray-800'
              "
            >
              What happens to your subscription
            </h2>
            <p :class="isSeedbook ? 'text-[15px] leading-relaxed' : 'mb-4 text-gray-700'">
              If you have an active {{ subscriptionName }}, deleting your account cancels your entitlement inside
              {{ appName }}. However, the underlying App Store or Google Play subscription is billed by Apple or Google
              and must be cancelled in your device's subscription settings to stop future charges. You may be entitled
              to a refund under Apple or Google's refund policy &mdash; contact the respective app store directly for
              refund requests.
            </p>
          </div>

          <!-- Need Help -->
          <div>
            <h2
              :class="
                isSeedbook
                  ? 'font-display text-2xl text-seedbook-forest mb-4 tracking-tight'
                  : 'text-2xl font-semibold mb-4 text-gray-800'
              "
            >
              Need help?
            </h2>
            <p :class="isSeedbook ? 'mb-5 text-[15px] leading-relaxed' : 'mb-2 text-gray-700'">
              If you're unable to delete your account through the app, or have questions, contact us:
            </p>

            <div
              :class="
                isSeedbook
                  ? 'border border-seedbook-parch-border bg-seedbook-parch-warm px-6 py-5'
                  : 'rounded-lg p-4 mb-6 bg-gray-50'
              "
            >
              <p :class="isSeedbook ? 'text-[15px] text-seedbook-forest/90' : 'text-gray-700'">
                <strong>Email:</strong>
                <a
                  href="mailto:support@pomkatsu.com"
                  :class="
                    isSeedbook
                      ? 'text-seedbook-clay hover:text-seedbook-clay-light border-b border-seedbook-clay/40 ml-1'
                      : 'text-amber-600 hover:text-amber-700'
                  "
                >
                  support@pomkatsu.com
                </a>
              </p>
              <p :class="isSeedbook ? 'mt-2 text-[15px] text-seedbook-forest/90' : 'mt-2 text-gray-700'">
                <strong>Subject:</strong> Delete My {{ appName }} Account
              </p>
            </div>
          </div>

          <p :class="isSeedbook ? 'text-[13px] text-seedbook-forest/60 pt-4' : 'text-sm mt-8 text-gray-600'">
            For more information about how we handle your data, please see our
            <router-link
              to="/privacy"
              :class="
                isSeedbook
                  ? 'text-seedbook-clay hover:text-seedbook-clay-light border-b border-seedbook-clay/40'
                  : 'text-amber-600 hover:text-amber-700'
              "
            >
              Privacy Policy</router-link
            >.
          </p>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
