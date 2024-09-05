import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';

function ListPage() {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">

          <Filter />
          <div className='cardWrapper'>
          {data.posts.map(item => (
            
            
              <Card key = {item._id} item={item} />
            ))}
            </div>            
        </div>
      </div>

      {/* <div className="mapContainer">
          <Map items={data.posts} />
      </div> */}
    </div>
  )
}

export default ListPage;