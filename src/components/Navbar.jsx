import React from "react";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container">
        <a className="navbar-brand me-auto text-white" href="#">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                หน้าแรก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                คำสั่งซื้อ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                ข้อมูลสมาชิก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                ตู้เซฟของฉัน
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
