import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import watch from '../../assets/dashboard/watch.png'
interface DataType {
  key: string;
  name: string;
  location: string;
  date: string;
  piece: string;
  amount: string;
  status: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <Space size="middle">
        <img src={watch} alt="" style={{ width: "40px", height: "40px" }} />
        <a>{record.name}</a>
      </Space>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Date - Time',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Piece',
    dataIndex: 'piece',
    key: 'piece',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'Status',
    dataIndex: 'Status',
    render: (_, { status }) => (
      <>
        <Tag color={statusColor(status)} key={"tag"}>
          {status}
        </Tag>
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    location: "6096 Marjolaine Landing",
    date: "2021-07-15 10:30",
    name: 'Apple Watch',
    piece: "423",
    amount: "$34,295",
    status: "Delivered",

  },
  {
    key: '2',
    name: 'Jim Green',
    location: "21583 Josiah Grove",
    date: "2021-07-15 11:00",
    piece: "46",
    amount: "$49.99",
    status: "Pending",

  },
  {
    key: '3',
    name: 'Joe Black',
    location: "48544 Lily Drive",
    date: "2021-07-15 11:30",
    piece: "98",
    amount: "$19.99",
    status: "Canceled",

  },
];

function statusColor(status: string) {
  switch (status) {
    case 'Delivered':
      return "#00B69B";
    case 'Pending':
      return "#FFC107";
    case 'Canceled':
      return "#F44336";
    default:
      return "#000000";
  }
}
const DealsTable: React.FC = () => <Table columns={columns} dataSource={data}
  scroll={{
    x: true,
    y: 300, 
  }} />;

export default DealsTable;