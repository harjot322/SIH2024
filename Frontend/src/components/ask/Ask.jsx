import './ask.css'
import { useContext } from "react";
import { assets } from "../../assets/assets";

function Ask() {
  return (
    <div className="main">
      <div className="nav">
        <p>FarmWiki</p>
      </div>
      <div className="main-container">
        <div className="greet">
            <p>Hello, Farmers</p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Bhojpuri Gaane</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Gareebi Kaise Mitaaye</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Fasal Kharab Hogyi Kya kare?</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Biwi ko khet mein pakda kya kare?</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt here.." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ask