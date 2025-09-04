import './navbar.css'

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container-fluid d-flex p-0 m-0">	
					<div className="d-flex flex-row align-items-center">
						<img src="https://cdn-icons-png.flaticon.com/512/9380/9380416.png" className="img-fluid icon mx-3 p-1" />
						<p className="navbar-text fw-bold m-0 p-0 ">Alejandro's Portfolio</p>
					</div>

				<div className="actions gap-4 justify-content-between d-flex flex-row me-5 my-0 align-items-center">
					<a className="navbar-text m-0" data-scroll href="#projects">Projects</a>
					<a className="navbar-text m-0" data-scroll href="#testimonials">Testimonials</a>
					<a className="navbar-text m-0" data-scroll href="#contact">Contact information</a>
				</div>
			</div>
		</nav>
	);
};