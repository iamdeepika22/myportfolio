import laptop from "../laptop-logo.png";
import "./Navbar/navbar.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="text-container">
          <h2>DEEPIKA SAMINATHAN</h2>
          <h1>Software Developer</h1>
          <a
            href="public/Deepika_Frontend_Developer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="right-section">
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default Home;
