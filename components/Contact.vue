<template>
  <SectionHeading id="contact">Contact</SectionHeading>
  <SectionContainer>
    <div class="py-2 mx-auto">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        enctype="multipart/form-data"
        class="space-y-8"
      >
        <!-- Hidden fields for Web3Forms -->
        <input
          type="hidden"
          name="access_key"
          value="80418793-412b-4000-8f4c-b42d5e3cc4d2"
        />
        <input v-model="subject" type="hidden" name="subject" />
        <input
          type="hidden"
          name="from_name"
          value="Marc Frankfurter Portfolio"
        />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none"
        />
        <input id="recaptchaResponse" type="hidden" name="recaptcha_response" />

        <!-- Email field -->
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="email"
          required
        />

        <!-- Subject field -->
        <input
          id="subject"
          v-model="subject"
          name="subject"
          type="text"
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="How can I help you"
          required
        />

        <!-- Message field -->
        <textarea
          id="message"
          v-model="message"
          name="message"
          rows="6"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Message"
          required
        ></textarea>

        <!-- Submit button -->
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
const email = ref("")
const subject = ref("")
const message = ref("")
</script>

<style scoped></style>
