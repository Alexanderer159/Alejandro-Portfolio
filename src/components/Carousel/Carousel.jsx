import "./carousel.css"

export const Carousel = () => (
<>

    <div className="d-flex flex-column justify-content-center align-items-center">

        <p className="card-title pb-5">Soundstagram!</p>

        <div className="carousel-container d-flex flex-column justify-content-center align-items-center">
            <input type="radio" name="slider" id="photo-1" defaultValue className="d-none"/>
            <input type="radio" name="slider" id="photo-2" className="d-none"/>
            <input type="radio" name="slider" id="photo-3" className="d-none"/>
            <div className="cards">
                <label className="cardrousel" for="photo-1" id="pic-1">
                <img src="/Projects/Soundstagram!/Landing.png"/>
                </label>
                <label className="cardrousel" for="photo-2" id="pic-2">
                <img src="/Projects/Soundstagram!/Signup.png"/>
                </label>
                <label className="cardrousel" for="photo-3" id="pic-3">
                <img src="/Projects/Soundstagram!/Start.png"/>
                </label>
            </div>
        </div>

        <p className="learn-more py-5">Learn More!</p>

    </div>
</>
);