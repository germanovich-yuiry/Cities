import { FC } from "preact/compat";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Table } from "antd";
import { City } from "../types/CityDTO";

const StyledTable = styled(Table)`
  width: 100%;

  .highlight {
    background-color: yellow; // Цвет подсветки
  }
`;

interface CityTableProps {
  cities: City[];
  searchText: string; // Пропс для строки поиска
}

const CityTable: FC<CityTableProps> = ({ cities, searchText = "Москва" }) => {
  const highlightText = (text: string) => {
    if (!text || !searchText) return text; // Проверяем, что 'text' не пустой и строка поиска тоже не пустая

    const parts = text.split(new RegExp(`(${searchText})`, "gi")); // Разделяем текст на части по строке поиска

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span> // Подсветка совпавшей части
      ) : (
        part // Обычный текст
      )
    );
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "title",
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Имя'
    },
    {
      title: "Регион",
      dataIndex: "region",
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Регион'
    },
    {
      title: "Область",
      dataIndex: "area",
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Область'
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
