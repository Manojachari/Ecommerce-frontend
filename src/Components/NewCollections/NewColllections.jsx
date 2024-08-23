import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewColllections = () => {
  const [new_collection,setNew_collection]=useState([]);

  useEffect(()=>{
    fetch('https://ecommerce-backend-zcib.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
    console.log(new_collection)
  },[])

  return (
    <div className='new-collections'>
    <h1>NewCollections</h1>
    <hr/>
    <div className='collections'>
        {new_collection.map((item,i)=>{
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
    </div>
  )
}

export default NewColllections