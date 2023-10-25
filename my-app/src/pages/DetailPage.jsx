import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../store/actions/actionCreator';

function DetailPage() {
  let { id } = useParams();
  const dispatch = useDispatch()
  const {item} = useSelector(((state) => state.item))
  const[loading,setLoading] = useState(true)

  useEffect(() => {
    if(id) {
        dispatch(fetchItemById(id))
        .then(() => {
          setLoading(false)
        })
      }
    },[])
 
    if (loading) {
      return <h1>memuat...</h1>
    }

  return (
    <div className='d-flex mt-5'>
    <div className="imgCss">
    <img src={item.imgUrl} alt="" className='' />
    <h3 className='text-center fw-bold text-capitalize'>{item.name}</h3>
    <h2 className='text-center fst-italic'>Rp. {item.price}</h2>
    </div>
    <div className="explane">
    <p className='fst-italic'>{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est ab magni sed voluptates amet labore consequatur, odio earum libero quia molestiae debitis vero saepe fugit facere architecto tenetur adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat explicabo maxime similique at molestiae! Commodi minima, nulla dolores corrupti ipsum veniam libero doloribus cupiditate distinctio delectus nisi, iste modi maxime?</p>
    <p className='fw-bold text-capitalize'>Category {item.name ? item.Category.name:""} </p>
    <p className='text-capitalize'>ingredients : </p>
    <ul>
      {item?.Ingredients?.map((el,i) => {
        return <li key={i}>{el.name}</li>
      })}
    </ul>
    </div>
  </div>
  )
}

export default DetailPage
