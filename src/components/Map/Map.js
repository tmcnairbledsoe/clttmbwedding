import React from "react";
import "./Map.css";

//Other locations: Paris mountain
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocations: [
        {
          name: "Fourth Presbyterian",
          title: "Fourth Presbyterian",
          position: { lat: 34.8487777, lng: -82.3934168 },
          description: "McNair and Charlotte's church. The wedding ceremony will be held here.",
          address: "703 E Washington St, Greenville, SC 29601",
          image: "/images/Mapimages/4thpres.jpg",
          icon: "/images/Mapicons/blue-dot.png"
        },
        {
          name: "Falls Park",
          title: "Falls Park",
          position: { lat: 34.8449748, lng: -82.4015955 },
          description: "Beautiful park in downtown Greenville. If you are staying a night here, you should definitely explore this area. This is where the proposal happened.",
          address: "",
          image: "/images/Mapimages/Falls-Park.jpg",
          icon: "/images/Mapicons/green-dot.png"
        },
        {
          name: "Zen",
          title: "Zen",
          position: { lat: 34.8437614, lng: -82.4081954},
          description: "The event space in which the reception will be held.",
          address: "924 South Main Street, Greenville, SC 29601",
          image: "/images/Mapimages/ZenLogo.png",
          icon: "/images/Mapicons/blue-dot.png"
        },
        {
          name: "Hampton Inn & Suites Greenville-Downtown-RiverPlace",
          title: "Hampton Inn & Suites Greenville-Downtown-RiverPlace",
          position: { lat: 34.8464862, lng: -82.4027433},
          description: "Hotel on the Reedy River and in the middle of downtown. Close to the Rehearsal Dinner and Embassy Suites.",
          address: "171 Riverplace, Greenville, SC 29601",
          image: "/images/Mapimages/HamptonInn.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
          name: "Embassy Suites by Hilton Greenville Downtown Riverplace",
          title: "Embassy Suites by Hilton Greenville Downtown Riverplace",
          position: { lat: 34.847504, lng: -82.4033131},
          description: "Hotel on the Reedy River and in the middle of downtown. Close to the Rehearsal Dinner and Hampton Inn and Suites.",
          address: "250 Riverplace, Greenville, SC 29601",
          image: "/images/Mapimages/EmbassySuites.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        },
        {
          name: "Homewood Suites by Hilton Greenville Downtown",
          title: "Homewood Suites by Hilton Greenville Downtown",
          position: { lat: 34.8432413, lng: -82.4091001},
          description: "Walking distance to the reception area, Zen.",
          address: "950 S Main St, Greenville, SC 29601",
          image: "/images/Mapimages/Homewood.jpg",
          icon: "/images/Mapicons/yellow-dot.png"
        }
      ]
    };
  }
  
  //lifecycle event to call the render map function
  componentDidMount() {
    if(this.props.user.isRehearsal){
      this.state.mapLocations.push(
        {
          name: "Larkin's on the River",
          title: "Larkin's on the River",
          position: { lat: 34.8468971, lng: -82.4014553},
          description: "The site of the rehearsal dinner.",
          address: "318 S Main St 3rd floor, Greenville, SC 29601",
          image: "/images/Mapimages/larkins.jpg",
          icon: "/images/Mapicons/blue-dot.png"
        });
    }
    this.loadMap();
  }
  //load the script
  loadMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLEAPIKEY + "&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 34.8487777, lng: -82.3934168 },
      zoom: 13
    });

    //initializing the info wondow
    const infowindow = new window.google.maps.InfoWindow();

    this.state.mapLocations.forEach(location => {
      //getting the content of the info window from within the loop
      const contentString = `<div class="container">
      <h2>${location.name}</h2>

      <p><img src="${location.image}" />${location.description}</p>
      <br /><em><a href="https://maps.google.com/?q=${location.address}" target="_blank" rel="noreferrer">${location.address}</a></em></p>
      `;

      const marker = new window.google.maps.Marker({
        position: { lat: location.position.lat, lng: location.position.lng },
        map: map,
        title: location.title,
        icon: location.icon
      });

      marker.addListener("click", function() {
        infowindow.setContent(contentString);
        //linking the marker and the info window with a click event
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

//Creating the script to access Google Maps API
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
