import logo from "../assets/logo-text.png";
import "./Navbar.css";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Technologies",
    href: "#technologies",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Desktop Brand */}
        <a className="navbar__brand" href="#home">
          <img
            src={logo}
            alt="Dev Stack logo"
            className="navbar__logo"
          />

          <span className="navbar__brand-name">
            Dev <span>Stack</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${
                link.label === "Home" ? "navbar__link--active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <button type="button" className="navbar__signin">
            Sign In
          </button>

          <button type="button" className="navbar__signup">
            Sign Up
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="navbar__mobile">
          <button
            type="button"
            className="navbar__menu"
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a className="navbar__mobile-brand" href="#home">
            <img
              src={logo}
              alt="Dev Stack logo"
            />

            <span>
              Dev <strong>Stack</strong>
            </span>
          </a>

          <div className="navbar__mobile-actions">
            <button type="button" className="navbar__mobile-signin">
              Sign In
            </button>

            <button type="button" className="navbar__mobile-signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;