<template>
  <v-app>
    <a class="skip-link" href="#main-content">Skip to content</a>

    <AppHeader />

    <v-main id="main-content" class="grid-bg" tabindex="-1">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import AppFooter from '@/components/layout/AppFooter.vue'
  import AppHeader from '@/components/layout/AppHeader.vue'
  import { useAppTheme } from '@/composables/useAppTheme'

  const { applyStoredPreference } = useAppTheme()

  onMounted(() => {
    applyStoredPreference()
  })
</script>

<style scoped>
/* Keyboard/screen-reader users otherwise have to tab through the entire
   header nav before reaching the page content on every single page load. */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 9999;
  padding: 12px 20px;
  background-color: rgb(var(--v-theme-primaryContainer));
  color: rgb(var(--v-theme-onPrimaryContainer));
  font-family: var(--font-mono);
  font-size: 0.875rem;
  border-radius: 4px;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 16px;
}
</style>
