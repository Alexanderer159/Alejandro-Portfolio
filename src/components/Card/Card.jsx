import "./card.css"
import alejandroPic from '../../assets/Alejandro/CV-Photo.jpg'

export const Card = () => (

<div className="cards-container d-flex flex-row justify-content-center">

  <div className="card-container">

    <div className="card d-flex align-items-center justify-content-center">

      <div className="front d-flex align-items-center justify-content-center">
        <img src={alejandroPic}/>
      </div>

      <div className="back d-flex flex-column align-items-center justify-content-between">
        <p className="card-back-text">Soft Skills:</p>
      </div>

    </div>

  </div>

</div>

);