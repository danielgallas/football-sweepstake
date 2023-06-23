import React, { useEffect } from "react";
// import { UpdatesData } from "../../data/Data";
import "./Updates.css";

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-width="220"
          data-height="500"
          data-theme="dark"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/Gremio"
        >
          Tweets by Gremio
        </a>
      </div>
    </section>
  );
};

const Updates = () => {
  return (
    <div className="Updates">
      <TwitterContainer />

      {/* {UpdatesData.map((update, id) => {
        return (
          <div key={id} className="update">
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Updates;
