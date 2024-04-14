import React, { useEffect, useState } from 'react';
import "./Styles/Crew.css";
import { NavLink } from 'react-router-dom';
import data from '../assets/data.json'

export default function Crew() {

  const dataCrew = data.crew;
  const [currentData, setCurrentData] = useState(null);

  const handleClick = (member) => {
    setCurrentData(dataCrew.find(({name}) => name === member))
    console.log(member);
  }

  useEffect(() => {
    setCurrentData(dataCrew.find(({name}) => name === "Douglas Hurley"))
  }, [dataCrew])
  

  return (
    <div className='grid-container-crew page-pad-crew'>
      <div className="title">
        <h5 className='order'>02</h5>
        <h5 className='ti'>MEET YOUR CREW</h5>
      </div>

      <div className="crew-info">
        <h4 className="role">{currentData && currentData.role}</h4>
        <h3 className="name">{currentData && currentData.name}</h3>
        <p className="bio">{currentData && currentData.bio}</p>
      </div>

      <div className="member-image">
        <img src={currentData && "/src/Components/" + currentData.images.webp} alt="" className="member" />
      </div>

      <nav className='navi-crew' >
        <NavLink
            onClick={() => handleClick("Douglas Hurley")}
            key="crew-01"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
          <span className='select-member'></span>
        </NavLink>
        <NavLink
            onClick={() => handleClick("Mark Shuttleworth")}
            key="crew-02"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
          <span className='select-member'></span>
        </NavLink>
        <NavLink
            onClick={() => handleClick("Victor Glover")}
            key="crew-03"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
          <span className='select-member'></span>
        </NavLink>
        <NavLink
            onClick={() => handleClick("Anousheh Ansari")}
            key="crew-04"
            className={({ isActive }) => {
              return isActive ? "active-sub" : "";
            }}
          >
          <span className='select-member'></span>
        </NavLink>
      </nav>
    </div>
  )
}
