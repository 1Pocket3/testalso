import { createStore } from 'vuex'
import db from '@/db/db.json'

export default createStore({
  state: {
    dbData: db,
    showAuthModal: false,
    showCartModal: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
