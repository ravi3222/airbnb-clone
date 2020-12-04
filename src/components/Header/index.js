import React from "react";
import "./styles.scss";

// Ant Design
import {
  GlobalOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
      />

      <div className="header__center">
        <input type="text" />
        <SearchOutlined />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <GlobalOutlined />
        <DownOutlined />
      </div>
    </div>
  );
}

export default Header;
