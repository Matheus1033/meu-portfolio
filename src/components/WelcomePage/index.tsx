import "./style.css";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";

function WelcomePage() {
  return (
    <div className="countainer">
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

      <div className="mid-text">
        <h2>
          Welcome to my application! To get to know you better, please write
          your name.
        </h2>
      </div>

      <form action="get" className="input-name">
        <div className="form">
          <div>
            <label htmlFor="name">
              <FaUser />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <button type="submit" className="bnt">
            <FaArrowRightLong />
          </button>
        </div>
      </form>

      <div className="line line1">
        <div className="wave wave1"></div>
      </div>
      <div className="line line2">
        <div className="wave wave2"></div>
      </div>
      <div className="line line3">
        <div className="wave wave3"></div>
      </div>
    </div>
  );
}

export default WelcomePage;
