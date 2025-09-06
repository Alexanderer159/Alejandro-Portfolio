import './sidebar.css'

export const Sidebar = () => {

	return (
<>

    <div className="sidebar d-flex flex-column justify-content-between align-items-start ms-5 ">

        <a className="jump" href="#middle">Bio</a>
        <a className="jump" href="#services">Services</a>
        <a className="jump" href="#projects">Projects</a>
        <a className="jump" href="#testimonials">Testimonials</a>
        <a className="jump" href="#contact">Contact information</a>
        <a className="jump" href="#">Back to Top</a>

    </div>

</>
    );
};