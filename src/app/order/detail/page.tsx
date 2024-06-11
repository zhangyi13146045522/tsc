"use client";

import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";

const OrderDetailPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = [
    { label: "Executions List", icon: "pi pi-database" },
    { label: "Allocations List", icon: "pi pi-money-bill" },
  ];

  return (
    <div className="main-card-light">
      <div className="main-title-contaienr no-border">
        <p className="main-title">
          <span>ORDER DETAIL</span>
          <span className="main-title-desc">12312312312312312312313</span>
        </p>
        <div>
          <Button label="Delete" severity="secondary" rounded />
          <Button label="Update" severity="help" rounded />
        </div>
      </div>

      <div className="main-card-dark mt30">
        <p className="main-subtitle">Order Info</p>
      </div>

      <div className="main-card-dark">
        <p className="main-subtitle">Order Fulfillment Details</p>
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
      </div>
    </div>
  );
};

export default OrderDetailPage;
