import './Home.css';
import { Slider } from '../../components/Slider/Slider.jsx';
import { Card } from '../../components/Card/Card.jsx';
import { Carousel } from '../../components/Carousel/Carousel.jsx';

export const Home = () => {
  return (
  <>
    <div className="all pt-4 pb-5">
      
      <div className="top">
        <div className="d-flex justify-content-center align-items-center gap-5 animated pt-3">

          <Card />

          <div className="info p-5">

              <p className="name m-0">Alejandro De Yavorsky</p>

              <p className="devtext m-0">Full-Stack developer + Love for UI & UX = Amazing web-pages.</p>

              <div className="d-flex gap-3 pt-4 mt-4">

                <a href="CV-Alejandro De Yavorsky.pdf" download="CV-Alejandro De Yavorsky">
                  <button className="buttonCV p-2">
                    📜 Download My CV      
                  </button>
                </a>

                <a href="https://api.whatsapp.com/send/?phone=%2B34613502876&text&type=phone_number&app_absent=0">
                  <button className="buttonWA p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                      <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"></path>
                    </svg> 
                    Whatsapp
                  </button>
                </a>
              </div>

            <div className="pt-5">

              <p className="slide-text text-center">ToolSet</p>

              <Slider />

            </div>

          </div>

        </div>

        <div className="d-flex justify-content-center animated">
          <a data-scroll href="#middle" className="arrow">
          </a>
        </div>
      </div>

<div id="middle"></div>

      <div className="d-flex flex-column justify-content-between gap-5">

        <div className="bio animated">
          
          <p className="protitle">Who am I? What am I?</p>

          <div className="d-flex justify-content-between px-5">
            <div className="d-flex justify-content-center align-items-center">
              <p className="bio-text text-center m-5 p-5">
                I'm a <strong className="emphasis"       
                >Full-Stack developer</strong> with experience in <strong className="emphasis">JavaScript, React, Python and SQL</strong> Passionate about creating fully functional and eye-catching SPAs and MPAs!<br/>
                Great at interpreting languages, codes and minds👇<br/>
                I believe communication is key for human interaction and I pride myself on being clear, to the point and as assertive as possible, both in code and in my day-to-day.<br/>
                I'm a highly dedicated individual with a wide range of skills that can be applied to any of your projects!👍
              </p>
            </div>

            <img className="bio-pic" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>

          </div>
          
        </div>
        
        <div className="animated d-flex flex-column justify-content-center align-items-center" id="projects">

          <p className="protitle">Recent Projects</p>

          <div className="Proj1">

            <p>Soundstagram!</p>

            <div className="carousel-container d-flex align-items-center justify-content-center">

            <Carousel />

            </div>
            

          </div>
          
        </div>

        <div className="animated d-flex flex-column justify-content-center align-items-center" id="testimonials">

          <p className="protitle">Testimonials</p>

          <p>Hans Christian Aparicio Moreno</p>
          <p>Alejandro se caracteriza por su atención al detalle, cuidando que cada entrega cumpliera con altos estándares de calidad y usabilidad. Su capacidad de adaptación y compromiso con el proyecto fueron claves para alcanzar los objetivos establecidos. Sin duda, es un profesional valioso que aportaría muchísimo a cualquier equipo en el que participe.</p>
        
        </div>

        <div className="animated d-flex flex-column justify-content-center align-items-center" id="contact">
          
            <p className="protitle">Contact Info</p>

            <div className="d-flex flex-row gap-5">

              <a href="">
                <button className="contact-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  Linked-In
                </button>
              </a>

              <a href="">
                <button className="contact-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  Github
                </button>
              </a>

              <a href="">
                <button className="contact-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  Mail
                </button>
              </a>

            </div>
          
        </div>

      </div>
    </div>
  </>
  )
}
