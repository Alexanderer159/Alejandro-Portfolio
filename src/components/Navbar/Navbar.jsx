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
					<p className="navbar-text m-0">Projects</p>
					<p className="navbar-text m-0">Testimonials</p>
					<p className="navbar-text m-0">Contact information</p>
				</div>
			</div>
		</nav>
	);
};