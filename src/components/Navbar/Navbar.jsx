import './navbar.css'

export const Navbar = () => {

const handleScroll = (e) => {
	document.getElementById(e).scrollIntoView({ behavior: "smooth" })
}

	return (
		<nav className="navbar">
			
			<div className="container-fluid d-flex px-5 m-0 py-0 justify-content-between">	

					<p className="navbar-text m-0">Alejandro's Portfolio</p>

				<div className="actions gap-3 justify-content-between d-flex align-items-center">
					<a className="navbar-text m-0" data-scroll onClick={() => handleScroll("services")}>Services</a>
					<a className="navbar-text m-0" data-scroll onClick={() => handleScroll("projects")}>Projects</a>
					<a className="navbar-text m-0" data-scroll onClick={() => handleScroll("testimonials")}>Testimonials</a>
					<a className="navbar-text m-0" data-scroll onClick={() => handleScroll("contact")}>Contact information</a>
				</div>

			</div>
		</nav>
	);
};