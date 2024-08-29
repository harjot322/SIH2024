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
			
			const data = new FormData();

			data.append("title", inputs.title);
			data.append("description", value);
			data.append("price", parseInt(inputs.price));
			data.append("address", inputs.address);
			data.append("state", inputs.state);
			data.append("city", inputs.city);
			data.append("area", inputs.area);
			data.append("transportation", inputs.transportation);
			data.append("pestControl", inputs.pestControl);
			data.append("temperature", inputs.temperature);
			data.append("electricityAndWaterSupply", inputs.electricityAndWaterSupply);
			data.append("shelter", inputs.shelter);
			data.append("latitude", inputs.latitude);
			data.append("longitude", inputs.longitude);
			data.append("policy", inputs.policy);
			data.append("highway", inputs.highway);
			data.append("bank", inputs.bank);
			data.append("image", images[0]);

			

			const res = await fetch("http://localhost:5000/api/posts/create", {
			  method: "POST",
			  credentials: "include",
			  body: data,
			});

			navigate("/")


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
							<input min={0} id="size" name="area" type="number" />
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
								<option value={true} defaultChecked>YES</option>
								<option value={false}>NO</option>
							</select>
						</div>

						<div className="item">
							<label htmlFor="type">Pest Control</label>
							<select name="pestControl">
								<option value={true} defaultChecked>YES</option>
								<option value={false}>NO</option>
							</select>
						</div>

						<div className="item">
							<label htmlFor="type">Temperature</label>
							<input id="temperature" name="temperature" type="number" />
						</div>

						<div className="item">
							<label htmlFor="type">Elec / Water Supply</label>
							<select name="electricityAndWaterSupply">
								<option value={true} defaultChecked>
									YES
								</option>
								<option value={false}>NO</option>
							</select>
						</div>

						<div className="item">
							<label htmlFor="type">Shelter For Workers</label>
							<select name="shelter">
								<option value={true} defaultChecked>YES</option>
								<option value={false}>NO</option>
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
							<select name="policy">
								<option value="owner">Owner is responsible</option>
								<option value="tenant">Tenant is responsible</option>
								<option value="shared">Shared</option>
							</select>
						</div>

						<div className="item">
							<label htmlFor="nearestHighway">Nearest Highway</label>
							<input type='text' name='highway' />
						</div>

						<div className="item">
							<label htmlFor="bank">Nearest Bank</label>
							<input type='text' name='bank' />
						</div>
						<div className=''>
							<input type='file' onChange={(e) => setImages(e.target.files)} />

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