<template>
  <div :class="['min-h-screen py-12 px-4 sm:px-6 lg:px-8', isAppDomain ? 'bg-astral-deep' : 'bg-gradient-to-br from-amber-50 to-orange-50']">
    <div class="max-w-3xl mx-auto">
      <div :class="['rounded-lg shadow-lg p-8', isAppDomain ? 'bg-white/5 border border-white/10' : 'bg-white']">
        <h1 :class="['text-3xl font-bold mb-6', isAppDomain ? 'text-white' : 'text-gray-900']">Delete Your Account</h1>

        <div class="prose max-w-none">
          <h2 :class="['text-2xl font-semibold mb-4', isAppDomain ? 'text-white/90' : 'text-gray-800']">How to Delete Your {{ appName }} Account</h2>

          <p :class="['mb-4', isAppDomain ? 'text-white/70' : 'text-gray-700']">
            To delete your account and all associated data from {{ appName }}, please follow these steps:
          </p>

          <ol :class="['list-decimal list-inside space-y-2 mb-6', isAppDomain ? 'text-white/70' : 'text-gray-700']">
            <li>Open the app on your device</li>
            <li>Navigate to <strong>Settings</strong></li>
            <li>Scroll to the bottom of the page</li>
            <li>Tap <strong>"Delete Account"</strong></li>
            <li>Confirm deletion when prompted</li>
          </ol>

          <div :class="['border-l-4 p-4 mb-6', isAppDomain ? 'bg-white/5 border-astral-cosmic' : 'bg-amber-50 border-amber-500']">
            <p :class="['text-sm', isAppDomain ? 'text-white/80' : 'text-amber-800']">
              <strong>Note:</strong> Your account and data will be permanently deleted within 30 days of your request.
            </p>
          </div>

          <h2 :class="['text-2xl font-semibold mb-4', isAppDomain ? 'text-white/90' : 'text-gray-800']">What Gets Deleted</h2>

          <ul :class="['list-disc list-inside space-y-2 mb-6', isAppDomain ? 'text-white/70' : 'text-gray-700']">
            <li>Your email and profile information</li>
            <li>App content (chat history, readings, translations, food logs, etc.)</li>
            <li>AI-generated content (images, portraits, reports)</li>
            <li>Usage statistics and preferences</li>
            <li>Subscription information</li>
          </ul>

          <h2 :class="['text-2xl font-semibold mb-4', isAppDomain ? 'text-white/90' : 'text-gray-800']">What Happens to Your Subscription</h2>

          <p :class="['mb-4', isAppDomain ? 'text-white/70' : 'text-gray-700']">
            If you have an active subscription, it will be cancelled when you delete your account.
            You may be entitled to a refund based on Google Play's or Apple's refund policy.
            Please contact the respective app store for refund requests.
          </p>

          <h2 :class="['text-2xl font-semibold mb-4', isAppDomain ? 'text-white/90' : 'text-gray-800']">Need Help?</h2>

          <p :class="['mb-2', isAppDomain ? 'text-white/70' : 'text-gray-700']">
            If you're unable to delete your account through the app or have questions, please contact us:
          </p>

          <div :class="['rounded-lg p-4 mb-6', isAppDomain ? 'bg-white/5' : 'bg-gray-50']">
            <p :class="isAppDomain ? 'text-white/70' : 'text-gray-700'">
              <strong>Email:</strong> <a href="mailto:support@pomkatsu.com" :class="isAppDomain ? 'text-astral-gold hover:text-astral-gold/80' : 'text-amber-600 hover:text-amber-700'">support@pomkatsu.com</a>
            </p>
            <p :class="['mt-2', isAppDomain ? 'text-white/70' : 'text-gray-700']">
              <strong>Subject:</strong> Delete My {{ appName }} Account
            </p>
          </div>

          <p :class="['text-sm mt-8', isAppDomain ? 'text-white/50' : 'text-gray-600']">
            For more information about how we handle your data, please see our
            <router-link to="/privacy" :class="isAppDomain ? 'text-astral-gold hover:text-astral-gold/80' : 'text-amber-600 hover:text-amber-700'">Privacy Policy</router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDomainConfig } from '../config/domains'

const domainConfig = getDomainConfig()
const isAppDomain = !!domainConfig
const appName = domainConfig?.name || 'Pomkatsu'
</script>
