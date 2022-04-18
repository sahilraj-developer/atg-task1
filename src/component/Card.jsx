import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div class="card" style={{width: "30rem"}}>
  <img src={props.imageSrc} class="card-img-top" alt="impo"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
    </div>
  )
}

export default Card