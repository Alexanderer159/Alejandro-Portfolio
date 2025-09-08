import './contact.css'

export const Contact = () => {

	return (
<>
      <div className="animated d-flex flex-column justify-content-center align-items-center">
          
            <p className="protitle">Contact Info</p>

            <div className="d-flex flex-row gap-5">

              <a href="https://www.linkedin.com/in/alejandro-de-yavorsky/" target="_blank">
                <button className="contact-button d-flex flex-column justify-content-between">
                  <svg viewBox="0 0 16 16">
                    <path fill="#fff" fillRule="nonzero" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  Linked-In
                </button>
              </a>

              <a href="https://github.com/Alexanderer159" target="_blank">
                <button className="contact-button d-flex flex-column justify-content-between">
                  <svg shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" clipRule="evenodd" viewBox="0 0 512 499.368">
                    <path fill="#fff" fillRule="nonzero" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>
                  </svg>
                  Github
                </button>
              </a>

              <a href="mailto:traledeyavorsky@gmail.com?&subject=Inquiry%20about%20services.&body=I%20would%20like%20to%20inquire%20about%20your%20services%20and%20would%20like%20to%20set%20up%20a%20meeting!" target="_blank">
                <button className="contact-button d-flex flex-column justify-content-between">
                  <svg viewBox="0 0 122.88 85.57">
                    <path fill="#fff" fillRule="nonzero" d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z"/>
                  </svg>
                  Mail
                </button>
              </a>

            </div>
          
        </div>
</>
)}