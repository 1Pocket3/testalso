export interface Partner {
  name: string;
  timeOfDelivery: number;
  stars: number;
  price: number;
  kitchen: string;
  image: string;
  products: string;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

export interface dbData {
  db: DB;
}

export interface DB {
  partners: Partner[];
}

export interface Title {
  name: string;
  stars: string;
  price: number;
  kitchen: string;
}

export interface StoreState {
  dbData: dbData;
  showAuthModal: boolean;
  showCartModal: boolean;
  cart: MenuItem[];
}
