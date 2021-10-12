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
  return (
    <div>

        <img className={classes.slip__imgr} scr="https://secure.gravatar.com/avatar/ab839e2928d6f62db73a8755ebcbab8e?s=120&d=mm&r=g"/>
        <caption className={classes.slip__cap}>Murtaza Ali Najmi</caption>
     
      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-24.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            Eucalyptus Oil A Natural Wake-me-up
          </p>
          <p className={classes.slip_description}>
            Eucalyptus Oil: A Natural Wake-me-up For You and Your Skin [History,
            Uses and Skin Benefits] We may be familiar with eucalyptus oil for
            the respiratory aid it provides. Got clogged nose? Diffuse some of
            this oil! Having trouble with a bad cough? Lozenges with eucalyptus
            will just do the trick. This oil even excites the senses. Need …
          </p>
          <button className={classes.slip_button} onClick={handleRoute3}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/9-1.jpg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            Benefits of Henna For Hair Health
          </p>
          <p className={classes.slip_description}>
            Eucalyptus Oil: A Natural Wake-me-up For You and Your Skin [History,
            Uses and Skin Benefits] We may be familiar with eucalyptus oil for
            the respiratory aid it provides. Got clogged nose? Diffuse some of
            this oil! Having trouble with a bad cough? Lozenges with eucalyptus
            will just do the trick. This oil even excites the senses. Need …
          </p>
          <button className={classes.slip_button} onClick={handleRoute1}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/image-result-for-eucalyptus.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            Eucalyptus Oil for Cold and Flu Season
          </p>
          <p className={classes.slip_description}>
            Eucalyptus Oil for Cold and Flu Season Eucalyptus essential oil is a
            wonderful multi-faceted oil with many therapeutic uses. You can find
            it as an ingredient in many products you find in neighborhood
            stores. In fact, it can be found in decongestant, cough and cold
            medicines, as a chest rub and in soaps, rash creams …
          </p>
          <button className={classes.slip_button} onClick={handleRoute2}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-2.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            17 Spine Tattoo Designs That Will Chill You To The Bone
          </p>
          <p className={classes.slip_description}>
            17 Spine Tattoo Designs That Will Chill You To The Bone"
            description="17 Spine Tattoo Designs That Will Chill You To The Bone
            The spinal cord is seen as the core of our being. Why not get a
            tattoo that makes the most of this esthetic and meaningful body
            part? PUBLICIDAD According to Hinduism and Buddhism, our body
            possesses a set of energy centers call chakras, all …
          </p>
          <button className={classes.slip_button} onClick={handleRoute3}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/oral-health-systems-in-portugal-sweden-and-roman.png" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            13 USES FOR TEA TREE OIL THAT WILL CHANGE YOUR LIFE
          </p>
          <p className={classes.slip_description}>
            17 Spine Tattoo Designs That Will Chill You To The Bone"
            description="13 USES FOR TEA TREE OIL THAT WILL CHANGE YOUR LIFE Not
            to be confused with an extract of the tea plant (Camellia sinensus),
            tea tree oil is distilled from the leaves of the Australian tea tree
            (Melalenca alternifolia.) Although it is highly toxic when ingested,
            thanks to its antibiotic, anti- fungal, antiseptic, expectorant and
            antiviral …
          </p>
          <button className={classes.slip_button} onClick={handleRoute1}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-6-1024x683.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            20 Uses for Lavender Essential Oil
          </p>
          <p className={classes.slip_description}>
            Whether you are looking for a way to soothe a bug bite, calm an
            earache, make some homemade body products, or just unwind at the end
            of a busy day, Lavender Essential Oil is a must-have! Make sure to
            save these 20 uses for Lavender Essential Oil for future reference!
            20 Ways to Use Lavender …
          </p>
          <button className={classes.slip_button} onClick={handleRoute2}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/indigo-plants-wholesale-price-and-mandi-rate-for-i-1024x576.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            8 Brilliant Benefits Of Using Indigo Powder For Hair
          </p>
          <p className={classes.slip_description}>
            W8 Brilliant Benefits Of Using Indigo Powder For Hair WHAT IS INDIGO
            POWDER? Indigo powder is a dye that comes from the crushed leaves of
            the indigo plant. It is a natural dye that you can use to color your
            hair or beard, with or without henna. It is green in appearance. IS
            INDIGO POWDER, …
          </p>
          <button className={classes.slip_button} onClick={handleRoute3}>
            Read More »
          </button>
        </div>
      </div>

      <div className={classes.slip}>
        <img scr="https://hennacrafts.com/wp-content/uploads/2021/03/how-to-use-henna-1024x683.jpeg" />
        <div className={classes.slip_body}>
          <p className={classes.slip_title}>
            5 Basic Steps To Apply Henna For Grey Hair
          </p>
          <p className={classes.slip_description}>
            If you are looking for hair that is long, strong, smooth and thick,
            then artificial products will never suit you. It will yield better
            results if you go for something that is natural. Natural remedies
            add shine and health to the hair. If you are feeling annoyed with
            grey hair, you can easily cover them using …
          </p>
          <button className={classes.slip_button} onClick={handleRoute1}>
            Read More »
          </button>
        </div>
      </div>
    </div>
  );
}
