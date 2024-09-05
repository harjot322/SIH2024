import './card.scss';
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";

function Card({ item }) {

	return (
		<div className="card">
			<Link to={`/list/${item._id}`} className="imageContainer">
				<img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
			</Link>

			<div className="textContainer">
				<h2 className="title">
					<Link to={`/list/${item._id}`}>{item.title}</Link>
				</h2>
				{/* description show karni hai */}
				<p className='address'>
					<img src={assets.message_icon}  alt="" />
					<span>{item.description}</span>
				</p>
				{/* budget */}
				<p className='price'>
				₹{item.price}
				</p>

				<div className="bottom">
					<div className="features">
						<div className="feature">
							{/* Quantity */}
							<img src={assets.plus_icon}  alt="" />
							<span>{item.quantity} Kg</span>
						</div>
						{/* delivery date */}
						<div className="feature">
							<img src={assets.compass_icon} alt="" />
							<span>{item.deliveryexpected}</span>
						</div>
					</div>
					<div className="icons">
						<div className="icon">
							<img src="/save.png" alt="" />
						</div>
						<div className="icon">
							<img src="/chat.png" alt="" />
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Card