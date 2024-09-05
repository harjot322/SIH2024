import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { assets } from "../../assets/assets";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

function SinglePage() {
  const post = useLoaderData().post;
  console.log(post);
  
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          {/* <Slider images={post.image} /> */}
          <img src={`http://localhost:5000/uploads/${post.image}`} alt="" width={800} height={500} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src={assets.message_icon} alt="" />
                  <span>{post.description}</span>
                </div>
                <div className="price">₹ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{post.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">{post.title}</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Quantity</span>
                <p>{post.quantity} Kg</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Delivery Expected</span>
                <p>{post.deliveryexpected}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Budget</span>
                <p>₹{post.price}</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.city}</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.state}</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.policy}</span>
            </div>
          </div>
          {/* <p className="title">Facilities</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Transportation</span>
                <p>{post.transportation ? "Available" : "Not Available"}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Temperature</span>
                <p>{post.temperature}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Bank/ATMs</span>
                <p>{post.bank}</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p> */}
          {/* <div className="mapContainer">
            <Map items={[post]} />
          </div> */}
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;