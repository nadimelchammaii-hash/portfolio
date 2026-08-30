<template>
  <v-app-bar
    class="app-header"
    color="surfaceContainerLowest"
    :elevation="0"
    height="80"
    scroll-behavior="elevate"
  >
    <div class="app-container d-flex align-center h-100">
      <a aria-label="Nadim El Chammaii — home" class="wordmark text-primary" href="#">NADIM.DEV</a>

      <v-spacer />

      <nav v-if="!mobile" aria-label="Primary" class="d-flex align-center ga-6 mr-6">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="nav-link text-medium-emphasis"
          :href="item.href"
        >{{ item.label }}</a>
      </nav>

      <v-btn
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        icon
        variant="text"
        @click="toggleTheme"
      >
        <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
      </v-btn>

      <v-btn
        v-if="!mobile"
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
        v-if="!mobile"
        class="ml-2 font-mono"
        color="primaryContainer"
        href="#contact"
      >
        Let's Connect
      </v-btn>

      <v-btn
        v-if="mobile"
        aria-label="Open menu"
        icon
        variant="text"
        @click="drawer = true"
      >
        <v-icon icon="mdi-menu" />
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="280"
  >
    <div class="d-flex justify-end pa-2">
      <v-btn aria-label="Close menu" icon variant="text" @click="drawer = false">
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>

    <v-list nav>
      <v-list-item
        v-for="item in mobileNavItems"
        :key="item.href"
        :href="item.href"
        :title="item.label"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify'
  import { useAppTheme } from '@/composables/useAppTheme'
  import { profile } from '@/data/profile'

  const { mobile } = useDisplay()
  const { isDark, toggleTheme } = useAppTheme()

  const drawer = ref(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const mobileNavItems = [{ label: 'Home', href: '#' }, ...navItems]
</script>

<style scoped>
.app-header {
  background-color: rgba(var(--v-theme-surfaceContainerLowest), 0.8) !important;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(var(--v-theme-outlineVariant), 0.5);
}

.wordmark {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.nav-link {
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
