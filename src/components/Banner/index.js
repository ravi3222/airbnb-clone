import React, { useState } from "react";
// import { Button } from "antd";
import { Button } from "@material-ui/core";
import "./styles.scss";
import DatePicker from "../DatePicker";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          value="large"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination.</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button type="primary">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
