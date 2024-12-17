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
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
      <SiTypescript />
      <FaReact />
      <SiRedux />
      <SiStyledcomponents />
      <SiReactrouter />
      <FaNode />
      <SiExpress />
      <SiJest />
      <FaGitAlt />
      <FaGithub />
      <FaNpm />
      <SiPostgresql />
      <SiPrisma />
      <SiSwagger />
    </div>
  );
}

export default MyTechnologies;
