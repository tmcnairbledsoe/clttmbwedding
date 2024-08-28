import React, {useState, useEffect} from "react";
import "./Intro.css";

export default function Intro(){
    const [days, setDays] = useState(0);

    useEffect(() => {
        getTimeUntil();
    });

    function getTimeUntil(){
        const currentTime = new Date();
        const weddingTime = new Date("04/09/2022");
        const timeUntil = weddingTime - currentTime;
        const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
        setDays(days);
      };

    return(
        <section className="header" id="intro">
          <div id="tagline">
            <h1>Charlotte & McNair</h1>
            <h3>
              Wedding
            </h3>
            <h3>
              Greenville, SC
            </h3>
            <h3 className="daysUntil">{days} days</h3>
          </div>
        </section>
    );
}