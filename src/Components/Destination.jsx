import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Styles/Destination.css";

export default function Destination() {
  return (
    <div className="grid-container-dest page-pad">
      <div className="title">
        <h4 className="list-order">01</h4>
        <h4 className="barlow-font">Pick your destination</h4>
      </div>

      <div className="destination-nav">
        <ul className="destiny-links">
          <NavLink
            to={"/space-website/destination/" + "Moon"}
            key="moon"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li>
              <p>MOON</p>
            </li>
          </NavLink>
          <NavLink
            to={"/space-website/destination/" + "Mars"}
            key="mars"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li><p>MARS</p></li>
          </NavLink>
          <NavLink
            to={"/space-website/destination/" + "Europa"}
            key="europa"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li>
              <p>EUROPA</p>
            </li>
          </NavLink>
          <NavLink
            to={"/space-website/destination/" + "Titan"}
            key="titan"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li>
              <p>TITAN</p>
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="destination-info">
        <Outlet />
      </div>
    </div>
  );
}
