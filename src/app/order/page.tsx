"use client";

import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function OrderPage() {
  const [dataList, setDataList] = useState([]);
  const onPageChange = () => {};

  return (
    <div>
      <div className="main-title-container">
        <p className="main-title">ORDER LIST</p>
        <Button label="Create Order" severity="help" rounded />
      </div>
      <DataTable value={dataList}>
        <Column field="" header="Order ID"></Column>
        <Column field="" header="Order Status"></Column>
        <Column field="" header="Order Quantity"></Column>
        <Column field="" header="Side"></Column>
        <Column field="" header="Price"></Column>
        <Column field="" header="Instrument Name"></Column>
        <Column field="" header="Settle Date"></Column>
        <Column field="" header="System Creation Time"></Column>
        <Column field="" header="Action"></Column>
      </DataTable>
      <Paginator
        first={1}
        rows={10}
        totalRecords={0}
        rowsPerPageOptions={[10, 20, 50]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
