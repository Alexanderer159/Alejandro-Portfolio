import './bio.css'

export const Bio = () => {

	return (
<>
        <div className="z-1 bio animated py-3">
          
          <p className="who-what protitle ms-5 ps-5"><strong className="emphasis">What </strong> am I?</p>

          <div className="d-flex justify-content-between px-5">

            <div className="d-flex justify-content-center align-items-center">
              <p className="bio-text text-center m-5 p-5">
                I'm a <strong className="emphasis">Full-Stack developer</strong> with experience in <strong className="emphasis">JavaScript, React, Python and SQL</strong> Passionate about creating fully functional and eye-catching SPAs and MPAs!<br/>
                Great at interpreting languages, codes and minds👇<br/>
                I believe communication is key for human interaction and I pride myself on being clear, to the point and as assertive as possible, both in code and in my day-to-day.<br/>
                I'm a highly dedicated individual with a wide range of skills that can be applied to any of your projects!👍
              </p>
            </div>

            <video autoPlay muted loop className="bio-vid" src="Alejandro/Coding.mp4" type="video/mp4"/>
         
          </div>
          
        </div>
</>
)}