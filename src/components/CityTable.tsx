import { FC } from "preact/compat";

import styled from "styled-components";

import { observer } from "mobx-react-lite";

import { Table } from "antd";
import { City } from "../types/CityDTO";

const StyledTable = styled(Table)`
  width: 100%;
`;

const CityTable: FC<{ cities: City[] }> = ({ cities }) => {
  const columns = [
    { title: "Имя", dataIndex: "title" },
    {
      title: "Регион",
      dataIndex: "region",
    },
    {
      title: "Область",
      dataIndex: "area",
    },
  ];

  return (
    <StyledTable
      dataSource={cities}
      columns={columns}
      rowKey="id"
      pagination={false}
    />
  );
};

export default observer(CityTable);
