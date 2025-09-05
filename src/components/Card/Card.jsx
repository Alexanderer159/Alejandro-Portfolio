import "./card.css"

export const Card = () => (

<div className="cards-container d-flex flex-row justify-content-center">

  <div className="card-container">

    <div className="card d-flex align-items-center justify-content-center">

      <div className="front d-flex align-items-center justify-content-center">
        <img src="Foto-CV.jpg"/>
      </div>

      <div className="back d-flex flex-column align-items-center justify-content-between">
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
        <p className="text-white">BLA BLA BLA</p>
      </div>

    </div>

  </div>

</div>

);