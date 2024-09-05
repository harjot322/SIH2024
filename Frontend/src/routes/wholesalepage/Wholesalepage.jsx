import './wholesalepage.css'
import ProductImg from '../../../public/wheat.jpg'

function Wholesalepage() {
  return (
    <div className="wholesalepage">
      <div className='productpage'>
        <div className="product-container">
          <div className="product-image">
            <img src={ProductImg} alt="Product" />
          </div>
          <div className="product-details">
            <h2 className="product-title">Wheat</h2>
            <h3 className='product-subtitle'>VL-832 variety from Uttar Pradesh</h3>
            {/* <div class="rating-box">
                <span class="stars">★★★★☆</span>
                <span class="rating-number">4.0</span>
            </div> */}
            <p className="product-description">
            Wheat is a staple food for many people, and is used to make bread, pasta, noodles, cakes, and biscuit.Wheat is one of the oldest and most important cereal crops in the world. It's a major source of carbohydrates and vegetable protein in human food.
            </p>
            <div className="product-price highest">Current highest Bid</div>
            <div className="product-price">Next bid</div>
            <div className="product-price">My Bid</div>
            <div className="product-price-details highest-details">₹18,000</div>
            <div className="product-price-details">₹19,000</div>
            <input type="text" className="custom-input" placeholder="Enter your bid" />
            {/* <button className="add-to-cart-button">Add to Cart</button> */}
            <button className='bid-now-button highest-quickbid'>Add to watchlist</button>
            <button className='bid-now-button'>Quick bid</button>
            <button className='bid-now-button'>Place Bid</button>
            <div className='timer'>Biding ends in  : </div>
            <div className='time'>2 days 14 hours 32 mins</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wholesalepage