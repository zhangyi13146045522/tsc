"use client";

import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function OrderPage() {
  const [pageNum, setPageNum] = useState(1); //当前页码
  const [totalNum, setTotalNum] = useState(4); //总条数

  const [dataList, setDataList] = useState([
    { orderId: "001" },
    { orderId: "002" },
    { orderId: "003" },
    { orderId: "004" },
  ]);
  const onPageChange = () => {};

  return (
    <div>
      <div className="main-title-container">
        <p className="main-title">ORDER LIST</p>
        <Button label="Create Order" severity="help" rounded />
      </div>

      {/* 数据表格，之后抽象 */}
      <DataTable value={dataList}>
        <Column field="orderId" header="Order ID"></Column>
        <Column field="orderStatus" header="Order Status"></Column>
        <Column field="orderQuantity" header="Order Quantity"></Column>
        <Column field="side" header="Side"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="instrumentName" header="Instrument Name"></Column>
        <Column field="settleDate" header="Settle Date"></Column>
        <Column
          field="systemCreationTime"
          header="System Creation Time"
        ></Column>
        <Column header="Action"></Column>
      </DataTable>

      {totalNum > 0 ? (
        <div className="table-paginator-box">
          <Paginator
            // first={1}
            rows={2} // 每页展示几条
            totalRecords={4} // 总条数
            rowsPerPageOptions={[2, 10, 20, 50]}
            onPageChange={onPageChange}
          />
        </div>
      ) : null}
    </div>
  );
}
