import "./projects.css"

export const Projects = () => (
<>
    <div className="projects-top-container d-flex flex-column justify-content-center animated">

        <p className="protitle text-center">Recent Projects</p>

        <div className="d-flex flex-column justify-content-center align-items-center">

            <p className="card-title pb-5">Soundstagram!</p>

            <div className="projects-container d-flex flex-column justify-content-center align-items-center">
                <input type="radio" name="slider" id="photo-1" defaultValue className="d-none"/>
                <input type="radio" name="slider" id="photo-2" className="d-none"/>
                <input type="radio" name="slider" id="photo-3" className="d-none"/>
                <div className="cards">
                    <label className="cardrousel" htmlFor="photo-1" id="pic-1">
                    <img src="/Projects/Soundstagram!/Landing.png"/>
                    </label>
                    <label className="cardrousel" htmlFor="photo-2" id="pic-2">
                    <img src="/Projects/Soundstagram!/Signup.png"/>
                    </label>
                    <label className="cardrousel" htmlFor="photo-3" id="pic-3">
                    <img src="/Projects/Soundstagram!/Start.png"/>
                    </label>
                </div>
            </div>

            <a href="https://github.com/Alexanderer159/Soundstagram" target="_blank" className="my-5">
                <p className="learn-more m-0">Learn More!</p>
            </a>
        </div>
        
    </div>    
</>
);