import "./style.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyTechnologies from "./MyTechnologies";

function HomePage() {
  return (
    <div className="countainer">
      <header className="header">
        <div className="headerCountainer">
          <h1 className="highlight">Matheus Gomes</h1>
          <nav>
            <input type="checkbox" id="menuHamburguer" />
            <label htmlFor="menuHamburguer">
              <div className="menu">
                <span className="hamburguer"></span>
              </div>
            </label>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="heroCountainer">
          <div className="technologiesPresentation">
            <span className="heroText">I work with</span>
            <span className="animatedHero"></span>
          </div>
          <div className="cv">
            <ul>
              <li>
                <a href="#" className="hireMe">
                  Hire me
                </a>
              </li>
              <li>
                <a href="#" className="download" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="About">
        <div className="aboutCountainer">
          <div className="myPicture"></div>
          <div className="textAboutMe">
            <p>
              My name is Matheus Gomes, I am 17 years old, and I am a front-end
              developer who enjoys creating websites and user interfaces. I have
              been practicing and improving my skills by working on personal
              projects, which provide me with fun and learning with the latest
              technologies. Currently, I am looking for opportunities to expand
              my knowledge and experience in full stack development. I believe
              that my dedication, along with my ability to learn and my skills,
              will allow me to contribute significantly to the success of the
              team and the company. I am excited to take on new challenges and
              learn from excellent professionals.
            </p>
          </div>
          <MyTechnologies />
        </div>
      </section>
      <footer className="footer">
        <h4 className="highlight">Matheus Gomes</h4>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <div className="icon facebook">
            <a
              href="https://www.facebook.com/matheusgomesdasilvatavares?locale=pt_BR"
              target="_black"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="icon github">
            <a href="https://github.com/Matheus1033" target="_black">
              <FaGithub />
            </a>
          </div>
          <div className="icon instagram">
            <a
              href="https://www.instagram.com/matheus_gomes1033"
              target="_black"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="icon linkedin">
            <a
              href="https://www.linkedin.com/in/matheus-gomes-a96802253"
              target="_black"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
