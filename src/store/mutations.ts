export const SET_CART = 'SET_CART'
export const CLEAR_CART = 'CLEAR_CART'

export default {
    [SET_CART]: (state, item: object) => {
        state.cart.push(item)
      },
      [CLEAR_CART]: (state) => {
        state.cart = []
      }
}