import './ask.css'
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { useState } from 'react';

function Ask() {

  const [promp , setPromp]= useState("");

  const [data , setData]= useState("");
  const [image , setImage]= useState(null);
  const sendHandler = async () => {
    console.log(promp);
    const formData = new FormData();

    formData.append('promp', promp);

    const response =  await fetch('http://localhost:5000/api/ai/', {
      method: 'POST',
      
      credentials: 'include',
      body: formData
    }).then(response => response.json())

    setData(response.data);
    console.log(response.data)



  }
  
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
          <div className='box'>

            <p className='promp'>{data}</p>
          </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt here.." onChange={(e)=>setPromp(e.target.value)} value={promp}/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <input type='file'/> <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={sendHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ask