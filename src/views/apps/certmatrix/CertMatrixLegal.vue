<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Marked } from 'marked'
import LegalLayout from '../../../components/LegalLayout.vue'
import TableOfContents from '../../../components/TableOfContents.vue'
import { certmatrixLegalLinks } from './legal-links.js'
import terms from '../../../legal/certmatrix-terms-of-service.md?raw'
import privacy from '../../../legal/certmatrix-privacy-policy.md?raw'
import dpa from '../../../legal/certmatrix-dpa.md?raw'

// Unlike the shared Pomkatsu documents (hand-written HTML with a parallel .md),
// the CertMatrix documents have ONE source: the .md in src/legal, rendered here.
const DOCUMENTS = {
  terms: { title: 'CertMatrix Terms of Service', source: terms },
  privacy: { title: 'CertMatrix Privacy Policy', source: privacy },
  dpa: { title: 'CertMatrix Data Processing Addendum', source: dpa },
}

const props = defineProps({
  doc: {
    type: String,
    required: true,
    validator: (v) => ['terms', 'privacy', 'dpa'].includes(v),
  },
})

const router = useRouter()

// TableOfContents builds itself from `.legal-content h2` and needs an id on each.
const marked = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens)
      if (depth !== 2) return `<h${depth}>${html}</h${depth}>\n`
      const id = html
        .replace(/<[^>]+>/g, '')
        .replace(/^\d+\.\s*/, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      return `<h2 id="${id}">${html}</h2>\n`
    },
  },
})

const current = computed(() => DOCUMENTS[props.doc])

// The .md opens with the house header: the title, then bold lines for the
// company, the dates and the version. LegalLayout renders the title and the
// header box below renders the rest, so both are lifted out of the body.
const header = computed(() => {
  const field = (label) =>
    current.value.source.match(new RegExp(`\\*\\*${label}:\\s*(.+?)\\*\\*`))?.[1] ?? ''
  return {
    effective: field('Effective Date'),
    updated: field('Last Updated'),
    version: field('Version'),
  }
})

const body = computed(() =>
  marked.parse(
    current.value.source
      .replace(/^# .+\n+/, '')
      .replace(/^(\*\*.+\*\*[ ]*\n)+/, ''),
  ),
)

// Links between the documents are plain anchors in the rendered markdown; route
// them through the router so they do not reload the page.
function onBodyClick(event) {
  const href = event.target.closest('a')?.getAttribute('href')
  if (!href?.startsWith('/')) return
  event.preventDefault()
  router.push(href)
}
</script>

<template>
  <LegalLayout :title="current.title" :legal-links="certmatrixLegalLinks" theme="certmatrix">
    <div class="legal-container">
      <TableOfContents back-to="https://certmatrix.io" back-label="Back to CertMatrix" />

      <div class="legal-content">
        <div class="legal-header">
          <div class="company-info">
            <strong>Pomkatsu LLC</strong>
          </div>
          <div class="date-info">
            <div><strong>Effective Date:</strong> {{ header.effective }}</div>
            <div><strong>Last Updated:</strong> {{ header.updated }}</div>
            <div><strong>Version:</strong> {{ header.version }}</div>
          </div>
        </div>

        <!-- v-html is safe here: the source is our own bundled markdown -->
        <div class="legal-body" @click="onBodyClick" v-html="body"></div>
      </div>
    </div>
  </LegalLayout>
</template>

<style scoped>
/* Same structure as the hand-written legal views (TermsOfService.vue), in
   CertMatrix's own colors: LegalLayout's `certmatrix` theme sets the --legal-*
   variables, and corners are square because CertMatrix's are. The body is v-html,
   so its rules go through :deep(). */
.legal-container {
  display: flex;
  gap: 2rem;
  position: relative;
}

.legal-content {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--legal-text);
}

.legal-header {
  background: transparent;
  border: 1px solid var(--legal-border);
  border-radius: var(--legal-radius, 12px);
  padding: 2rem;
  margin-bottom: 2rem;
}

.company-info {
  font-size: 1.25rem;
  color: var(--legal-text-strong);
  margin-bottom: 1rem;
}

.date-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  color: var(--legal-text-secondary);
  /* CertMatrix sets dates and counts in its mono face */
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.8125rem;
}

/* Typography */
.legal-body :deep(h2) {
  color: var(--legal-text);
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--legal-border);
  scroll-margin-top: 80px;
}

.legal-body :deep(h3) {
  color: var(--legal-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.legal-body :deep(p) {
  margin-bottom: 1rem;
  color: var(--legal-text-secondary);
}

.legal-body :deep(strong) {
  color: var(--legal-text);
}

/* Lists */
.legal-body :deep(ul) {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.legal-body :deep(li) {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--legal-text-secondary);
}

.legal-body :deep(li)::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: var(--legal-text);
  font-weight: bold;
}

.legal-body :deep(li > ul) {
  margin: 0.5rem 0 0;
}

/* A markdown blockquote is the info box */
.legal-body :deep(blockquote) {
  background: var(--legal-bg-box);
  border-left: 4px solid var(--legal-border-accent);
  border-radius: var(--legal-radius, 8px);
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.legal-body :deep(blockquote p:last-child) {
  margin-bottom: 0;
}

/* Links */
.legal-body :deep(a) {
  color: var(--legal-link);
  text-decoration: none;
  border-bottom: 1px dotted var(--legal-link-border);
  transition: all 0.2s ease;
  overflow-wrap: anywhere;
}

.legal-body :deep(a:hover) {
  color: var(--legal-link-hover);
  border-bottom-style: solid;
}

/* The closing rule and scope line are the footer */
.legal-body :deep(hr) {
  margin-top: 4rem;
  border: 0;
  border-top: 2px solid var(--legal-border);
}

.legal-body :deep(hr + p) {
  padding-top: 2rem;
  text-align: center;
  color: var(--legal-text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .legal-body :deep(h2) {
    font-size: 1.5rem;
  }

  .legal-body :deep(h3) {
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

@media print {
  .legal-body :deep(a) {
    border-bottom: none;
    color: inherit;
  }

  .legal-body :deep(blockquote) {
    border: 1px solid #000;
    background: white;
  }
}
</style>
