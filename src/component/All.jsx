import React from "react";
import Card from "./Card";

import img11 from '../asset/img11.jpg'
import img2 from '../asset/img2.jpg'
import img13 from '../asset/img13.jpg'
import img14 from '../asset/img14.jpg'
import img15 from '../asset/img15.jpg'
import img16 from '../asset/img16.jpg'
import img17 from '../asset/img17.jpg'
import img18 from '../asset/img18.jpg'
import img19 from '../asset/img19.jpg'
import '../App.css'

const All = () => {
  return (
    <div className="card-items">
      <Card imageSrc={img11} />
      <Card imageSrc={img2} />
      <Card imageSrc={img13} />
      <Card imageSrc={img14}/>
      <Card imageSrc={img15} />
      <Card imageSrc={img16}/>
      <Card imageSrc={img17}/>
      <Card imageSrc={img18}/>
      <Card imageSrc={img19}/>
      <Card imageSrc={img13}/>
      
    </div>
  );
};

export default All;
