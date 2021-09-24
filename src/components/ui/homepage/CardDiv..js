import classes from "./Products.module.css";

export default function CardDiv() {
  return (
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
  );
}
