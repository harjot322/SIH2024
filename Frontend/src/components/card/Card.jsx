import './card.scss';
import { Link } from 'react-router-dom';

function Card({ item }) {

	return (
		<div className="card">
			<Link to={`/list/${item._idid}`} className="imageContainer">
				<img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
			</Link>

			<div className="textContainer">
				<h2 className="title">
					<Link to={`/list/${item._id}`}>{item.title}</Link>
				</h2>
				{/* description show karni hai */}
				<p className='address'>
					<img src="/pin.png" alt="" />
					<span>{item.address}</span>
				</p>
				{/* budget */}
				<p className='price'>
					${item.price}
				</p>

				<div className="bottom">
					<div className="features">
						<div className="feature">
							{/* Quantity */}
							<img src="/bed.png" alt="" />
							<span>{item.bedroom}5 Quintal</span>
						</div>
						{/* delivery date */}
						<div className="feature">
							<img src="/bath.png" alt="" />
							<span>9 months</span>
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