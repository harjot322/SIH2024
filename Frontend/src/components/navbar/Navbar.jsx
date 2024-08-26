import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar(){

  const [open, setOpen] = useState(false);

  const user = true; // changing the signup to profile in profile page.

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
        {user ? (<div className="user">
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>Sehaj Makkar</span>
          <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>

          </Link>
        </div>) : 
        (
        <>
        <a href="" className="farmer-signup">Farmer?</a>
        <a href="" className="harvester-signup">Harvester?</a>
        </>
        ) 
        }
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