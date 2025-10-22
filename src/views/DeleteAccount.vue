<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Delete Your Account</h1>

        <div class="prose max-w-none">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">How to Delete Your EasyTranslate Account</h2>

          <p class="text-gray-700 mb-4">
            To delete your account and all associated data, please follow these steps:
          </p>

          <ol class="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            <li>Open the EasyTranslate app on your device</li>
            <li>Navigate to <strong>Settings</strong></li>
            <li>Scroll to the bottom of the page</li>
            <li>Tap <strong>"Delete Account"</strong></li>
            <li>Confirm deletion when prompted</li>
          </ol>

          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <p class="text-sm text-amber-800">
              <strong>Note:</strong> Your account and data will be permanently deleted within 30 days of your request.
            </p>
          </div>

          <h2 class="text-2xl font-semibold text-gray-800 mb-4">What Gets Deleted</h2>

          <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Your email and profile information</li>
            <li>All translation history</li>
            <li>All uploaded documents and files</li>
            <li>Usage statistics and preferences</li>
            <li>Subscription information</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-800 mb-4">What Happens to Your Subscription</h2>

          <p class="text-gray-700 mb-4">
            If you have an active subscription, it will be cancelled when you delete your account.
            You may be entitled to a refund based on Google Play's or Apple's refund policy.
            Please contact the respective app store for refund requests.
          </p>

          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>

          <p class="text-gray-700 mb-2">
            If you're unable to delete your account through the app or have questions, please contact us:
          </p>

          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <p class="text-gray-700">
              <strong>Email:</strong> <a href="mailto:support@pomkatsu.com" class="text-amber-600 hover:text-amber-700">support@pomkatsu.com</a>
            </p>
            <p class="text-gray-700 mt-2">
              <strong>Subject:</strong> Delete My EasyTranslate Account
            </p>
          </div>

          <p class="text-sm text-gray-600 mt-8">
            For more information about how we handle your data, please see our
            <router-link to="/privacy" class="text-amber-600 hover:text-amber-700">Privacy Policy</router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this static page
</script>
