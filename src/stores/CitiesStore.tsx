import { makeAutoObservable } from "mobx";

import { City } from "../types/CityDTO";

import cities from "../mockData";

class CitiesStore {
  cities: City[] = [];

  errorMessage = "";
  isError = false;
  loading = false;
  idle = true;
  apiKey = "";

  constructor() {
    makeAutoObservable(this);
  }

  setApiKey(key: string) {
    this.apiKey = key;
    console.log(key);
  }

  async loadCities(query: string) {
    try {
      this.loading = true;
      this.isError = false;
      this.errorMessage = "";

      // let response = await axios.get(
      //   `http://api.vk.com/method/database.getCities`,
      //   {
      //     params: {
      //       access_token: this.apiKey,
      //       v: "5.199",
      //       q: query,
      //     },
      //   }
      // );

      this.cities = cities.response.items;
      console.log(this.cities);
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
