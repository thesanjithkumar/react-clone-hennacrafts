import classes from "./Products.module.css";

export default function TopDiv() {
  return (
    <div className={classes.topdiv}>
      <div className={classes.overlay}></div>
      <a href="/shop" className={classes.link}>
        {/* <img
          className={classes.topdivimg}
          src="https://hennacrafts.com/wp-content/uploads/2021/03/3-1.jpg"
        /> */}
        <div className={classes.toptextdiv}>
          <h3 className={classes.topdivtitle}>
            RAW, VEGAN, CRUELTYFREE & NON GMO HAIR DYE
          </h3>
          <h2 className={classes.topdivsubtitle}>
            COLOR, CONDITION AND COVER YOUR GRAYS NATURALLY !
          </h2>
          <a href="/shop" className={classes.topdivbutton}>
            Shop our collection
          </a>
        </div>
      </a>
    </div>
  );
}
