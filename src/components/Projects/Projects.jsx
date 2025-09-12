import "./projects.css"
import soundstagramLanding from '../../assets/Projects/Soundstagram!/Landing.png'
import soundstagramSignUp from '../../assets/Projects/Soundstagram!/Signup.png'
import soundstagramStart from '../../assets/Projects/Soundstagram!/Start.png'

export const Projects = () => (
<>
    <div className="projects-top-container d-flex flex-column animated">

        <p className="protitle text-center">Recent Projects</p>

        <div className="project-container d-flex flex-column align-items-center justify-content-between">

            <p className="card-title pb-5">Soundstagram!</p>

                <input type="radio" name="slider" id="photo-1" defaultValue className="d-none"/>
                <input type="radio" name="slider" id="photo-2" className="d-none"/>
                <input type="radio" name="slider" id="photo-3" className="d-none"/>

                <div className="cards d-flex justify-content-center align-items-center">
                    <label className="cardrousel" htmlFor="photo-1" id="pic-1">
                    <img src={soundstagramLanding}/>
                    </label>
                    <label className="cardrousel" htmlFor="photo-2" id="pic-2">
                    <img src={soundstagramSignUp}/>
                    </label>
                    <label className="cardrousel" htmlFor="photo-3" id="pic-3">
                    <img src={soundstagramStart}/>
                    </label>

                </div>

            <a href="https://github.com/Alexanderer159/Soundstagram" target="_blank" className="my-5">
                <p className="learn-more m-0">Learn More!</p>
            </a>
        </div>
        
    </div>    
</>
);