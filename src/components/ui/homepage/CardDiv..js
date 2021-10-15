import "./ProductsSection.css";

export default function CardDiv() {
  return (
    <div className="cardContainer">
      <a href="/shop" className="card_a">
        <div className="card1">
          <div className="cardbottom">
            <p className="card_p">100% BEAUTIFUL</p>
            <h2 className="card_heading">Henna</h2>
            <a href="/shop" className="cardbutton">
              <span className="buttontext">View More</span>
            </a>
          </div>
        </div>
      </a>
      <a href="/shop" className="card_a">
        <div className="card2">
          <div className="cardbottom">
            <p className="card_p">100% NATURAL</p>
            <h2 className="card_heading">Essential Oil</h2>
            <a href="/shop" className="cardbutton">
              <span className="buttontext">View More</span>
            </a>
          </div>
        </div>
      </a>
      <a href="/shop" className="card_a">
        <div className="card3">
          <div className="cardbottom">
            <p className="card_p">INGREDIENTS THAT MAKE SENSE</p>
            <h2 className="card_heading">Face Pack</h2>
            <a href="/shop" className="cardbutton">
              <span className="buttontext">View More</span>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
