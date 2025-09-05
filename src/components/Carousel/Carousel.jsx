import "./carousel.css"

export const Carousel = () => (
<>
    <div className="container d-flex flex-column justify-content-center align-items-center">
        <input type="radio" name="slider" id="item-1" defaultValue className="d-none"/>
        <input type="radio" name="slider" id="item-2" className="d-none"/>
        <input type="radio" name="slider" id="item-3" className="d-none"/>
        <div className="cards">
            <label className="cardrousel" for="item-1" id="song-1">
            <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song"/>
            </label>
            <label className="cardrousel" for="item-2" id="song-2">
            <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song"/>
            </label>
            <label className="cardrousel" for="item-3" id="song-3">
            <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
            </label>
        </div>
    </div>
</>
);