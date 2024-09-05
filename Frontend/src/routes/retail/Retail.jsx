import './retail.css';
import { Link } from 'react-router-dom';
const crops = [
  { name: 'Wheat', quantity: '1000 kg', variety: 'Durum', image: 'wheat.jpg' },
  { name: 'Rice', quantity: '500 kg', variety: 'Basmati', image: 'rice.jpg' },
  { name: 'Barley', quantity: '200 kg', variety: 'Malting', image: 'barley.jpg' },
  { name: 'Corn', quantity: '800 kg', variety: 'Sweet', image: 'corn.jpg' },
  { name: 'Soybean', quantity: '600 kg', variety: 'Edamame', image: 'soybean.jpg' },
  { name: 'Oats', quantity: '400 kg', variety: 'Hulless', image: 'oats.jpg' },
  { name: 'Millet', quantity: '300 kg', variety: 'Pearl', image: 'millet.jpg' },
  { name: 'Sorghum', quantity: '700 kg', variety: 'Forage', image: 'sorghum.jpg' },
  { name: 'Rye', quantity: '500 kg', variety: 'Winter', image: 'rye.jpg' },
];


function Retail() {
  return (
    <div className="retail">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <div className="cards-container">
        {crops.map((crop, index) => (
          <div className="card" key={index}>
            <img src={crop.image} alt={crop.name} className="card-image" />
            <h2 className='cropname'>{crop.name}</h2>
            <p>Variety of {crop.name}: {crop.variety}</p>
            <div className="card-quantity">
            {/* <Link to={`/list/1`}> */}
              <button className='buttonUi'>Details</button>
              {/* </Link> */}
              {/* <input
                type="number"
                id={`quantity-${index}`}
                name="quantity"
                defaultValue={crop.quantity.split(' ')[0]} // Display the numeric value only
                min="0"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Retail;
