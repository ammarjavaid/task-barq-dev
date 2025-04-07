import React from "react";
import { Table } from "antd";

const App = () => {
  const dataSource = [
    {
      key: "1",
      logo: "https://1000logos.net/wp-content/uploads/2023/01/Daraz-logo.png",
      name: "Daraz",
    },
    {
      key: "2",
      logo: "https://1000logos.net/wp-content/uploads/2021/02/FoodPanda-logo.png",
      name: "Foodpanda",
    },
    {
      key: "3",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png",
      name: "Amazon",
    },
  ];

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (img) => (
        <img
          src={img}
          alt="img"
          style={{ width: "50px", cursor: "pointer" }}
          onClick={() => console.log("Image clicked")}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  // Dummy nested table data and columns
  const expandedRowRender = (record) => {
    const innerColumns = [
      {
        title: "Product",
        dataIndex: "product",
        key: "product",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
    ];

    const innerData = [
      {
        key: "1",
        product: `${record.name} Item 1`,
        price: "$10",
      },
      {
        key: "2",
        product: `${record.name} Item 2`,
        price: "$20",
      },
    ];

    return (
      <Table columns={innerColumns} dataSource={innerData} pagination={false} />
    );
  };

  return (
    <div style={{ padding: 24 }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => true,
        }}
      />
    </div>
  );
};

export default App;
