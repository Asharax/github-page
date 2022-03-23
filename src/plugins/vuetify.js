// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import { mdi } from 'vuetify/lib/iconsets/mdi'

export default createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        fa,
        mdi,
      }
    },
  }
)