import "./style.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyTechnologies from "./HardSkills";
import ForMyTeam from "./forMyTeam";
import character from "../../image/character.png";

function HomePage() {
  return (
    <div className="countainer">
      <header className="header">
        <div className="headerCountainer">
          <h1 className="logo">Matheus</h1>
          <nav className="navMenu">
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
      <section className="about">
        <div className="aboutCountainer">
          <div className="textAboutMe">
            <div className="myPicture">
              <img src={character} alt="My character image" />
            </div>
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
          <div className="cv">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;HIRE ME&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;HIRE/ME&nbsp;
              </span>
            </button>
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;DOWNLOAD CV&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;DOWNLOAD/CV&nbsp;
              </span>
            </button>
          </div>
          <h1 className="title">My Skills</h1>
          <div className="mySkills">
            <div className="softSkill">
              <h3 className="titleSkills">My soft skills</h3>
              <ForMyTeam />
            </div>
            <div className="hardSkill">
              <h3 className="titleSkills">My hard skills</h3>
              <MyTechnologies />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footerCountainer">
          <h4 className="title">Matheus</h4>
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
            <div className="icons facebook">
              <a
                href="https://www.facebook.com/matheusgomesdasilvatavares?locale=pt_BR"
                target="_black"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="icons github">
              <a href="https://github.com/Matheus1033" target="_black">
                <FaGithub />
              </a>
            </div>
            <div className="icons instagram">
              <a
                href="https://www.instagram.com/matheus_gomes1033"
                target="_black"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="icons linkedin">
              <a
                href="https://www.linkedin.com/in/matheus-gomes-a96802253"
                target="_black"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
