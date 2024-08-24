import { observer } from "mobx-react-lite";
import { Table } from "antd";

import styled from "styled-components";

const CityTable = observer(({ cities }) => {
  const columns = [
    { title: "Имя", dataIndex: "name" },
    { title: "Регион", dataIndex: "region" },
  ];

  const StyledTable = styled(Table)`
    width: 100%;
  `;
  return (
    <StyledTable
      dataSource={cities}
      columns={columns}
      rowKey="id"
      pagination={false}
    />
  );
});

export default CityTable;
