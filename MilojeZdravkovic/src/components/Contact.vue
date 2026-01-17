<template>
  <section class="contact" id="contact">
    <h2>Contact</h2>

    <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Name" />
        <input v-model="email" type="email" placeholder="Email" />
        <textarea v-model="message" placeholder="Message"></textarea>

        <button type="submit">Send</button>
        <p>{{ status }}</p>
    </form>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')

async function submitForm() {
  status.value = 'Sending...'

  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  })

  status.value = res.ok ? 'Message sent!' : 'Error sending message'
}
</script>


<style scoped>
.contact {
  padding: 5rem 4rem;
  background: #111;
  color: white;
}

form {
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

input,
textarea {
  margin: 10px 0;
  padding: 10px;
}

button {
  background: white;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
