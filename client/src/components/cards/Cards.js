import React, { useContext } from "react";
import "./Cards.css";
import Card from "./Card/Card";
import CardLeader from "../CardLeader/CardLeader";
import { UilUsdSquare } from "@iconscout/react-unicons";
import { LeaderContext } from "../../pages/Admin2";

const Cards = () => {
  const leaderboard = useContext(LeaderContext);
  const daniel = leaderboard.leaderboard[2].user;

  return (
    <div className="Cards">
      <div className="parentContainer">
        <Card
          title={daniel}
          color={{
            backGround: "var(--picton-blue)",
            boxShadow: "0px 10px 20px 0px #a4c4f5",
          }}
          barValue={6}
          maxBarValue={7}
          value="25,970"
          png={UilUsdSquare}
          series={[{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }]}
        />
      </div>
      <div className="parentContainer">
        <CardLeader
          title={"Sales"}
          color={{
            backGround: "var(--night)",
            boxShadow: "0px 10px 20px 0px #6b6d70",
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
