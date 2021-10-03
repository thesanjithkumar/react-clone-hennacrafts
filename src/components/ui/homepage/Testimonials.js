import classes from "./Products.module.css";
import $ from "jquery";
import { Carousel } from "@trendyol-js/react-carousel";
import { GoQuote } from "react-icons/go";
import quote_icon from "./img/quotes_icon.png";

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
    <main className={classes.testimonials}>
      <div className={classes.testimonials_heading}>
        <p className={classes.clientsay}>
          <hr className={classes.hr} />
          CLINET SAY
          <hr className={classes.hr} />
        </p>
        <p className={classes.testimonials_h1}>TESTIMONIALS</p>
      </div>
      <div
        className={classes.testimonial_main}
        id="slideshow"
        // onMouseEnter={stopSlide}
      >
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.33-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Testimonial #3</p>
        </div>
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.20-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Testimonial #3</p>
        </div>
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.59-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Testimonial #3</p>
        </div>
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.32-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Testimonial #3</p>
        </div>
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.01.38-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Christine P</p>
        </div>
        <div className={classes.testimonial_child}>
          <img src={quote_icon} className={classes.quotes} />
          <img
            className={classes.testimonial_img}
            src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.45-AM.jpeg"
          />
          <p className={classes.testimonialscontent}>
            I love the results I get from the orange red henna. It covers my
            grey well. It does not however look orange like the model, on my
            hair. My only fault with it is, I wish I didn’t have to mix it the
            night before I want to use it. My schedule is hectic and I don’t
            always know when I have 3 hours to leave it on.
          </p>
          <hr className={classes.br} />
          <p className={classes.testimonial_name}>Christine P</p>
        </div>
      </div>
      {/* carousel pacakge */}
      {/* <Carousel
          id="slideshow"
          swiping={true}
          show={3.5}
          leftArrow={false}
          rightArrow={false}
          slide={3}
          infinite={true}
          // isSliding={2}
          transition={2}
          responsive={true}
        >
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.33-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Testimonial #3</p>
          </div>
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.20-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Testimonial #3</p>
          </div>
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.11.59-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Testimonial #3</p>
          </div>
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.32-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Testimonial #3</p>
          </div>
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.01.38-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Christine P</p>
          </div>
          <div className={classes.testimonial_child}>
            <img
              className={classes.testimonial_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-11.12.45-AM.jpeg"
            />
            <p className={classes.testimonialscontent}>
              I love the results I get from the orange red henna. It covers my
              grey well. It does not however look orange like the model, on my
              hair. My only fault with it is, I wish I didn’t have to mix it the
              night before I want to use it. My schedule is hectic and I don’t
              always know when I have 3 hours to leave it on.
            </p>
            <hr className={classes.br} />
            <p className={classes.testimonial_name}>Christine P</p>
          </div>
        </Carousel> */}
      {/* carousel pacakge */}
    </main>
  );
}
