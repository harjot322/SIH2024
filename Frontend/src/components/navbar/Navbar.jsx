import React, { useState } from "react";
import "./navbar.scss";
function Navbar(){

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/copylogo.png" alt="" />
          <span>AgroVision</span>
        </a>
        <a href="">Home</a>
        <a href="">AgroWiki</a>
        <a href="">Gareeb</a>
        <a href="">Contact</a>
      </div>
      <div className="right">
        <a href="" className="farmer-signup">Farmer?</a>
        <a href="" className="harvester-signup">Harvester?</a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="">Home</a>
        <a href="">AgroWiki</a>
        <a href="">Gareeb</a>
        <a href="">Contact</a>
        <a href="">Farmer?</a>
        <a href="">Harvester?</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;