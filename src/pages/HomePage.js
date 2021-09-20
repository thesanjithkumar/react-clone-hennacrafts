// import Card from "../components/ui/Card";
import classes from "./HomePage.module.css";
function HomePage() {
  function hover_henna() {
    var henna = document.getElementById("product_henna");
    henna.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-with-kit-300x300.jpg"
    );
  }

  function unhover_henna() {
    var henna = document.getElementById("product_henna");
    henna.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
    );
  }

  function hover_facepack1() {
    var facepack1 = document.getElementById("product_facepack1");
    facepack1.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_2.jpg"
    );
  }

  function unhover_facepack1() {
    var facepack1 = document.getElementById("product_facepack1");
    facepack1.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
    );
  }

  function hover_facepack2() {
    var facepack2 = document.getElementById("product_facepack2");
    facepack2.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x_2.jpg"
    );
  }

  function unhover_facepack2() {
    var facepack2 = document.getElementById("product_facepack2");
    facepack2.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
    );
  }
  function hover_facepack3() {
    var facepack3 = document.getElementById("product_facepack3");
    facepack3.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x_2.jpg"
    );
  }

  function unhover_facepack3() {
    var facepack3 = document.getElementById("product_facepack3");
    facepack3.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
    );
  }
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
      {/* face pack products section */}
      <div className={classes.products}>
        <div className={classes.product_heading_div}>
          <h1 id="henna" className={classes.product_heading}>
            <a href="" className={classes.product_heading}>
              HENNA
            </a>
          </h1>
          <h1 id="indigo" className={classes.product_heading}>
            <a href="" className={classes.product_heading}>
              INDIGO
            </a>
          </h1>
        </div>
        <a href="">
          <div className={classes.product_card}>
            <img
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/orange-peel-1.jpg"
            />
            <p>Henna</p>
            <h3>7 Times filter Organic Henna for body art</h3>
            <p className={classes.product_price}>$0.00</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/pudina-leaves.jpg"
            />
            <p>Henna</p>
            <h3>Ambba Haldi face pack</h3>
            <p>$50.00 – $100.00 — or subscribe and save 15%</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/nagarmota-with-kit-300x300.jpg"
            />
            <p>Henna</p>
            <h3>7 Times filter Organic Henna for body art</h3>
            <p className={classes.product_price}>$0.00</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              id="product_henna"
              onMouseEnter={hover_henna}
              onMouseLeave={unhover_henna}
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
            />
            <p>Henna</p>
            <h3>7 Times filter Organic Henna for body art</h3>
            <p className={classes.product_price}>$100.00</p>
          </div>
        </a>
        <a href="/shop" className={classes.product_button}>
          View All Products
        </a>
      </div>
      {/* face pack products section */}
      <div className={classes.products}>
        <div className={classes.product_heading_div}>
          <h1 id="henna" className={classes.product_heading}>
            <a href="" className={classes.product_heading}>
              FACE PACK
            </a>
          </h1>
          <h1 id="indigo" className={classes.product_heading}>
            <a href="" className={classes.product_heading}>
              POWDER
            </a>
          </h1>
        </div>
        <a href="">
          <div className={classes.product_card}>
            <img
              id="product_facepack1"
              onMouseEnter={hover_facepack1}
              onMouseLeave={unhover_facepack1}
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
            />
            <p>Face Pack</p>
            <h3>Aloe vera face pack</h3>
            <p className={classes.product_price}>$0.00</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              id="product_facepack2"
              onMouseEnter={hover_facepack2}
              onMouseLeave={unhover_facepack2}
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
            />
            <p>Face pack</p>
            <h3>Ambba Haldi face pack</h3>
            <p>$0.00</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              id="product_facepack3"
              onMouseEnter={hover_facepack3}
              onMouseLeave={unhover_facepack3}
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
            />
            <p>Face Pack</p>
            <h3>Chandan face pack</h3>
            <p className={classes.product_price}>$0.00</p>
          </div>
        </a>
        <a href="">
          <div className={classes.product_card}>
            <img
              className={classes.product_image}
              src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
            />
            <p>Face Pack</p>
            <h3>Hibiscus face pack</h3>
            <p className={classes.product_price}>0.00</p>
          </div>
        </a>
        <a href="/shop" className={classes.product_button}>
          View All Products
        </a>
      </div>
      {/* face pack products section */}
    </main>
  );
}

export default HomePage;
