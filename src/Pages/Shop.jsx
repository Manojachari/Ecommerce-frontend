import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewColllections from '../Components/NewCollections/NewColllections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
       <Hero/> 
       <Popular/>
       <Offers/>
       <NewColllections/>
       <NewsLetter/>
    </div>
  )
}

export default Shop