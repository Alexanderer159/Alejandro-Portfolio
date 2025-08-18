import './navbar.css'

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container-fluid d-flex flex-row m-0 p-0 justify-content-between align-items-center">	
					<div className="d-flex flex-row align-items-center">
						<img src="/Pictures/Soundstagram_no_bg.svg" className="soundstagram-icon img-fluid icon mx-3 p-1" />
						<p className="navbar-text fw-bold m-0 p-0 text-center">Alejandro's Portfolio</p>
					</div>

				<div className="actions gap-4 justify-content-between d-flex flex-row me-3">

					<form className="search-function d-flex">

						<input className="form-control search-navbar-bar me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />

						<button className="btn search-navbar-icon-btn p-0 m-0" type="submit">

							<p className="icon-navbar search-navbar-icon p-0 m-0 ">⌕</p>

						</button>

					</form>
				</div>
			</div>
		</nav>
	);
};