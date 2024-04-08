import { StoreState, MenuItem, Partner, DB as Database } from "@/models";

export const CART = "CART";
export const PARTNERS = "PARTNERS";
export const DB = "DB";
export const IS_AUTH_MODAL_VISIBLE = "IS_AUTH_MODAL_VISIBLE";
export const IS_CART_MODAL_VISIBLE = "IS_CART_MODAL_VISIBLE";

export default {
  [CART]: (state: StoreState): MenuItem[] => state.cart,

  [PARTNERS]: (state: StoreState): Partner[] => state.dbData.db.partners,

  [DB]: (state: StoreState): Database => state.dbData.db,

  [IS_AUTH_MODAL_VISIBLE]: (state: StoreState): boolean => state.showAuthModal,

  [IS_CART_MODAL_VISIBLE]: (state: StoreState): boolean => state.showCartModal,
};
