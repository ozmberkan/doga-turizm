import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const AdminCampaign = () => {
  return (
    <div className="p-5 font-rubik flex flex-col gap-y-5 w-full">
      <h1 className="text-3xl">Bilet Alanı</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default AdminCampaign;
