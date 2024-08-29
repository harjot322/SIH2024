import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({ items }) {
	console.log("======")
	 console.log(items)

	return (
		<MapContainer center={[23.5121, 80.3288]} zoom={5} scrollWheelZoom={false} className='map'>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map(item => (
				
				<Pin item={item} key={item._id} />
			))}
			{/* {items.map(item => () => (
				
				
				
					<Pin item={item} key={item.id} />
				
			))} */}
		</MapContainer>
	)
}

export default Map