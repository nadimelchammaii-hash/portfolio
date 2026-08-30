<template>
  <section id="contact" class="app-container section-spacing contact-section">
    <p class="font-mono text-primary contact-eyebrow">06. What's Next?</p>
    <h2 class="contact-heading">Get In Touch</h2>

    <p class="contact-intro text-medium-emphasis">
      I'm always glad to talk about new opportunities, collaboration, or just swap notes on deployment and architecture.
    </p>

    <v-form ref="formRef" class="contact-form" @submit.prevent="handleSubmit">
      <div class="contact-field">
        <label class="font-mono contact-label" for="contact-name">Name</label>

        <v-text-field
          id="contact-name"
          v-model="name"
          density="comfortable"
          placeholder="Enter your name"
          :rules="nameRules"
          variant="outlined"
        />
      </div>

      <div class="contact-field">
        <label class="font-mono contact-label" for="contact-email">Email</label>

        <v-text-field
          id="contact-email"
          v-model="email"
          density="comfortable"
          placeholder="Enter your email"
          :rules="emailRules"
          type="email"
          variant="outlined"
        />
      </div>

      <div class="contact-field">
        <label class="font-mono contact-label" for="contact-message">Message</label>

        <v-textarea
          id="contact-message"
          v-model="message"
          density="comfortable"
          placeholder="How can I help?"
          rows="4"
          :rules="messageRules"
          variant="outlined"
        />
      </div>

      <v-btn block color="primaryContainer" size="large" type="submit">
        Send Message
        <v-icon end icon="mdi-send-outline" />
      </v-btn>

      <p class="contact-form-note font-mono text-medium-emphasis">
        Opens your email client with this pre-filled — nothing is sent from this page directly.
      </p>
    </v-form>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { profile } from '@/data/profile'

  const formRef = ref()
  const name = ref('')
  const email = ref('')
  const message = ref('')

  const nameRules = [(v: string) => !!v || 'Name is required']
  const emailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(v) || 'Enter a valid email',
  ]
  const messageRules = [(v: string) => !!v || 'Message is required']

  async function handleSubmit () {
    const { valid } = await formRef.value.validate()
    if (!valid) return

    const subject = encodeURIComponent(`Portfolio contact from ${name.value}`)
    const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
</script>

<style scoped>
.contact-section {
  max-width: 40rem;
  text-align: center;
}

.contact-eyebrow {
  font-size: 0.8125rem;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.contact-heading {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

@media (min-width: 840px) {
  .contact-heading {
    font-size: 56px;
    letter-spacing: -0.03em;
  }
}

.contact-intro {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 48px;
}

.contact-form {
  text-align: left;
  padding: 32px;
  background-color: rgb(var(--v-theme-surfaceContainer));
  border: 1px solid rgba(var(--v-theme-outlineVariant), 0.3);
  border-radius: 4px;
}

.contact-field {
  margin-bottom: 20px;
}

.contact-label {
  display: block;
  font-size: 0.8125rem;
  margin-bottom: 8px;
  color: rgb(var(--v-theme-onSurfaceVariant));
}

.contact-form-note {
  margin-top: 12px;
  font-size: 0.75rem;
  text-align: center;
}
</style>
