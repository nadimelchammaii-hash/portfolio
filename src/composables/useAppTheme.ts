/**
 * useAppTheme.ts
 *
 * Thin wrapper around Vuetify's own theme system — no Pinia needed for a
 * single piece of cross-component state like this.
 *
 * Dark is the hardcoded default (see plugins/vuetify.ts). This composable
 * only adds what Vuetify doesn't do by itself: letting the visitor
 * explicitly switch to light via the nav toggle, and remembering that
 * choice across visits. applyStoredPreference() must be called once on app
 * mount (done in App.vue) — without it, a returning visitor's saved
 * preference is never reapplied and every load just shows the default.
 */
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const STORAGE_KEY = 'portfolio-theme'

export function useAppTheme () {
  const theme = useTheme()
  const isDark = computed(() => theme.global.current.value.dark)

  function applyStoredPreference () {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      theme.global.name.value = stored
    }
  }

  function toggleTheme () {
    const next = isDark.value ? 'light' : 'dark'
    theme.global.name.value = next
    localStorage.setItem(STORAGE_KEY, next)
  }

  return {
    isDark,
    toggleTheme,
    applyStoredPreference,
  }
}
