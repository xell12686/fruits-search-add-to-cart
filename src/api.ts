import { Fruit } from "./types";

export async function fetchFruits(): Promise<Fruit[]> {
  const response = await fetch("https://fruityvice.com/api/fruit/all", { mode: 'no-cors' });
  const data = await response.json();
  return data.map((item: any) => ({
    name: item.name,
    id: item.id,
    family: item.family,
    order: item.order,
    genus: item.genus,
  }));
}
