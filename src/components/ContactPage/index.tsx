import "./style.css";
function ContactPage() {
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
      <section className="contact">
        <div className="contactCountainer">
          <h2>Contact</h2>
          <p>To assist you better, I'll need some additional information.</p>
          <form action="https://api.staticforms.xyz/submit" method="post">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Write your email address"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Write me a message"
              required
            ></textarea>
            <button type="submit">Send</button>

            <input
              type="hidden"
              name="accessKey"
              value="531ba43c-56a3-48d9-8834-a4499b3a1370"
            />
          </form>
        </div>
      </section>
      <footer>
        <div className="line line1">
          <div className="wave wave1"></div>
        </div>
        <div className="line line2">
          <div className="wave wave2"></div>
        </div>
        <div className="line line3">
          <div className="wave wave3"></div>
        </div>
      </footer>
    </div>
  );
}
export default ContactPage;
