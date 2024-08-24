import { makeAutoObservable } from "mobx";
import axios from "axios";
import { City } from "../types/CityDTO";

class CitiesStore {
  cities: City[] = [];
  errorMessage = "";
  isError = false;
  loading = false;
  idle = true;

  constructor() {
    makeAutoObservable(this);
  }

  async loadCities(query: string) {
    try {
      this.loading = true;
      this.isError = false;
      this.errorMessage = "";

      const response = await axios.get(
        `https://api.vk.com/method/database.getCities`,
        {
          params: {
            access_token: "",
            v: "5.131",
            query: query,
          },
        }
      );

      this.cities = response.data.response.items;
    } catch (error) {
      this.errorMessage = "Ошибка при загрузке данных: " + error.message;
      this.isError = true;
    } finally {
      this.loading = false;
    }
  }
}

const store = new CitiesStore();
export const useCities = () => store.cities;
export const useStore = () => store;
