import { StoreState, MenuItem } from "@/models/index";

export const SET_CART = "SET_CART";
export const CLEAR_CART = "CLEAR_CART";
export const TOGGLE_AUTH_MODAL = "TOGGLE_AUTH_MODAL";
export const TOGGLE_CART_MODAL = "TOGGLE_CART_MODAL";
export const CHANGE_CART_ITEM_QUANTITY = "CHANGE_CART_ITEM_QUANTITY";

export default {
  [SET_CART]: (state: StoreState, item: MenuItem): void => {
    state.cart.push(item);
  },

  [CLEAR_CART]: (state: StoreState): void => {
    state.cart = [];
  },

  [TOGGLE_AUTH_MODAL]: (state: StoreState, payload: boolean): void => {
    state.showAuthModal = payload;
  },

  [TOGGLE_CART_MODAL]: (state: StoreState, payload: boolean): void => {
    state.showCartModal = payload;
  },

  [CHANGE_CART_ITEM_QUANTITY]: (
    state: StoreState,
    { index, quantity }: { index: number; quantity: number }
  ): void => {
    state.cart[index].quantity = quantity;
  },
};
