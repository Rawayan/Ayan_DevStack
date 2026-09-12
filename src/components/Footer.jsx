import "./Footer.css";

function Footer() {
  const productLinks = [
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "Features", href: "#features" },
  ];

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-mark">DS</span>
              <span className="gradient-text">Dev Stack</span>
            </a>

            <p className="footer__description">
              Explore, organize, and build your ideal development
              technology stack in one place.
            </p>

            <div className="footer__socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3>Product</h3>

              <ul>
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3>Company</h3>

              <ul>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3>Legal</h3>

              <ul>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;