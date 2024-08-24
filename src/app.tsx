import React from "react";

import styled from "styled-components";
import SearchInput from "./components/SearchInput";
import CityTable from "./components/CityTable";

import { observer } from "mobx-react-lite";
import { useCities } from "./stores/CitiesStore";

const Container = styled.div`
  min-width: 360px;
  max-width: 1980px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 32px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: "Regular";
`;

const App: React.FC = observer(() => {
  const cities = useCities();
  return (
    <Container>
      <SearchInput />
      <CityTable cities={cities} />
    </Container>
  );
});

export default App;
