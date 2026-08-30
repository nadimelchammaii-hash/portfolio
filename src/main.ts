/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Fonts — imported directly (rather than via a build-plugin) so it's
// obvious exactly which weights ship, matching the Stitch type scale:
// Space Grotesk for headings, Inter for body, JetBrains Mono for labels/code.
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
// Styles
import './styles/main.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
