import { createStore, type Store } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

import { StoreState } from "@/models";

const store: Store<StoreState> = createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store;
