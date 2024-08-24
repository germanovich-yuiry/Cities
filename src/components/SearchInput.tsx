import { observer } from "mobx-react-lite";
import { useStore } from "../stores/CitiesStore";
import debounce from "../utils/debounce";

const SearchInput = observer(() => {
  const store = useStore();

  const handleChange = debounce((e) => {
    store.loadCities(e.target.value);
  }, 300);

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Введите запрос для поиска"
    />
  );
});

export default SearchInput;
