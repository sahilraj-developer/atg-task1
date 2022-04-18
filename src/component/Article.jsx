import React from 'react'
import Card from './Card'
import img14 from '../asset/img14.jpg'
import img15 from '../asset/img15.jpg'
import '../App.css'


const Article = () => {
  return (
    <div  className="card-items">
         <Card imageSrc={img15} />
      <Card imageSrc={img14} />
      
    </div>
  )
}

export default Article