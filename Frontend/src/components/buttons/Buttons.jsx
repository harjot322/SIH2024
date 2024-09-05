import { Link } from 'react-router-dom';
import './buttons.css';

function Buttons() {
  return (
    <div className="buttons">
      <div className="button">
        <Link to={'/list'} > <button>Pre-Order</button> </Link>
      </div>
      <div className="button">
        <Link to={'/retail'}><button>Retail</button></Link>
      </div>
      <div className="button">
        <Link to={'/wholesale'} ><button>Wholesale</button></Link>
      </div>
      
    </div>
  );
}

export default Buttons;