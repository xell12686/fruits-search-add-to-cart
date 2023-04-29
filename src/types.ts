export interface Fruit {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  quantity?: number;
  [key: string]: any;
}

