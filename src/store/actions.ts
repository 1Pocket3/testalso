import { SET_CART } from "./mutations";
import { MenuItem } from "@/models";

import type { Commit } from "vuex";

export const ADD_TO_CART = "ADD_TO_CART";

export default {
  [ADD_TO_CART]: ({ commit }: { commit: Commit }, item: MenuItem): void => {
    commit(SET_CART, item);
  },
};
