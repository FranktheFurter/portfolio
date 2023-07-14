<script lang="ts" setup>
import { ref } from "vue"

const email = ref("")
const message = ref("")

const submitForm = async () => {
  const response = await fetch("API_URL", {
    // replace with your server side script url
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, message: message.value }),
  })

  if (!response.ok) {
    alert("There was an error. Please try again.")
  } else {
    email.value = ""
    message.value = ""
    alert("Your message has been sent successfully!")
  }
}
</script>

<template>
  <SectionHeading id="contact">Contact</SectionHeading>
  <SectionContainer>
    <form class="glass" @submit.prevent="submitForm">
      <div class="py-2">
        <label for="email">Email:</label><br />
        <input id="email" v-model="email" type="email" required /><br />
      </div>

      <div class="py-2">
        <label for="message">Message:</label><br />
        <textarea id="message" v-model="message" required></textarea><br />
      </div>

      <input type="submit" value="Submit" />
    </form>
  </SectionContainer>
</template>

<style scoped>
form {
  @apply p-6;
}

label {
  @apply text-lg;
}

input,
textarea {
  @apply px-2 py-1 rounded-md w-100% m-0 p-0 bg-white/80 text-black/80;
  box-sizing: border-box;
}
textarea {
  min-height: 12rem;
}

input[type="submit"] {
}
</style>
