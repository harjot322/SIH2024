import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
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
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
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
                <span>Utilities</span>
                <p>{post.policy}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Animal Prohibition</span>
                <p>{post.pestControl ? "Pest Control Available" : "Pest Control Not Available"}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Security Deposit</span>
                <p>{post.price / 2}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.area}</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.shelter ? "Shelter" : "No Shelter"}</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.electricityAndWaterSupply ? "Good Water Supply" : "No Water Supply"}</span>
            </div>
          </div>
          <p className="title">Nearby Facilities</p>
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
          <p className="title">Location</p>
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