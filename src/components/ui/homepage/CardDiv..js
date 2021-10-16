import CardSingle from "./CardSingle";
import "./ProductsSection.css";
const DUMMY_DATA = [
  {
    id: "1",
    src: "https://hennacrafts.com/wp-content/uploads/elementor/thumbs/HENNA_HAIR_DYE_750x450_crop_center1-p5idt4luf1jenkaqqqjs3582j3yx669g87ac4pxn5c.jpg",
    card_p: "100% BEAUTIFUL",
    card_heading: "Henna",
  },
  {
    id: "2",
    src: "https://hennacrafts.com/wp-content/uploads/elementor/thumbs/HENNA_BEARD_DYE_bd57655b-d2d9-4bfe-b923-a4dfcb82cd7c_750x960_crop_center-p5idgr2cfklhse9x0dym99nkygyxtn4oiy26nka92o.jpg",
    card_p: "100% NATURAL",
    card_heading: "Essential Oil",
  },
  {
    id: "3",
    src: "https://hennacrafts.com/wp-content/uploads/elementor/thumbs/Oder_Now_f102dbca-6520-4f7f-b1e2-3ca5b3598763_750x600_crop_center-p5icp3n9e0qu9cftgxopequfvf98e6cxq36zfja640.jpg",
    card_p: "INGREDIENTS THAT MAKE SENSE",
    card_heading: "Face Pack",
  },
];

export default function CardDiv(props) {
  return (
    <div className="cardContainer">
      {/* <a href="/shop" className="card_a">
        <div className="topcard">
          <img
            src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/HENNA_HAIR_DYE_750x450_crop_center1-p5idt4luf1jenkaqqqjs3582j3yx669g87ac4pxn5c.jpg"
            className="responsive"
          />
          <div className="cardbottom">
            <p className="card_p">100% BEAUTIFUL</p>
            <h2 className="card_heading">Henna</h2>
            <a href="/shop" className="cardbutton">
              <span className="buttontext">View More</span>
            </a>
          </div>
        </div>
      </a> */}
      {DUMMY_DATA.map((items) => (
        <CardSingle
          key={props.id}
          src={items.src}
          card_p={items.card_p}
          card_heading={items.card_heading}
        />
      ))}
      {/* <a href="/shop" className="card_a">
        <div className="topcard">
          <img
            src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/HENNA_BEARD_DYE_bd57655b-d2d9-4bfe-b923-a4dfcb82cd7c_750x960_crop_center-p5idgr2cfklhse9x0dym99nkygyxtn4oiy26nka92o.jpg"
            className="responsive"
          />
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
        <div className="topcard">
          <img
            src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/Oder_Now_f102dbca-6520-4f7f-b1e2-3ca5b3598763_750x600_crop_center-p5icp3n9e0qu9cftgxopequfvf98e6cxq36zfja640.jpg"
            className="responsive"
          />
          <div className="cardbottom">
            <p className="card_p">INGREDIENTS THAT MAKE SENSE</p>
            <h2 className="card_heading">Face Pack</h2>
            <a href="/shop" className="cardbutton">
              <span className="buttontext">View More</span>
            </a>
          </div>
        </div>
      </a> */}
    </div>
  );
}
