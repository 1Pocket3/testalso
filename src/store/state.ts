import db from "@/db/db.json";

import type { StoreState } from "@/models";

const state: StoreState = {
  dbData: db,
  showAuthModal: false,
  showCartModal: false,
  cart: [],
};

export default state;
