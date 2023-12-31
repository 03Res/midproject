const Header = () => {
  return (
    <div>
      <div>
        {/* ======= Mobile nav toggle button ======= */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none" />
        {/* ======= Header ======= */}
        <header id="header">
        <div className="d-flex flex-column">
            <div className="profile">
            <img src="src/assets/img/res.jpg" alt className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Quaresma soruday</a></h1>
            <div className="social-links mt-3 text-center">
            <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram" /></a>
            <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook" /></a>
            <a href="https://www.threads.com/" className="threads" target="_blank" rel="noreferrer"><i className="bi bi-threads" /></a>
            <a href="https://www.skype.com/" className="skype" target="_blank" rel="noreferrer"><i className="bi bi-skype" /></a>
            <a href="https://www.linkedin.com/" className="linkedin" target="_blank" rel="noreferrer"><i className="bi bi-linkedin" /></a>
            </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house" /> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person" /> <span>About</span></a></li>
                {/* <li><a href="#facts" className="nav-link scrollto"><i className="bi bi-person" /> <span>facts</span></a></li> */}
                {/* <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-person" /> <span>skills</span></a></li> */}
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-newspaper" /> <span>Portfolio</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-earmark" /> <span>Resume</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope" /> <span>Contact</span></a></li>
              </ul>
            </nav>{/* .nav-menu */}
          </div>
        </header>{/* End Header */}
      </div>
    </div>
  );
};

export default Header;
