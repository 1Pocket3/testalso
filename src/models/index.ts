export interface Partner {
    id: number;
    name: string;
    timeOfDelivery: number;
    stars: number;
    price: number;
    kitchen: string;
    image: string;
    products: string;
    partner: object;
    description: string;
  }

export interface MenuItem {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity:number;
  }

export interface dbData {
    db: object
  }

export interface Title {
    name: string;
    stars: string;
    price: number;
    kitchen: string;
}
