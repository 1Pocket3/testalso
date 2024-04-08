export const CART = 'CART'
export const PARTNERS = 'PARTNERS'
export const DB = 'DB'

export default {
  [CART]: (state) => {
    return state.cart
  },
  [PARTNERS]: (state) => {
    return state.dbData.db.partners
  },
  [DB]: (state) => {
    return state.dbData.db
  }
}
