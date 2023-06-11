import React from "react";
import "./Cards.css";
import Card from "./Card/Card";
import { UilUsdSquare } from "@iconscout/react-unicons";

const Cards = () => {
  return (
    <div className="Cards">
      <div className="parentContainer">
        <Card
          title={"Sales"}
          color={{
            backGround: "var(--picton-blue)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
          }}
          barValue={70}
          value="25,970"
          png={UilUsdSquare}
          series={[{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }]}
        />
      </div>
      <div className="parentContainer">
        <Card
          title={"Sales"}
          color={{
            backGround: "var(--picton-blue)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
          }}
          barValue={70}
          value="25,970"
          png={UilUsdSquare}
          series={[{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }]}
        />
      </div>
    </div>
  );
};

export default Cards;
