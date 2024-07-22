import React, { useState } from "react";
import { Table, Tag } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { ReactComponent as StaredIcon } from "../../../assets/svg-icon/mail/star.svg";
import { ReactComponent as Delete } from "../../../assets/svg-icon/common/delete.svg";
import { ReactComponent as Info } from "../../../assets/svg-icon/common/info.svg";
import { ReactComponent as Download } from "../../../assets/svg-icon/common/download.svg";
import { IoIosSearch } from "react-icons/io";
import InputComponent from "../../element-compnent/input-component";
import "../../../styles/common-styles/common-style.scss";
type TableRowSelection<T> = TableProps<T>["rowSelection"];
function statusColor(status: string) {
  console.log(status);
  switch (status) {
    case "Primary":
      return "#00B69B";
    case "Friends":
      return "#D456FD";
    case "Work":
      return "#FD9A56";
    case "Social":
      return "#5A8CFF";
  }
}
interface DataType {
  key: React.Key;
  name: string;
  isStared: boolean;
  status: string;
  discription: string;
  time: string;
}
let alternateStatus = ["Primary", "Work", "Friends", "Social"];

const columns: TableColumnsType<DataType> = [
  {
    render: (_, { isStared }) => (
      <>
        <StaredIcon />
      </>
    ),
  },
  {
    render: (_, { status, discription }) => {
      return (
        <>
          <div className="status-description">
            <Tag
              color={statusColor(status)}
              key={"tag"}
              style={{ width: "70px", textAlign: "center" }}
            >
              {status}
            </Tag>
            <div>{discription}</div>
          </div>
        </>
      );
    },
  },
  {
    render: (_, { time }) => (
      <>
        <p>{time}</p>
      </>
    ),
  },
];

const data: DataType[] = [];

for (let i = 0; i < 46; i++) {
  const j = Math.floor(Math.random() * 4);
  data.push({
    key: `${i + 2}`,
    name: "John Doe",
    isStared: false,
    status: alternateStatus[j],
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, ipsum sed convallis porttitor.",
    time: "10:30 AM",
  });
}

const InboxComponent: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 === 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          const newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 !== 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: 10 }}>
      <div style={{ height: "7%", width: "100%", padding: 10 }}>
        <div className="header-main-flex">
          <div className="parent-search">
            <div className="search-input-icon">
              <IoIosSearch />
            </div>
            <InputComponent
              height={"35px"}
              width={"300px"}
              placeHolder="Search mail"
              padding={"0px 10px 0px 30px"}
              border={"1px solid #D5D5D5"}
              borderRadius={"25px"}
              backgroundColor={"#F5F6FA"}
              color={""}
              className=""
              type={undefined}
              getUser={() => {}}
            />
          </div>
          <div className="header-icon-flex">
            <div className="header-icon-container" style={{borderRight: "1px solid #D5D5D5"}}>
              <Download  />
            </div>
            <div className="header-icon-container" style={{borderRight: "1px solid #D5D5D5"}}>
              <Info  />
            </div>
            <div className="header-icon-container"> 
              <Delete  />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-scroll-bar"
      >
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          showHeader={false}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: data.length,
            onChange: (page, pageSize) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            },
          }}
          onChange={handleTableChange}
          //   scroll={{ y: "calc(100% - 56px)" }} // Adjust height based on pagination height
        />
      </div>
    </div>
  );
};

export default InboxComponent;
