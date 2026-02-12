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
  padding: 6rem 2rem;
  background: #111;
  color: #fff;
  text-align: center;
  font-family: "Georgia", "Times New Roman", serif;
  
  min-height: 92vh


}

/* Centered container */
.contact form {
  max-width: 600px;
  margin: 3rem auto 0 auto;
  display: flex;
  flex-direction: column;
}

/* Heading */
.contact h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

/* Inputs */
.contact input,
.contact textarea {
  margin: 12px 0;
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #1c1c1c;
  color: #fff;
  font-family: inherit;
  transition: border 0.3s ease, background 0.3s ease;
}

/* Focus state */
.contact input:focus,
.contact textarea:focus {
  outline: none;
  border: 1px solid #ffffff;
  background: #222;
}

/* Textarea resize */
.contact textarea {
  min-height: 140px;
  resize: vertical;
}

/* Button */
.contact button {
  margin-top: 1.5rem;
  padding: 14px;
  font-size: 1rem;
  font-weight: 500;
  background: #ffffff;
  color: #111;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Button hover */
.contact button:hover {
  background: #e6e6e6;
  transform: translateY(-2px);
}

/* Status text */
.contact p {
  margin-top: 1rem;
  font-size: 0.95rem;
  opacity: 0.85;
}
</style>
