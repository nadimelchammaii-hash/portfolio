<template>
  <v-footer class="app-footer" color="surfaceContainerLowest">
    <div class="app-container d-flex flex-column flex-md-row justify-space-between align-center ga-6 py-8">
      <span class="wordmark text-primary">NADIM.DEV</span>

      <nav aria-label="Footer" class="d-flex flex-wrap flex-md-nowrap justify-center ga-6 font-mono text-body-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="footer-link text-medium-emphasis"
          :href="item.href"
        >{{ item.label }}</a>
      </nav>

      <div class="d-flex ga-2">
        <v-btn
          aria-label="GitHub profile"
          :href="profile.githubUrl"
          icon
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-github" />
        </v-btn>

        <v-btn
          aria-label="LinkedIn profile"
          :href="profile.linkedinUrl"
          icon
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-linkedin" />
        </v-btn>

        <v-btn
          :aria-label="`Email ${profile.email}`"
          :href="`mailto:${profile.email}`"
          icon
          variant="text"
        >
          <v-icon icon="mdi-email-outline" />
        </v-btn>
      </div>
    </div>

    <div class="app-container pb-8">
      <v-divider class="mb-6" />

      <p class="text-caption text-medium-emphasis font-mono text-center text-md-start">
        © {{ year }} Nadim El Chammaii. Built with Vue, Vuetify, and a Stitch-designed system.
      </p>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
  import { profile } from '@/data/profile'

  const year = new Date().getFullYear()

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
</script>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(var(--v-theme-outlineVariant), 0.4);
}

.wordmark {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.footer-link {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
