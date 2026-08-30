/**
 * plugins/vuetify.ts
 *
 * Theme colors are lifted from the Stitch "Syntactic Precision" design system
 * (dark) or derived from its stated light-mode intent (light — Stitch only
 * generated a dark screen, so these values are our own, not a 1:1 export).
 *
 * Dark is the default theme (the design's primary, "more technical and
 * immersive" identity — the source design only ever specified a dark
 * screen). A visitor who explicitly toggles to light has that choice
 * persisted to localStorage and reapplied by useAppTheme's
 * applyStoredPreference(), called once on app mount.
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0b1326',
          surface: '#0b1326',
          // Custom M3-style "tonal" surface steps used for header/footer/card
          // backgrounds that need to read as distinct from the page background.
          surfaceContainerLowest: '#060e20',
          surfaceContainerLow: '#131b2e',
          surfaceContainer: '#171f33',
          surfaceContainerHigh: '#222a3d',
          surfaceContainerHighest: '#2d3449',
          onBackground: '#dae2fd',
          onSurface: '#dae2fd',
          onSurfaceVariant: '#c3c6d7',
          outline: '#8d90a0',
          outlineVariant: '#434655',
          // Two-tier primary: `primary` is the pale text/icon tone, while
          // `primaryContainer` is the solid cobalt used for filled buttons.
          primary: '#b4c5ff',
          onPrimary: '#002a78',
          primaryContainer: '#2563eb',
          onPrimaryContainer: '#eeefff',
          secondary: '#b7c8e1',
          onSecondary: '#213145',
          secondaryContainer: '#3a4a5f',
          onSecondaryContainer: '#a9bad3',
          tertiary: '#ffb596',
          onTertiary: '#581e00',
          tertiaryContainer: '#bc4800',
          onTertiaryContainer: '#ffede6',
          error: '#ffb4ab',
          onError: '#690005',
          errorContainer: '#93000a',
          onErrorContainer: '#ffdad6',
          info: '#60a5fa',
          success: '#34d399',
          warning: '#fbbf24',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          surfaceContainerLowest: '#ffffff',
          surfaceContainerLow: '#f8fafc',
          surfaceContainer: '#f1f5f9',
          surfaceContainerHigh: '#e2e8f0',
          surfaceContainerHighest: '#cbd5e1',
          onBackground: '#0b1326',
          onSurface: '#0b1326',
          onSurfaceVariant: '#475569',
          outline: '#94a3b8',
          outlineVariant: '#cbd5e1',
          // Cobalt is dark enough to serve as both the accent text color and
          // the button fill on a white background, unlike the dark theme's
          // two visually distinct tones.
          primary: '#1d4ed8',
          onPrimary: '#ffffff',
          primaryContainer: '#2563eb',
          onPrimaryContainer: '#ffffff',
          secondary: '#475569',
          onSecondary: '#ffffff',
          secondaryContainer: '#e2e8f0',
          onSecondaryContainer: '#334155',
          tertiary: '#c2410c',
          onTertiary: '#ffffff',
          tertiaryContainer: '#fb923c',
          onTertiaryContainer: '#431407',
          error: '#dc2626',
          onError: '#ffffff',
          errorContainer: '#fee2e2',
          onErrorContainer: '#7f1d1d',
          info: '#2563eb',
          success: '#059669',
          warning: '#d97706',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
