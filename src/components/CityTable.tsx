import { FC } from "preact/compat";
import styled from "styled-components";
<<<<<<< HEAD

=======
import { observer } from "mobx-react-lite";
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
import { Table } from "antd";
import { City } from "../types/CityDTO";

import { observer } from "mobx-react-lite";

const StyledTable = styled(Table)`
  width: 100%;

  .highlight {
<<<<<<< HEAD
    background-color: yellow;
=======
    background-color: yellow; // Цвет подсветки
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
  }
`;

interface CityTableProps {
  cities: City[];
<<<<<<< HEAD
  searchText: string;
=======
  searchText: string; // Пропс для строки поиска
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
}

const CityTable: FC<CityTableProps> = ({ cities, searchText = "Москва" }) => {
  const highlightText = (text: string) => {
<<<<<<< HEAD
    if (!text || !searchText) return text;

    const parts = text.split(new RegExp(`(${searchText})`, "gi"));
=======
    if (!text || !searchText) return text; // Проверяем, что 'text' не пустой и строка поиска тоже не пустая

    const parts = text.split(new RegExp(`(${searchText})`, "gi")); // Разделяем текст на части по строке поиска
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
<<<<<<< HEAD
        </span>
      ) : (
        part
=======
        </span> // Подсветка совпавшей части
      ) : (
        part // Обычный текст
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
      )
    );
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "title",
<<<<<<< HEAD
      render: highlightText,
=======
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Имя'
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
    },
    {
      title: "Регион",
      dataIndex: "region",
<<<<<<< HEAD
      render: highlightText,
=======
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Регион'
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
    },
    {
      title: "Область",
      dataIndex: "area",
<<<<<<< HEAD
      render: highlightText,
=======
      render: (text: string) => highlightText(text), // Подсветка в колонке 'Область'
>>>>>>> 18eceffaa67b5a1af475293c1e4b1ed948f779f9
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
