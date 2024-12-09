import "./style.css";

function WelcomePage() {
  return (
    <div>
      <h1>
        Welcome to my application! To get to know you better, please write your
        name.
      </h1>
      <form action="get">
        <input type="text" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WelcomePage;
