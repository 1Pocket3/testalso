import { Commit } from 'vuex'

export const ADD_TO_CART = 'ADD_TO_CART'

export default {
  [ADD_TO_CART]: ({ commit: Commit }, item: object) => {
    commit('SET_CART', item)
  }
}
