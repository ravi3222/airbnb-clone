import React from "react";
import "./styles.scss";

// Ant Design

import { Avatar } from "antd";
import {
  GlobalOutlined,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
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
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </div>
  );
}

export default Header;
