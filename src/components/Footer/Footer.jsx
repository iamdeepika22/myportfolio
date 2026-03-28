import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://github.com/iamdeepika22"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deepika22/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:deepikasaminathan22@email.com">Email</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Deepika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;