// plugins/noty.js
import 'vuejs-noty/dist/vuejs-noty.css'
import Vue from 'vue'
import VueNoty from 'vuejs-noty'

export default ({app}, inject) => {
  inject('noty', Vue.use(VueNoty, {
    timeout: 3000,
    progressBar: false,
    layout: 'topRight',
    closeWith: ['click', 'button'],
  }).noty)
}
