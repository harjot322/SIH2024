import './retailpage.css';
import ProductImg from '../../../public/soybean.jpg'

function Retailpage() {
  return (
    <div className="retailpage">
      <div className='productpage'>
        <div className="product-container">
          <div className="product-image">
            <img src={ProductImg} alt="Product" />
          </div>
          <div className="product-details">
            <h2 className="product-title">Soya Bean</h2>
            <h3 className='product-subtitle'>Maharashtrian beans from black soil</h3>
            {/* <div class="rating-box">
                <span class="stars">★★★★☆</span>
                <span class="rating-number">4.0</span>
            </div> */}
            <p className="product-description">
              This is a brief description of the product, highlighting key features and benefits. 
              It provides customers with the information they need to make a purchasing decision.
            </p>
            <div className="product-price">$99.99</div>
            <button className="add-to-cart-button">Add to Cart</button>
            <button className='buy-now-button'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retailpage;