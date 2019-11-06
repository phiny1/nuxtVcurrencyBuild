import Vue from 'vue'
import Vuetify, { VTextField, VIcon, VBtn } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { VTextField, VIcon, VBtn }
})

const opts = {}
export default new Vuetify(opts)
