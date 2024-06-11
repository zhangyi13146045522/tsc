"use client";

import Table from "@/components/Table";
import TableAction from "@/components/TableAction";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export default function OrderPage() {
  const formatOrderStatus = (rowData: any) => {
    let severity: any = "";
    switch (rowData?.orderStatus) {
      case "new":
        severity = "new";
        break;
      case "partiallyFilled":
        severity = "warning";
        break;
      case "filled":
        severity = "success";
        break;
    }
    return <Tag severity={severity} value={rowData?.orderStatus}></Tag>;
  };

  return (
    <div className="main-card-light">
      <div className="main-title-contaienr mt30">
        <p className="main-title">ORDER LIST</p>
        <Button label="Create Order" severity="help" rounded />
      </div>

      <div className="search-form-container mt30">
        <InputText value={undefined} placeholder="Please enter order ID" />
        <Calendar
          value={null}
          placeholder="Settle Date Range"
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection
          showButtonBar
        />
        <Dropdown
          value={[]}
          options={[]}
          optionLabel="name"
          placeholder="Order Status"
        />
        <Dropdown
          value={[]}
          options={[]}
          optionLabel="name"
          placeholder="Instrument Name"
        />
        <Dropdown
          value={[]}
          options={[]}
          optionLabel="name"
          placeholder="Side"
        />
      </div>

      <Table dataKey={"orderId"}>
        <Column field="orderId" header="Order ID" sortable></Column>
        <Column header="Order Status" body={formatOrderStatus}></Column>
        <Column field="orderQuantity" header="Order Quantity"></Column>
        <Column field="side" header="Side"></Column>
        <Column field="price" header="Price" sortable></Column>
        <Column field="instrumentName" header="Instrument Name"></Column>
        <Column field="settleDate" header="Settle Date" sortable></Column>
        <Column
          field="systemCreationTime"
          header="System Creation Time"
          sortable
        ></Column>
        <Column
          header="Action"
          body={
            <TableAction>
              <div className="action-overlay-item">Delete</div>
              <div className="action-overlay-item">Update</div>
              <div className="action-overlay-item">Order Matching</div>
              <div className="action-overlay-item">View Detail</div>
            </TableAction>
          }
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </Table>
    </div>
  );
}
