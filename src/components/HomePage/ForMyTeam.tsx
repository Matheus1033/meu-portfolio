import {
  FaHandsHelping,
  FaTools,
  FaRegClock,
  FaBrain,
  FaRegLightbulb,
  FaShieldAlt,
  FaCommentDots,
  FaBook,
  FaHands,
  FaPeace,
} from "react-icons/fa";
import {
  FaPeopleGroup,
  FaArrowsRotate,
  FaMagnifyingGlass,
} from "react-icons/fa6";
function ForMyTeam() {
  return (
    <div className="forMyTeam">
      <div className="item">
        <FaHandsHelping className="icon" />
        <p>Empathy</p>
      </div>
      <div className="item">
        <FaPeopleGroup className="icon" />
        <p>Collaboration</p>
      </div>
      <div className="item">
        <FaTools className="icon" />
        <p>Conflict Resolution</p>
      </div>
      <div className="item">
        <FaArrowsRotate className="icon" />
        <p>Adaptability</p>
      </div>
      <div className="item">
        <FaRegClock className="icon" />
        <p>Time Management</p>
      </div>
      <div className="item">
        <FaBrain className="icon" />
        <p>Critical Thinking</p>
      </div>
      <div className="item">
        <FaRegLightbulb className="icon" />
        <p>Innovation</p>
      </div>
      <div className="item">
        <FaShieldAlt className="icon" />
        <p>Resilience</p>
      </div>
      <div className="item">
        <FaMagnifyingGlass className="icon" />
        <p>Curiosity</p>
      </div>
      <div className="item">
        <FaCommentDots className="icon" />
        <p>Feedback Receptiveness</p>
      </div>
      <div className="item">
        <FaBook className="icon" />
        <p>Self-directed Learning</p>
      </div>
      <div className="item">
        <FaHands className="icon" />
        <p>Integrity</p>
      </div>
      <div className="item">
        <FaPeace className="icon" />
        <p>Patience</p>
      </div>
    </div>
  );
}

export default ForMyTeam;
