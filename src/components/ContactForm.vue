<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true
    
    // Reset form after 2 seconds and close
    setTimeout(() => {
      formData.value = {
        name: '',
        email: '',
        company: '',
        message: ''
      }
      showSuccess.value = false
      emit('close')
    }, 2000)
  }, 1500)
}

const closeModal = () => {
  if (!isSubmitting.value) {
    emit('close')
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Background backdrop -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

    <!-- Modal panel -->
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <!-- Close button -->
        <button
          v-if="!isSubmitting"
          @click="closeModal"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-2xl font-bold leading-6 text-gray-900 mb-6" id="modal-title">
                Get in Touch
              </h3>

              <!-- Success Message -->
              <div v-if="showSuccess" class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div class="flex items-center">
                  <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              </div>

              <!-- Form -->
              <form @submit.prevent="handleSubmit" v-if="!showSuccess">
                <div class="space-y-4">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      :disabled="isSubmitting"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pomkatsu-500 focus:border-pomkatsu-500 disabled:bg-gray-100"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      :disabled="isSubmitting"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pomkatsu-500 focus:border-pomkatsu-500 disabled:bg-gray-100"
                    />
                  </div>

                  <!-- Company -->
                  <div>
                    <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      v-model="formData.company"
                      type="text"
                      :disabled="isSubmitting"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pomkatsu-500 focus:border-pomkatsu-500 disabled:bg-gray-100"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      rows="4"
                      required
                      :disabled="isSubmitting"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pomkatsu-500 focus:border-pomkatsu-500 disabled:bg-gray-100"
                      placeholder="Tell us about your project idea..."
                    ></textarea>
                  </div>
                </div>

                <!-- Form Actions -->
                <div class="mt-6 flex gap-3 justify-end">
                  <button
                    type="button"
                    @click="closeModal"
                    :disabled="isSubmitting"
                    class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pomkatsu-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="px-4 py-2 text-sm font-medium text-white bg-pomkatsu-600 border border-transparent rounded-lg hover:bg-pomkatsu-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pomkatsu-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>