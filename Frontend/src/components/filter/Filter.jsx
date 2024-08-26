import './filter.scss';

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Delhi</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>

      <div className="bottom">
        {/* area, price, days, temp, extras */}
        <div className="item">
          <label htmlFor="type">Area</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="">0-100 sqft</option>
            <option value="buy">100-200 sqft</option>
            <option value="rent">200-300 sqft</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label htmlFor="minPrice">Days</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label htmlFor="minPrice">Temp(°C)</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label htmlFor="type">Extras</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="t">Transportation</option>
            <option value="p">Pesticide Control</option>
            <option value="p">Water supper 24/7</option>
            <option value="p">Refrigerators</option>
          </select>
        </div>

        <button>
          <img src="/search.png" alt="" />
        </button>
        
      </div>
    </div>
  );
}

export default Filter;