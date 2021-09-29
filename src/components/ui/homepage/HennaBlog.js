import classes from "./Products.module.css";
import styles from "./Products.module.css";

export default function HennaBlog() {
  return (
    <main>
      <div className={classes.hennablog_main}>
        <div className={classes.hennablogchild} id={styles["blog"]}>
          <a className={classes.links} href="/blog">
            <img
              className={classes.hennablog_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/03/9.jpg"
            />
            <div className={classes.bloginnerdiv}>
              <p className={classes.hennablogchild_heading}>
                The Best of The Best
              </p>
            </div>
          </a>
          <p className={classes.bloginnerdiv}>
            The Best Of The Best Bridal Foot Mehendi For Your Inspiration My
            last post got me thinking, we all have seen amazing bridal mehendi
            designs for our hands, but what about our feet? Every bride who
            applies henna for her wedding ceremony does apply henna on her feet
            too, and
          </p>
          <div className={classes.blogbuttondiv}>
            <a href="/blog" className={classes.blogbutton}>
              Read More
            </a>
          </div>
        </div>
        <div className={classes.hennablogchild} id={styles["blog"]}>
          <a className={classes.links} href="/blog">
            <img
              className={classes.hennablog_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-36-1024x725.jpeg"
            />
            <div className={classes.bloginnerdiv}>
              <p className={classes.hennablogchild_heading}>
                How to Use Tea Tree
              </p>
            </div>
          </a>
          <p className={classes.bloginnerdiv}>
            How to Use Tea Tree Oil for Hair Growth? By Beatuy Epic on September
            21, 2019 on Hair, Hair Growth Tea tree oil has been used from
            several years but has now started becoming popular. It has been
            first introduced in Austria. the people of Australia started using
            tea tree oil as antiseptic. Tea tree oil
          </p>
          <div className={classes.blogbuttondiv}>
            <a href="/blog" className={classes.blogbutton}>
              Read More
            </a>
          </div>
        </div>
        <div className={classes.hennablogchild} id={styles["blog"]}>
          <a className={classes.links} href="/blog">
            <img
              className={classes.hennablog_img}
              src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-6-1024x683.jpeg"
            />
            <div className={classes.bloginnerdiv}>
              <p className={classes.hennablogchild_heading}>
                20 Uses for Lavender Essentials
              </p>
            </div>
          </a>
          <p className={classes.bloginnerdiv}>
            Whether you are looking for a way to soothe a bug bite, calm an
            earache, make some homemade body products, or just unwind at the end
            of a busy day, Lavender Essential Oil is a must-have! Make sure to
            save these 20 uses for Lavender Essential Oil for future reference!
          </p>
          <div className={classes.blogbuttondiv}>
            <a href="/blog" className={classes.blogbutton}>
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className={classes.viewblog_div}>
        <a href="/blog" className={classes.viewblog}>
          View the Henna Craft Blog
        </a>
      </div>
    </main>
  );
}
