import { useEffect, useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import NavLinks from "./Components/NavLinks";
import { Icon } from '@iconify-icon/react';

function App() {
  
  const [menuStatus, setMenuStatus] = useState(false);
  
  const handleMenu = (e) => {
    e.preventDefault();
    setMenuStatus(!menuStatus);
  }

  return (
    <>
      <nav className="home-nav" >
        <div className="icon-home">
          <img src={logo} alt="" />
        </div>

        <div className="midbar"></div>

        <div className={menuStatus ? "links vertical" : "links links-container"}>
          <NavLinks getMenuStatus={menuStatus} />
        {
          menuStatus ? (
            <div className="close-menu">
              <button className="menu-btn-close" onClick={handleMenu} >
                <Icon icon="ic:baseline-close" className="menu-icon" />
              </button>
            </div>
          ) : (
            <div className="icon-menu">
              <button className="menu-btn" onClick={handleMenu} >
                <Icon icon="ic:outline-menu" className="menu-icon" />
              </button>
            </div>
          ) 
        }
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
