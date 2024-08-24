import React from "react";

import styled from "styled-components";
import SearchInput from "./components/SearchInput";
import CityTable from "./components/CityTable";

import { observer } from "mobx-react-lite";
import { useCities } from "./stores/CitiesStore";

const Container = styled.div`
  min-width: 360px;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 36px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
