import './newPostPage.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function NewPostPage() {

  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const data  = {
        title: inputs.title,
        price: parseInt(inputs.price),
        address: inputs.address,
        size: inputs.size,
        description: inputs.description,
        city: inputs.city,
        state: inputs.state,
        transportation: inputs.transportation,
        pestcontrol: inputs.pestControl,
        tempcontrol: inputs.tempControl,
        supply: inputs.supply,
        shelter: inputs.shelter,
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        policy: inputs.policy,
        highway: inputs.highway,
        bank: inputs.bank,
        images: images,
      }

      const res = await fetch("http://localhost:5000/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      navigate("/"+res.data.id)


    } catch (err) {
      console.log(err);
      setError(error);
    }
  };



  return (
      <div className="newPostPage">
        <div className="formContainer">
          <h1>Add New Post</h1>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <div className="item">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />
              </div>
              <div className="item">
                <label htmlFor="price">Price</label>
                <input id="price" name="price" type="number" />
              </div>
              <div className="item">
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />
              </div>

              <div className="item">
                <label htmlFor="size">Total Size (sqft)</label>
                <input min={0} id="size" name="size" type="number" />
              </div>

              <div className="item description">
                <label htmlFor="desc">Description</label>
                <ReactQuill theme="snow" onChange={setValue} value={value} />
              </div>

              <div className="item">
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" />
              </div>

              <div className="item">
                <label htmlFor="state">State</label>
                <input id="state" name="state" type="text" />
              </div>

              <div className="item">
                <label htmlFor="type">Transportation</label>
                <select name="transportation">
                  <option value="rent" defaultChecked>
                    YES
                  </option>
                  <option value="buy">NO</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="type">Pest Control</label>
                <select name="pestControl">
                  <option value="rent" defaultChecked>
                    YES
                  </option>
                  <option value="buy">NO</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="type">Temp Control</label>
                <select name="pestControl">
                  <option value="rent" defaultChecked>
                    YES
                  </option>
                  <option value="buy">NO</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="type">Elec / Water Supply</label>
                <select name="pestControl">
                  <option value="rent" defaultChecked>
                    YES
                  </option>
                  <option value="buy">NO</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="type">Shelter For Workers</label>
                <select name="pestControl">
                  <option value="rent" defaultChecked>
                    YES
                  </option>
                  <option value="buy">NO</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude" name="latitude" type="text" />
              </div>

              <div className="item">
                <label htmlFor="longitude">Longitude</label>
                <input id="longitude" name="longitude" type="text" />
              </div>
  
              <div className="item">
                <label htmlFor="utilities">Utilities Policy</label>
                <select name="utilities">
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="school">Nearest Highway</label>
                <input min={0} id="school" name="school" type="number" />
              </div>

              <div className="item">
                <label htmlFor="restaurant">Nearest Bank</label>
                <input min={0} id="restaurant" name="restaurant" type="number" />
              </div>

              <button className="sendButton">Add</button>
              {error && <span>error</span>}
            </form>
          </div>
        </div>

        <div className="sideContainer">
          {/* upload widget ayegi yaha [component] */}
        </div>
      </div>
  )
}

export default NewPostPage