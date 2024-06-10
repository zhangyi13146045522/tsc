"use client"

import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function OrderPage() {
  const [dataList, setDataList] = useState([]);

  return (
    <div style={{ border: '1px solid red' }}>
      <DataTable value={dataList}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}
