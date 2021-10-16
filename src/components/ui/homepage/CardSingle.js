import "./ProductsSection.css";

export default function CardSingle(props) {
  return (
    <a href="/shop" className="card_a">
      <div className="topcard">
        <img src={props.src} className="responsive card_img" />
        <div className="cardbottom">
          <p className="card_p">{props.card_p}</p>
          <h2 className="card_heading">{props.card_heading}</h2>
          <a href="/shop" className="cardbutton">
            <span className="buttontext">View More</span>
          </a>
        </div>
      </div>
    </a>
  );
}
