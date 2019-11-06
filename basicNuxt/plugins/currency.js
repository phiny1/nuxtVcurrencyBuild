import Vue from 'vue'
import VueCurrencyInput from 'vue-currency-input'

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: 'BRL', locale:'pt-BR' }
}
Vue.use(VueCurrencyInput, pluginOptions)