import classes from "./Products.module.css";
import welcome from "./img/welcome.png";
export default function WelcomeDiv() {
  return (
    <div className={classes.welcomediv}>
      <div className={classes.welcometextdiv}>
        <h3 className={classes.welcometo}>Welcome To</h3>
        <h2 className={classes.welcomeheading}>HENNA CRAFTS</h2>
        <div className={classes.welcometotext}>
          <p>
            Welcome to little luck you may produced you’re own historical
            performance to match the surrounding splendour! All competitors have
            free access to the Durham City Park and Ride system so no need to
            worry about our story.
          </p>
        </div>
        <a href="" className={classes.learnmore}>
          Learn More
        </a>
      </div>
      <div className={classes.welcomeimgdiv}>
        <img className={classes.responsive} src={welcome} />
      </div>
    </div>
  );
}
