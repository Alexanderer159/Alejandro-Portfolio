import './sidebar.css'

export const Sidebar = () => {

	return (
<>

    <div className="sidebar d-flex flex-column align-items-end w-100">

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