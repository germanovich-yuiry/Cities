import styled from "styled-components";

import { observer } from "mobx-react-lite";
import { useStore } from "../stores/CitiesStore";
import debounce from "../utils/debounce";

const SearchInput = observer(() => {
  const store = useStore();

  const handleChange = debounce((e) => {
    store.loadCities(e.target.value);
  }, 300);

  const StyledInput = styled.input`
    width: 100%;
    height: 36px;
    text-indent: 16px;
    border-radius: 8px;
    border: 1px solid lightblue;
    margin-bottom: 20px;

    &:: placeholder {
      color: gray;
    }
  `;

  return (
    <StyledInput
      type="text"
      onChange={handleChange}
      placeholder="Введите запрос для поиска"
    />
  );
});

export default SearchInput;
