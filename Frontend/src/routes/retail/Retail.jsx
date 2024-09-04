import './retail.css';
const crops = [
  { name: 'Wheat', quantity: '1000 kg', orderTime: '12 hours', image: 'wheat.jpg' },
  { name: 'Rice', quantity: '500 kg', orderTime: '24 hours', image: 'rice.jpg' },
  { name: 'Barley', quantity: '200 kg', orderTime: '6 hours', image: 'barley.jpg' },
  { name: 'Corn', quantity: '800 kg', orderTime: '18 hours', image: 'corn.jpg' },
  { name: 'Soybean', quantity: '600 kg', orderTime: '20 hours', image: 'soybean.jpg' },
  { name: 'Oats', quantity: '400 kg', orderTime: '8 hours', image: 'oats.jpg' },
  { name: 'Millet', quantity: '300 kg', orderTime: '10 hours', image: 'millet.jpg' },
  { name: 'Sorghum', quantity: '700 kg', orderTime: '15 hours', image: 'sorghum.jpg' },
  { name: 'Rye', quantity: '500 kg', orderTime: '22 hours', image: 'rye.jpg' },
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
            <h2>{crop.name}</h2>
            <p>Order Time: {crop.orderTime}</p>
            <div className="card-quantity">
              <label htmlFor={`quantity-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${index}`}
                name="quantity"
                defaultValue={crop.quantity.split(' ')[0]} // Display the numeric value only
                min="0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Retail;
