import React from 'react'
import Card from './Card'
import img17 from '../asset/img17.jpg'
import img18 from '../asset/img18.jpg'
import img19 from '../asset/img19.jpg'
import '../App.css'

const Job = () => {
  return (
    <div  className="card-items">
         <Card  imageSrc={img17}/>
      <Card  imageSrc={img18}/>
      <Card  imageSrc={img19}/>
      
    </div>
  )
}

export default Job