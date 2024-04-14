import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Styles/Technology.css";
import data from "../assets/data.json";

export default function Technology() {
  const [currentData, setCurrentData] = useState(null);
  const dataObj = data.technology;

  const handleClick = (ex) => {
    setCurrentData(dataObj.find(({ name }) => name === ex));
    console.log(currentData);
  }

  useEffect(() => {
    setCurrentData(dataObj.find(({ name }) => name === "Launch vehicle"));
  }, [dataObj]);

  return (
    <div className="grid-container-tech page-pad">
      <div className="title">
        <h4 className="list-order">03</h4>
        <h4 className="barlow-font">Space Launch 101</h4>
      </div>

      <div className="tech-nav">
        <ul className="tech-links">
          <NavLink
            onClick={() => handleClick("Launch vehicle")}
            key="1"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li>
              <h4>1</h4>
            </li>
          </NavLink>
          <NavLink
            onClick={() => handleClick("Spaceport")}
            key="2"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
            >
            <li>
              <h4>2</h4>
            </li>
          </NavLink>
          <NavLink
            onClick={() => handleClick("Space capsule")}
            key="3"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
            <li>
              <h4>3</h4>
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="detail-tech">
        <div className="tech-sub-title">
          <p>THE TERMINOLOGY...</p>
        </div>
        <div className="tech-name">
          <h3>{currentData && currentData.name}</h3>
        </div>
        <div className="tech-info">
          <p>{currentData && currentData.description}</p>
        </div>
      </div>

      <div className="tech-image">
        <img
          src={currentData && "/src/Components/" + currentData.images.portrait}
          alt=""
        />
      </div>
    </div>
  );
}
