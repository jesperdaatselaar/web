function Nav() {
    return (
      <section className="section">
        <header className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item has-text-weight-bold has-text-black" href="/">
              Jesper van Daatselaar
            </a>
            <a
              role="button"
              className="navbar-burger"
              data-target="navMenu"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <p className="navbar-item has-text-grey">A Dutch view on life.</p>
            </div>
            <nav className="navbar-end has-text-weight-bold">
              <a href="#" className="navbar-item has-text-black">
                About
              </a>
              <a href="#" className="navbar-item has-text-black">
                Gear
              </a>
              <a href="#" className="navbar-item has-text-black">
                Work
              </a>
              <a href="#" className="navbar-item has-text-black">
                Contact
              </a>
            </nav>
          </div>
        </header>
      </section>
    );
}

export default Nav;