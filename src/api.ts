import { Fruit } from "./types";
import fallbackData from "./fallback-data.json";

export async function fetchFruits(): Promise<Fruit[]> {
  try {
    // const response = await fetch("/api/fruit/all");
    const response = await fetch("https://fruityvice.com/api/fruit/all");
    const text = await response.text();
    const data = text ? JSON.parse(text) : [];
    return data.map((item: any) => ({
      name: item.name,
      id: item.id,
      family: item.family,
      order: item.order,
      genus: item.genus,
    }));
  } catch (error) {
    console.log("Error fetching fruits:", error);
    return fallbackData;
  }
}


