import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "../../Hooks/useLogout";
function Navbar() {

  const [open, setOpen] = useState(false);
  const { logout  , loading} = useLogout();

  const user = useSelector(state => state.users.user)


  const logoutHandler = async () => {
    await logout();
  }
  

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/copylogo.png" alt="" />
          <span>AgroVision</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/wiki">AgroWiki</Link>
        <Link to="">Loans</Link>
        <Link to="/contact">Contact Us</Link>
        
        <div id="google_translate_element">

        </div>
        
          
      </div>
      <div className="right">
        {user ? (<div className="user">
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>Sehaj Makkar</span>
          <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>

          </Link>
          <button className="profile" onClick={logoutHandler}>
            <span>LogOut</span></button>
        </div>) :
          (
            <>
              {/* <a href="" className="farmer-signup">Farmer?</a>
              <a href="" className="harvester-signup">Harvester?</a> */}
              <Link to="/login" className="farmer-signup">Login</Link>
              <Link to="/register" className="harvester-signup">Signup</Link>
            </>
          )
        }
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>

          <Link to="/">Home</Link>
          <Link to="/wiki">AgroWiki</Link>
          <Link to="">Loan</Link>
          <a href="">Login</a>
          <a href="">Sign UP?</a>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;