import './list.scss'
import Card from"../card/Card"
import {listData} from"../../lib/dummydata"

function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item._id} item={item}/>
      ))}
    </div>
  )
}

export default List