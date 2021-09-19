// import Card from "../components/ui/Card";
import classes from "./HomePage.module.css";
function HomePage() {
  return (
    <main>
      <div className={classes.cardContainer}>
        <div className={classes.card1}>
          <div className={classes.divbottom}>
            <p className={classes.card_p}>100% BEAUTIFUL</p>
            <h2>Henna</h2>
            <a href="" className={classes.cardbutton}>
              <span className={classes.buttontext}>View More</span>
            </a>
          </div>
        </div>
        <div className={classes.card2}>
          <div className={classes.divbottom}>
            <p className={classes.card_p}>100% NATURAL</p>
            <h2>Essential Oil</h2>
            <a href="" className={classes.cardbutton}>
              <span className={classes.buttontext}>View More</span>
            </a>
          </div>
        </div>
        <div className={classes.card3}>
          <div className={classes.divbottom}>
            <p className={classes.card_p}>INGREDIENTS THAT MAKE SENSE</p>
            <h2>Face Pack</h2>
            <a href="" className={classes.cardbutton}>
              <span className={classes.buttontext}>View More</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
