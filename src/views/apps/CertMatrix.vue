<script setup>
import { useHead, useSeoMeta } from '@unhead/vue'
import AppLayout from '../../components/apps/AppLayout.vue'
import { certmatrixLegalLinks } from './certmatrix/legal-links.js'

const SITE = 'https://certmatrix.io'

useSeoMeta({
  title: 'CertMatrix — Certification Tracking for Small Teams',
  description: "Photograph your team's certification cards. CertMatrix puts every card on one Matrix, reminds the right person before it runs out, and builds the audit binder in one click.",
  ogTitle: 'CertMatrix — Certification Tracking for Small Teams',
  ogDescription: 'Every card on one Matrix, a reminder before anything runs out, and no per-person fees.',
  ogImage: '/app-logos/certmatrix/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CertMatrix',
      operatingSystem: 'Web',
      applicationCategory: 'BusinessApplication',
      url: SITE,
      description: 'Employee certification tracking: photograph the card, see who has what on one Matrix, get reminders before a card runs out, export the audit binder in one click.',
      author: {
        '@type': 'Organization',
        name: 'Pomkatsu',
        url: 'https://pomkatsu.com',
      },
    }),
  }],
})

// The copy is the certmatrix.io landing page's own, shortened.
const steps = [
  {
    title: 'Your crew adds their own cards',
    desc: 'Send a link; they take a photo from their phone. No app, no account. Or bring the spreadsheet you already have.',
  },
  {
    title: 'The app reads the card. You confirm it',
    desc: 'Name, card and dates are filled in next to the photo. Nothing is saved until you say so.',
  },
  {
    title: 'It lands on the Matrix',
    desc: 'People down the side, requirements across the top, a date in every cell. Statuses come from the dates and update themselves.',
  },
  {
    title: 'Reminders go out on their own',
    desc: 'The right person gets an email before the card runs out, and you get a Monday summary.',
  },
  {
    title: 'The audit binder is one click',
    desc: 'A binder for whoever asks, a Matrix PDF, or a ZIP of every record and file, any time.',
  },
  {
    title: 'One price for the whole team',
    desc: 'Every feature is in every plan. Plans go by headcount, with no per-person or per-card fees.',
  },
]

const legalDocs = [
  {
    ...certmatrixLegalLinks[0],
    desc: 'The agreement between your business and Pomkatsu LLC: plans, the guarantee, and what CertMatrix does and does not do.',
  },
  {
    ...certmatrixLegalLinks[1],
    desc: 'What information CertMatrix handles, who it is shared with, and how long it is kept.',
  },
  {
    ...certmatrixLegalLinks[2],
    desc: "How we handle your team's records on your behalf, with our security measures and provider list.",
  },
]
</script>

<template>
  <AppLayout variant="mono" :legal-links="certmatrixLegalLinks">
    <!-- Section 1: Hero -->
    <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="text-center lg:text-left order-2 lg:order-1">
            <div class="flex items-center gap-4 justify-center lg:justify-start mb-8">
              <img
                src="/app-logos/certmatrix/certmatrix-logo.png"
                alt="CertMatrix Logo"
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg"
                fetchpriority="high"
              />
              <div class="text-left">
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">CertMatrix</h2>
                <p class="text-sm sm:text-base text-gray-500">Certification tracking for small teams</p>
              </div>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Know who&rsquo;s certified today, not who was last spring.
            </h1>
            <p class="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed">
              Every card on one Matrix, a reminder before anything runs out, and no per-person fees.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                :href="SITE"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200 font-semibold min-w-[160px]"
              >
                Visit certmatrix.io
              </a>
              <span class="text-sm text-gray-500">14 days free &middot; no card &middot; every feature</span>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <img
              src="/app-logos/certmatrix/og-image.png"
              alt="CertMatrix: a Matrix of people and requirements with In date, Due soon, Expired and No card statuses."
              width="1200"
              height="630"
              class="w-full h-auto rounded-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: How it works -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          How it works
        </h2>
        <p class="text-lg text-gray-500 text-center mb-12">
          Follow one card from a phone photo to the audit binder.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="bg-white p-6 rounded-2xl border border-gray-200"
          >
            <p class="text-sm font-semibold text-gray-400 mb-2">{{ String(index + 1).padStart(2, '0') }}</p>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-500 text-center mt-10">
          CertMatrix tracks and reminds; it does not determine legal compliance.
        </p>
      </div>
    </section>

    <!-- Section 3: Legal -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Legal
        </h2>
        <p class="text-lg text-gray-500 text-center mb-12">
          CertMatrix is a product of Pomkatsu LLC and has its own documents.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link
            v-for="doc in legalDocs"
            :key="doc.to"
            :to="doc.to"
            class="block p-6 rounded-2xl border border-gray-200 hover:border-gray-900 transition-colors duration-200"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ doc.label }}</h3>
            <p class="text-gray-500 leading-relaxed">{{ doc.desc }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 4: CTA -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          See it on your own team
        </h2>
        <p class="text-lg text-gray-500 mb-8">
          Start a 14 day free trial at certmatrix.io. No card needed.
        </p>
        <a
          :href="SITE"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200 font-semibold min-w-[160px]"
        >
          Visit certmatrix.io
        </a>
      </div>
    </section>
  </AppLayout>
</template>
