import classes from "./Blogs.module.css";

import { useHistory} from "react-router-dom";

export default function Blog2() {
  const history=useHistory();
  const handleRoute1=()=>{
    history.push('/Blog1')
  }
  const handleRoute3=()=>{
    history.push('/Blog3')
  }
  const handleRoute4 = () => {
    history.push("/BlogUncat1");
  };

  return (
    <div className={classes.container}>
      <div className={classes.whitecontainer}>
        <div className={classes.border}>
        <img className={classes.img13} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-41.jpeg" alt="" />
       <h1> WHICH HENNA IS GOOD FOR HAIR </h1>
       <button className={classes.slip_button} onClick={handleRoute4}>
        Uncategorized / By Murtaza Ali Najmi
       </button>
       <h4>WHICH HENNA IS GOOD FOR HAIR?</h4>
       <p>
          Henna is a boon to those with product sensitivities, allergies, and other medical conditions. In fact, henna is an excellent option for
          anyone seeking to avoid harsh chemicals. This natural hair color option also contributes to the overall health of your hair over time.
          However, all henna brands are not created equal. Start your healthy-hair journey by learning which henna is good for hair.
       </p>
       <img className={classes.img14}src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-41.jpeg" alt=""/>
       <h4>
       WHAT TO AVOID WHEN CHOOSING HENNA FOR HAIR
       </h4>
       <p>
          At one time, buying henna for hair was somewhat of a dicey proposition. Henna formulas sometimes contained questionable
          ingredients, with PPD being one of the worst. While most reputable henna companies no longer include para-phenylenediamine, it
          can occasionally be found on henna ingredient lists. Most brands also avoid metallic salts, but some do still use this hair-damaging
          ingredient.
       </p>
       <p><b>PPD Dangers:</b> PPD can cause allergic reactions in some users. Often, PPD triggers irritation and inflammation in the form of eczema. 
         Although extremely rare, allergic reactions involving anaphylaxis have even occurred.
         </p>
         <p>
       <b>  Metallic Salts Hazards: </b>Some henna brands and most over-the-counter, or OTC, conventional box dyes use metallic salts. Metallic 
         salts can cause hair to fry when mixed with other chemicals. It’s also very hard on hair, causing it to dry out and become dull-looking.
          These salts can even damage hair follicles.
         </p>
         <p>
         <b>Free Of…: </b>What’s missing from your henna hair color can be as important as what’s in it, especially if you avoid certain ingredients for
          health, spiritual, religious, or ethical reasons. Our henna for hair is:
         </p>
              
            <div className={classes.bullets1}>
              <ul>
                <li className={classes.rightsidebullet}>
                Vegan
                </li>
                <li className={classes.rightsidebullet}>
                Cruelty-free
                </li>
                <li className={classes.rightsidebullet}>
                Gluten-free
                </li>
                <li className={classes.rightsidebullet}>
                Sulfate-free
                </li>
                <li className={classes.rightsidebullet}>
                Paraben-free
                </li>
                <li>
                Phthalate-free
                </li>
              </ul>
            </div>
            <h4>
            WHAT TO LOOK FOR WHEN BUYING HENNA FOR HAIR
            </h4>
            <p>
            Now that you know the main offenders when it comes to henna ingredients, it’s important to know what to look for as well.
           Here are some factors to consider when choosing henna to color your hair.
            </p>
            <img className={classes.img15} src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-43.jpeg" alt="" />
            <p>
            <b> Quality: </b>Although it can be hard to tell if a henna producer sells high-quality hair dyes, words like “premium” can guide you in the
             right direction. The Henna Guys offers only premium henna that’s triple-sifted for a smooth paste. And you may have heard the term
             body art quality, or BAQ. This term applies to pure henna, or henna with no additional herbal or artificial ingredients. BAQ henna
             is finely sifted so it can enter the hair cuticle easily and rinses out easily. Body art quality henna also has a high dye content.
            </p>
            <p>
            We offer a range of colors in convenient, protective packaging. Our colors are formulated using only henna and/or indigo and 
            proprietary herbal blends. You’ll also find herbal hair powders to enhance your color or improve the look and feel of your hair. Be 
            sure to check out the color chart on each product page for an idea of what your new hair color will look like.
            </p>
       </div>
      </div>
      <button className={classes.slip_button1} onClick={handleRoute1}>
        Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute3}>
        Next Post
      </button>
    </div>
  );
}
