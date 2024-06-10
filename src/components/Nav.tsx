"use client";

import "./Nav.scss";

export const Nav = () => {
  return (
    <div className="layout-navbar">
      <div className="layout-nav-list">
        <div className="layout-nav-item">
          <i className="pi pi-home"></i>
          <span>Dashboard</span>
        </div>

        <div className="layout-nav-item active">
          <i className="pi pi-credit-card"></i>
          <span>Order</span>
        </div>

        <div className="layout-nav-item">
          <i className="pi pi-database"></i>
          <span>Execution</span>
        </div>

        <div className="layout-nav-item">
          <i className="pi pi-money-bill"></i>
          <span>Allocation</span>
        </div>

        <div className="layout-nav-item">
          <i className="pi pi-dollar"></i>
          <span>Financial Account Management</span>
        </div>

        <div className="layout-nav-item">
          <i className="pi pi-user"></i>
          <span>User Management</span>
        </div>
      </div>
    </div>
  );
};
