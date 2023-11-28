import { Plant, PlantLite } from "@/types/plants"

const BASE_URL = "https://house-plants2.p.rapidapi.com/"

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e4c13ae2d4msh66a6ef0110b1ee5p1f960bjsnc4c25f4c1949',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
    }
};

export default class PlantsApi {
    public static async getAll(): Promise<PlantLite[]> {
        const response = await fetch(`${BASE_URL}all-lite`, options);
        const plants = await response.json();
        return plants;
    }
    public static async getById(id: string): Promise<Plant> {
        const response = await fetch(`${BASE_URL}id/${id}`, options);
        const plant = await response.json();
        return plant;
    }
}