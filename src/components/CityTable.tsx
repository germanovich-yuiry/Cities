import { observer } from "mobx-react-lite";
import { Table } from "antd";

const CityTable = observer(({ cities }) => {
  const columns = [
    { title: "Имя", dataIndex: "name" },
    { title: "Регион", dataIndex: "region" },
  ];

  return (
    <Table
      dataSource={cities}
      columns={columns}
      rowKey="id"
      pagination={false}
    />
  );
});

export default CityTable;
