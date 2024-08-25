import { FC } from "preact/compat";

import styled from "styled-components";

import { Table } from "antd";
import { City } from "../types/CityDTO";

import { observer } from "mobx-react-lite";

const StyledTable = styled(Table)`
  width: 100%;

  .highlight {
    background-color: yellow;
  }
`;

interface CityTableProps {
  cities: City[];
  searchText: string;
}

const CityTable: FC<CityTableProps> = ({ cities, searchText = "Москва" }) => {
  const highlightText = (text: string) => {
    if (!text || !searchText) return text;

    const parts = text.split(new RegExp(`(${searchText})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "title",
      render: highlightText,
    },
    {
      title: "Регион",
      dataIndex: "region",
      render: highlightText,
    },
    {
      title: "Область",
      dataIndex: "area",
      render: highlightText,
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
