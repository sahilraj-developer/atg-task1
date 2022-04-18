import React from 'react'
import Card from './Card'
import img11 from '../asset/img11.jpg'
import img13 from '../asset/img13.jpg'
import img16 from '../asset/img14.jpg'
import '../App.css'



const Event = () => {
  return (
    <div  className="card-items">
         <Card imageSrc={img11} />
      <Card imageSrc={img13}/>
      <Card imageSrc={img16}/>
     
    </div>
  )
}

export default Event