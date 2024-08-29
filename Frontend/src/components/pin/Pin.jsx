import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  console.log("++++++")
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
          <div className="textContainer">
            <Link to={`/${item._id}`}>{item.title}</Link>
            {/* <span>{item.bedroom} bedroom</span> */}
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;