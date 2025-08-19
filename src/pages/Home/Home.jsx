import './Home.css'

export const Home = () => {
  return (
    <>
    <div className="all py-5 ps-5 pe-0 ms-5">
      <div className="justify-content-center">
        <div className="d-flex align-items-center gap-5">
          <img src="/Foto-CV.jpg" alt="pic" className="propic"/>
          <div className="info p-5">
            <p className="name m-0">Alejandro De Yavorsky</p>
            <p className="devtext m-0">Full-Stack developer + Love for UI & UX = Amazing web-pages.</p>
            <div className="d-flex gap-3 pt-4 mt-4">
              <button className="buttonCV p-2">Download My CV</button>
              <button className="buttonWA p-2">Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a data-scroll href="#projects">
          <div class="arrow"></div>
        </a>
      </div>
<div id="projects" className="d-flex justify-content-center mt-5 pt-5">
  <p className="protitle">Projects</p>
</div>
    </div>
    </>
  )
}
