import React from "react";
import { NavLink } from "react-router-dom";
import crewBg from "./assets/crew/background-crew-desktop.jpg";
import homeBg from "./assets/home/background-home-desktop.jpg";
import technologyBg from "./assets/technology/background-technology-desktop.jpg";
import destinationBg from "./assets/destination/background-destination-desktop.jpg";

export default function NavLinks(props) {
  var r = document.querySelector(":root");
  // const bg = url(DestinationBg);
  // let rootElement = document.documentElement;
  // const [rootBg, setRootBg] = useState(null);

  const navDestination = () => {
    r.style.setProperty("--background-image", `url(${destinationBg})`);
  };
  const navCrew = () => {
    r.style.setProperty("--background-image", `url(${crewBg})`);
  };
  const navTechnology = () => {
    r.style.setProperty("--background-image", `url(${technologyBg})`);
  };
  const navHome = () => {
    r.style.setProperty("--background-image", `url(${homeBg})`);
  };
  return (
    <ol start="0" className={props.getMenuStatus ? "nav-links-vertical" : "nav-links"} >
      <NavLink
        to="/space-website/"
        onClick={navHome}
        className={({ isActive }) => {
          return isActive ? "active navlink" : "navlink";
        }}
        end
      >
        <li>
          <p>Home</p>
        </li>
      </NavLink>

      <NavLink
        to="/space-website/destination"
        onClick={navDestination}
        className={({ isActive }) => {
          return isActive ? "active navlink" : "navlink";
        }}
      >
        <li>
          <p>Destination</p>
        </li>
      </NavLink>

      <NavLink
        to="/space-website/Crew"
        onClick={navCrew}
        className={({ isActive }) => {
          return isActive ? "active navlink" : "navlink";
        }}
      >
        <li>
          <p>Crew</p>
        </li>
      </NavLink>

      <NavLink
        to="/space-website/technology"
        onClick={navTechnology}
        className={({ isActive }) => {
          return isActive ? "active navlink" : "navlink";
        }}
      >
        <li>
          <p>Technology</p>
        </li>
      </NavLink>
    </ol>
  );
}
