import "./style.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiReactrouter,
  SiExpress,
  SiJest,
  SiPostgresql,
  SiPrisma,
  SiSwagger,
} from "react-icons/si";

function MyTechnologies() {
  return (
    <div className="myTechnologies">
      <div className="item html">
        <FaHtml5 className="icon" />
        <p>HTML</p>
      </div>
      <div className="item css">
        <FaCss3Alt className="icon" />
        <p>CSS</p>
      </div>
      <div className="item js">
        <FaJsSquare className="icon" />
        <p>JavaScript</p>
      </div>
      <div className="item ts">
        <SiTypescript className="icon" />
        <p>TypeScript</p>
      </div>
      <div className="item react">
        <FaReact className="icon" />
        <p>React</p>
      </div>
      <div className="item redux">
        <SiRedux className="icon" />
        <p>Redux</p>
      </div>
      <div className="item sc">
        <SiStyledcomponents className="icon" />
        <p>Styled Components</p>
      </div>
      <div className="item reactRouter">
        <SiReactrouter className="icon" />
        <p>React Router</p>
      </div>
      <div className="item node">
        <FaNode className="icon" />
        <p>Node.js</p>
      </div>
      <div className="item express">
        <SiExpress className="icon" />
        <p>Express</p>
      </div>
      <div className="item jest">
        <SiJest className="icon" />
        <p>Jest</p>
      </div>
      <div className="item git">
        <FaGitAlt className="icon" />
        <p>GIT</p>
      </div>
      <div className="item">
        <FaGithub className="icon" />
        <p>GitHub</p>
      </div>
      <div className="item npm">
        <FaNpm className="icon" />
        <p>NPM</p>
      </div>
      <div className="item sql">
        <SiPostgresql className="icon" />
        <p>Postgres SQL</p>
      </div>
      <div className="item prisma">
        <SiPrisma className="icon" />
        <p>Prisma</p>
      </div>
      <div className="item swagger">
        <SiSwagger className="icon" />
        <p>Swagger</p>
      </div>
    </div>
  );
}

export default MyTechnologies;
