import classes from "./Blogs.module.css";
import { useHistory } from "react-router-dom";

export default function BlogPage() {
  const history = useHistory();
  const handleRoute1 = () => {
    history.push("/Blog1");
  };
  const handleRoute2 = () => {
    history.push("/Blog2");
  };
  const handleRoute3 = () => {
    history.push("/Blog3");
  };
  const handleRoute4 = () => {
    history.push("/Blog4");
  };
  const handleRoute5 = () => {
    history.push("/Blog5");
  };
  const handleRoute6 = () => {
    history.push("/Blog6");
  };

  return (
    <div>
      
      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/9.jpg" />
        <div className={classes.slip_body}>
          <h1>
            Foot Mehendi For Your Inspiration
          </h1>
          <p className={classes.slip_description}>
            The Best Of The Best Bridal Foot Mehendi For Your Inspiration My
            last post got me thinking, we all have seen amazing bridal mehendi
            designs for our hands, but what about our feet? Every bride who
            applies henna for her wedding ceremony does apply henna on her feet
            too, and doesn’t it then make sense …
          </p>
          <button className={classes.slip_button} onClick={handleRoute1}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-41-1024x576.jpeg" />
        <div className={classes.slip_body}>
          <h1>WHICH HENNA IS GOOD FOR HAIR</h1>
          <p className={classes.slip_description}>
            WHICH HENNA IS GOOD FOR HAIR? Henna is a boon to those with product
            sensitivities, allergies, and other medical conditions. In fact,
            henna is an excellent option for anyone seeking to avoid harsh
            chemicals. This natural hair color option also contributes to the
            overall health of your hair over time. However, all henna brands are
            not …
          </p>
          <button className={classes.slip_button} onClick={handleRoute2}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-38-1024x683.jpeg" />
        <div className={classes.slip_body}>
          <h1>
            SHOULD I GO DARKER EVERYTHING YOU NEED TO KNOW ABOUT HENNA FOR
            BRUNETTES
          </h1>
          <p className={classes.slip_description}>
            SHOULD I GO DARKER? EVERYTHING YOU NEED TO KNOW ABOUT HENNA FOR
            BRUNETTES Switching up your hair color can be exciting, especially
            if the change is dramatic. Whether you want to transform your hair
            or enhance your existing shade, black or brown henna could be the
            change you’re looking for. From caramel to espresso, there’s …
          </p>
          <button className={classes.slip_button} onClick={handleRoute3}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/low-maintenance-hair-color-trends-or-teen-vogue-1024x1024.jpeg" />
        <div className={classes.slip_body}>
          <h1>
            NATURAL HAIR COLOR 101 HENNA HAIR DYE TIPS
          </h1>
          <p className={classes.slip_description}>
            NATURAL HAIR COLOR 101 HENNA HAIR DYE TIPS" description="NATURAL
            HAIR COLOR 101: HENNA HAIR DYE TIPS Natural Hair Color 101: Henna
            Hair Dye Tips Henna hair color is a great option for anyone seeking
            out hair care products containing only natural ingredients. But
            henna differs from conventional hair color in other ways, too. From
            information about the application process to color- and condition-
            enhancing techniques, these henna …
          </p>
          <button className={classes.slip_button} onClick={handleRoute4}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-36-1024x725.jpeg" />
        <div className={classes.slip_body}>
          <h1>
            How to Use Tea Tree Oil for Hair Growth
          </h1>
          <p className={classes.slip_description}>
            How to Use Tea Tree Oil for Hair Growth? By Beatuy Epic on September
            21, 2019 on Hair, Hair Growth Tea tree oil has been used from
            several years but has now started becoming popular. It has been
            first introduced in Austria. the people of Australia started using
            tea tree oil as antiseptic. Tea tree oil is an amazing beauty
            product …
          </p>
          <button className={classes.slip_button} onClick={handleRoute5}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img className={classes.slip__img} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-32-1024x768.jpeg" />
        <div className={classes.slip_body}>
          <h1>
            HOW TO GET THE BEST RESULTS FROM DARK BROWN HENNA HAIR COLOR TIPS
          </h1>
          <p className={classes.slip_description}>
            HOW TO GET THE BEST RESULTS FROM DARK BROWN HENNA HAIR COLOR Whether
            you’re a longtime user or new to henna for hair, you’ve probably
            discovered that henna isn’t a one-size-fits-all product. Henna works
            with variations in your hair color to produce a unique shade. Other
            products you use, the softness of the water in your …
          </p>
          <button className={classes.slip_button} onClick={handleRoute6}>
            Read More »
          </button>
        </div>
      </div>

     

    </div>
  );
}
