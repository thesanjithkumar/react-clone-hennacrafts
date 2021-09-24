// import Card from "../components/ui/Card";
import classes from "./HomePage.module.css";
import EssentailsCombo from "../components/ui/homepage/EssentailsCombo";
import FacepackPowder from "../components/ui/homepage/FacepackPowder";
import HennaIndigo from "../components/ui/homepage/HennaIndigo";

function HomePage() {
  // function hover_henna() {
  //   var ele = document.getElementById("product_henna");
  //   ele.setAttribute(
  //     "src",
  //     "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-with-kit-300x300.jpg"
  //   );
  // }

  // function unhover_henna() {
  //   var ele = document.getElementById("product_henna");
  //   ele.setAttribute(
  //     "src",
  //     "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
  //   );
  // }

  return (
    <main>
      {/* top div section */}
      <div className={classes.cardContainer}>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card1}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>100% BEAUTIFUL</p>
              <h2 className={classes.card_heading}>Henna</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card2}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>100% NATURAL</p>
              <h2 className={classes.card_heading}>Essential Oil</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card3}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>INGREDIENTS THAT MAKE SENSE</p>
              <h2 className={classes.card_heading}>Face Pack</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
      </div>
      {/* top div section */}
      {/* Henna And indigo section */}
      <HennaIndigo />
      {/* Henna And Indigo section */}
      {/* face pack powder section */}
      <FacepackPowder />

      {/* face pack powder section */}
      {/* Essentail oil and combo section */}
      <EssentailsCombo />
      {/* Essentail oil and combo section */}
    </main>
  );
}

export default HomePage;
