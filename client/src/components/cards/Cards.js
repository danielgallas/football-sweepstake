import React, { useContext } from "react";
import "./Cards.css";
import Card from "./Card/Card";
import CardLeader from "../CardLeader/CardLeader";
import { UilUsdSquare } from "@iconscout/react-unicons";
import { LeaderContext } from "../../pages/Admin2";
import { useParams } from "react-router-dom";

const Cards = () => {
  const { orderedLeaderboard } = useContext(LeaderContext);
  const { username } = useParams();
  const currentUser = orderedLeaderboard.find((item) => item.user === username);

  let maxBar = 7;

  return (
    <div className="Cards">
      <div className="parentContainer">
        <Card
          title={username}
          color={{
            backGround: "var(--picton-blue)",
            boxShadow: "0px 10px 20px 0px #a4c4f5",
          }}
          barValue={currentUser.position}
          maxBarValue={maxBar}
          value="25,970"
          png={UilUsdSquare}
          series={[{ name: "Sales", data: [31, 40, 28, 51, 42, 109, 100] }]}
        />
      </div>
      <div className="parentContainer">
        <CardLeader
          title={"Leader Board"}
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
