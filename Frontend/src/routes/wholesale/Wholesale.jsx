import './Wholesale.css';

// Function to generate a random price between min and max
const getRandomPrice = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

const crops = [
  { name: 'Wheat', price: getRandomPrice(20, 30), image: 'wheat.jpg' },
  { name: 'Rice', price: getRandomPrice(30, 40), image: 'rice.jpg' },
  { name: 'Barley', price: getRandomPrice(15, 25), image: 'barley.jpg' },
  { name: 'Corn', price: getRandomPrice(25, 35), image: 'corn.jpg' },
  { name: 'Soybean', price: getRandomPrice(40, 50), image: 'soybean.jpg' },
  { name: 'Oats', price: getRandomPrice(20, 30), image: 'oats.jpg' },
  { name: 'Millet', price: getRandomPrice(35, 45), image: 'millet.jpg' },
  { name: 'Sorghum', price: getRandomPrice(25, 35), image: 'sorghum.jpg' },
  { name: 'Rye', price: getRandomPrice(30, 40), image: 'rye.jpg' },
];

function Wholesale() {
  return (
    <div className="wholesale">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search crops..." />
        <button className="search-button">Search</button>
      </div>
      <div className="cards-container">
        {crops.map((crop, index) => (
          <div className="card" key={index}>
            <img src={crop.image} alt={crop.name} className="card-image" />
            <h2>{crop.name}</h2>
            <div className="card-price">
              <p>Minimum Price per kg: ₹{crop.price}</p>
            </div>
            <button className="show-bid-button">Show Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wholesale;

// import './Wholesale.css';

// const crops = [
//   { name: 'Wheat', quantities: ['100 kg', '500 kg', '1000 kg'], image: 'wheat.jpg' },
//   { name: 'Rice', quantities: ['100 kg', '250 kg', '500 kg'], image: 'rice.jpg' },
//   { name: 'Barley', quantities: ['50 kg', '150 kg', '200 kg'], image: 'barley.jpg' },
//   { name: 'Corn', quantities: ['200 kg', '500 kg', '800 kg'], image: 'corn.jpg' },
//   { name: 'Soybean', quantities: ['300 kg', '400 kg', '600 kg'], image: 'soybean.jpg' },
//   { name: 'Oats', quantities: ['100 kg', '200 kg', '400 kg'], image: 'oats.jpg' },
//   { name: 'Millet', quantities: ['50 kg', '200 kg', '300 kg'], image: 'millet.jpg' },
//   { name: 'Sorghum', quantities: ['100 kg', '400 kg', '700 kg'], image: 'sorghum.jpg' },
//   { name: 'Rye', quantities: ['200 kg', '300 kg', '500 kg'], image: 'rye.jpg' },
// ];

// function Wholesale() {
//   return (
//     <div className="wholesale">
//       <div className="search-container">
//         <input type="text" className="search-input" placeholder="Search crops..." />
//         <button className="search-button">Search</button>
//       </div>
//       <div className="cards-container">
//         {crops.map((crop, index) => (
//           <div className="card" key={index}>
//             <img src={crop.image} alt={crop.name} className="card-image" />
//             <h2>{crop.name}</h2>
//             <div className="card-quantity">
//               <label htmlFor={`quantity-${index}`}>Select Quantity:</label>
//               <select id={`quantity-${index}`} className="quantity-selector">
//                 {crop.quantities.map((quantity, idx) => (
//                   <option key={idx} value={quantity}>{quantity}</option>
//                 ))}
//               </select>
//             </div>
//             <button className="show-bid-button">Show Bid</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Wholesale;
