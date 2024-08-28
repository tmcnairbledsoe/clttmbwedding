import React from "react";
import "./Location.css";
import Map from "../Map/Map";

export default function Location( {user} ){

  function displayReheasal(){
    if(user.isRehearsal){
      return(
          <div><a href="https://goo.gl/maps/9N8goakAaMANqEst5" target="_blank" rel="noreferrer">Wedding Rehearsal: Larkin's Upstairs</a></div>
      );
    }
  }

  return(
      <div className="location section" id="location">
        <h2>Locations</h2>
        <hr />
        <ul className="image_grid">
          <li role="img" aria-label="4th pres" className="small" />
          <li role="img" aria-label="Falls Park" className="small" />
          <li role="img" aria-label="Downtown" className="small" />
        </ul>
        <p>
          The ceremony will be held at Fourth Presbyterian Church near downtown Greenville. The reception will be held at Zen, located downtown.
        </p>
        <p>
          We have marked a few important locations in the map below.
        </p>
        <Map user = {user} />
        <div id="directions">
          <div className="transportList">
            <h2>
              <i className="fas fa-car" />
              Event Locations
            </h2>
            <span className="detailedDirections">
                {displayReheasal()}
                <div><a href="https://goo.gl/maps/qTU2LPLx8UfUKipu9" target="_blank" rel="noreferrer">Wedding Ceremony: Fourth Presbyterian</a></div>
                <div><a href="https://goo.gl/maps/yp5W67Frvqf5DH2V9" target="_blank" rel="noreferrer">Wedding Reception: Zen</a></div>
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fas fa-bed" />
              Hotels
            </h2>
            <span className="detailedDirections">
              <h4>Use the links below to get a reduced rate before February 23rd (March 9th for Homewood)</h4>
              <div><a href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=GSPDTHX&groupCode=CHHBTW&arrivaldate=2022-04-08&departuredate=2022-04-10&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank" rel="noreferrer">Hampton Inn & Suites</a> </div>
              <div><a href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=GSPGDES&groupCode=CESBTW&arrivaldate=2022-04-08&departuredate=2022-04-10&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank" rel="noreferrer">Embassy Suites by Hilton</a> </div>
              <div><a href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=GSPSOHW&groupCode=CHWTOW&arrivaldate=2022-04-08&departuredate=2022-04-10&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank" rel="noreferrer">Homewood Suites by Hilton </a> </div>
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fa fa-map-marker " />
              Legend
            </h2>
            <span className="detailedDirections">
              <img src="/images/Mapicons/blue-dot.png" alt ="blue-dot"/> Event locations
              <br />
              <img src="/images/Mapicons/green-dot.png" alt ="green-dot"/> Greenville spots
              <br />
              <img src="/images/Mapicons/yellow-dot.png" alt ="yellow-dot"/> Hotels
              <br />
            </span>
          </div>
        </div>
      </div>
  );
}