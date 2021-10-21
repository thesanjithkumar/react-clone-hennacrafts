import "./Products.module.css";
import $ from "jquery";
import { Carousel } from "@trendyol-js/react-carousel";
import { GoQuote } from "react-icons/go";
import quote_icon from "../img/quotes_icon.png";
import TestimonialSingle from "./TestimonialSingle";
import { PinDropSharp } from "@material-ui/icons";

const DUMMY_DATA = [
  {
    id: "1",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.33-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Testimonial #3",
  },
  {
    id: "2",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.20-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Testimonial #3",
  },
  {
    id: "3",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.59-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Testimonial #3",
  },
  {
    id: "4",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.32-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Testimonial #3",
  },
  {
    id: "5",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.01.38-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Christine P",
  },
  {
    id: "6",
    src: "https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.45-AM.jpeg",
    body: "I love the results I get from the orange red henna. It covers my grey well. It does not however look orange like the model, on my hair. My only fault with it is, I wish I didn’t have to mix it the night before I want to use it. My schedule is hectic and I don’t always know when I have 3 hours to leave it on.",
    name: "Christine P",
  },
];

export default function Testimonials() {
  $("#slideshow > div:gt(0)").hide();

  setInterval(function () {
    $("#slideshow > div:first").next().end().appendTo("#slideshow");
  }, 12000);
  function stopSlide() {
    clearInterval(setInterval);
  }
  // var interval;
  // $("#slideshow").hover(
  //   function () {
  //     clearInterval(interval);
  //   },
  //   function () {
  //     interval = setInterval(setInterval, 20000);
  //   }
  // );
  return (
    <main className="testimonials">
      <div className="testimonials_heading">
        <p className="clientsay">
          <hr className="client_hr" />
          CLINET SAY
          <hr className="client_hr" />
        </p>
        <p className="testimonials_h1">TESTIMONIALS</p>
      </div>
      <div
        className="testimonial_main"
        id="slideshow"
        // onMouseEnter={stopSlide}
      >
        {/* <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.33-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Testimonial #3</p>
        </div>
        <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.20-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Testimonial #3</p>
        </div>
        <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.59-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Testimonial #3</p>
        </div>
        <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.32-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Testimonial #3</p>
        </div>
        <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.01.38-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Christine P</p>
        </div>
        <div className="testimonial_child">
          <img src={quote_icon} className="quotes" />
          <img
            className="testimonial_img"
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.45-AM.jpeg"
          />
          <p className="testimonialscontent">
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className="br" />
          <p className="testimonial_name">Christine P</p>
        </div> */}
        {DUMMY_DATA.map((items) => (
          <TestimonialSingle
            src={items.src}
            body={items.body}
            name={items.name}
          />
        ))}
      </div>
    </main>
  );
}
