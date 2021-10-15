import "./Products.module.css";

export default function TopDiv() {
  return (
    <div className="topdiv">
      <a href="/shop" className="link">
        <div className="overlay"></div>
        {/* <img
          className={classes.topdivimg}
          src="https://hennacrafts.com/wp-content/uploads/2021/03/3-1.jpg"
        /> */}
        <div className="toptextdiv">
          <h3 className="topdivtitle">
            RAW, VEGAN, CRUELTYFREE & NON GMO HAIR DYE
          </h3>
          <h2 className="topdivsubtitle">
            COLOR, CONDITION AND COVER YOUR GRAYS NATURALLY !
          </h2>
          <a href="/shop" className="topdivbutton">
            Shop our collection
          </a>
        </div>
      </a>
    </div>
  );
}
