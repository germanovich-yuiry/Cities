import { makeAutoObservable } from "mobx";
import axios from "axios";
import { City } from "../types/City";

class CityStore {
  apiToken = "";
  searchQuery = "";
  cities: City[] = [];
  error = "";
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  async loadCities() {
    try {
      this.loading = true;
      this.error = "";

      const response = await axios.get(
        `https://api.vk.com/method/database.getCities`,
        {
          params: {
            access_token: this.apiToken,
            v: "5.131",
            query: this.searchQuery,
          },
        }
      );

      this.cities = response.data.response.items;
    } catch (error) {
      this.error = "Ошибка при загрузке данных: " + error.message;
    } finally {
      this.loading = false;
    }
  }
}

const store = new CityStore();
export const useStore = () => store;
