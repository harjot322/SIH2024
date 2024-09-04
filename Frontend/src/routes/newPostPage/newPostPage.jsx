import './newPostPage.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from 'react-hot-toast';


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
			data.append("deliveryExpected", inputs.deliveryExpected);
			data.append("state", inputs.state);
			data.append("city", inputs.city);
			data.append("policy", inputs.policy);
			data.append("extras", inputs.extras);
			data.append("quantity", parseInt(inputs.quantity));
			data.append("area", parseInt(inputs.area));
			data.append("image", images[0]);


			

			const res = await fetch("http://localhost:5000/api/posts/create", {
			  method: "POST",
			  headers : {
				"Authorization" : `Bearer ${JSON.stringify(localStorage.getItem("user")).token}`
			  },
			  "credentials": "include",
			  body: data,
			});
			const result = await res.json();
			if(result.status === 400){
				toast.error(result.message)
				return ;
			}
			toast.success(result.message)

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
							<label htmlFor="price">Budget</label>
							<input id="price" name="price" type="number" />
						</div>
						<div className="item">
							<label htmlFor="address">Delivery Expected</label>
							<input id="address" name="deliveryExpected" type="text" />
						</div>

						<div className="item">
							<label htmlFor="size">Quantity</label>
							<input min={0} id="size" name="quantity" type="number" />
						</div>
						<div className="item">
							<label htmlFor="size">Area</label>
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
							<label htmlFor="utilities">Contract</label>
							<select name="policy">
								<option value="owner">By Agropact</option>
								<option value="tenant">Self</option>
								<option value="shared">Shared</option>
							</select>
						</div>

						<div className="item">
							<label htmlFor="utilities">Extras</label>
							<select name="extras">
								<option value="owner">Pesticides Available</option>
								<option value="tenant">Transportation</option>
								<option value="shared">Storage Space</option>
							</select>
						</div>


						<div className=''>
							<input type='file' onChange={(e) => setImages(e.target.files)} />
						</div>

						<button className="sendButton">Add</button>
						{error && <span>error</span>}
					</form>
				</div>
			</div>

			{/* <div className="sideContainer">
			</div> */}
		</div>
	)
}

export default NewPostPage