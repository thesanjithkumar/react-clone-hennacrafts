import "./Products.module.css";
import welcome from "../img/welcome.png";
export default function WelcomeDiv() {
  return (
    <div className="welcomediv">
      <div className="welcometextdiv">
        <h3 className="welcometo">Welcome To</h3>
        <h2 className="welcomeheading">HENNA CRAFTS</h2>
        <div className="welcometotext">
          <p>
            Welcome to little luck you may produced you’re own historical
            performance to match the surrounding splendour! All competitors have
            free access to the Durham City Park and Ride system so no need to
            worry about our story.
          </p>
        </div>
        <a href="" className="learnmore">
          Learn More
        </a>
      </div>
      <div className="welcomeimgdiv">
        <img className="responsive" src={welcome} />
      </div>
    </div>
  );
}
