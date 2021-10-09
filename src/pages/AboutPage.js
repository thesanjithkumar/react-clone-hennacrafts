import classes from "./AboutPage.module.css";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import Aos from "aos";
function AboutPage() {
  return (
    <div className={classes.container}>
      <div className={classes.aboutusborder}>
        <h3 className={classes.about_us}>About Us</h3>
        <img
          src="https://hennacrafts.com/wp-content/uploads/2019/06/leaf-free-img.png"
          alt=""
        />
      </div>
      <div className={classes.border}>
        <div className={classes.contents}>
          <h1 className={classes.merri}>We Are Your Favorite Store.</h1>
          <div className={classes.parafirst}>
            <p>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potentiplaceat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultri consequuntur numqu.
            </p>
          </div>
          <p>
            Officiis fuga harum porro et? Similique rhoncus atque! Netus
            blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus
            elit, hic sem tenetur anim amet quas, malesuada proident platea
            corrupti expedita.
          </p>
          <p>
            Integer ducimus gravida ornare sociosqu. Wisi, fringilla volutpat!
            Ultrices laborum a dapibus, veritatis.
          </p>
        </div>
        <img
          className={classes.packets}
          src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg"
          alt=""
        />
      </div>
      <div className={classes.animationborder}>
        <div className={classes.animationcontainer}>
          <section className={classes.counters}>
            <p className={classes.merri}>Numbers Speak For Themselves!</p>
            <div className={classes.counter}>
              <CountUp start={4800} end={5000} suffix="+" duration={3} />
              <h3>Curated Products</h3>
            </div>
            <div className={classes.counter} data-target="800+">
              <CountUp start={0} end={800} suffix="+" duration={3} />
              <h3>Curated Products</h3>
            </div>
            <div className={classes.counter} data-target="40+">
              <CountUp start={0} end={40} suffix="+" duration={3} />
              <h3>Product Categories</h3>
            </div>
          </section>
        </div>
      </div>
      <div className={classes.aboutpagedownpart}>
        <div className={classes.imageborder}>
          <div className={classes.outerbox}>
            <div className={classes.sliderimage}>
              <img
                src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/t3-ozdlcxn9osb2dbychcb6wjjjrwy2ab1xtau9paa2a0.jpg"
                alt=""
              />

              <img
                src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/t2-ozdlcmd7ervmi0eqb7fo2me0nahnpxt5rr0fxyqsco.jpg"
                alt=""
              />

              <img
                src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/t1-ozdlcjjou9rrj6itro7sd53mv4vk2uhyrd1zi4uyvc.jpg"
                alt=""
              />

              <img
                src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/indigo-3-pack-with-kit-ozdlbivzfqdkye02pqdc5wcnp3w8qngfmbm1scdbm0.jpg"
                alt=""
              />

              <img
                src="https://hennacrafts.com/wp-content/uploads/elementor/thumbs/indigo-with-kit-ozdlbd8yaq5v0q89mnxkqxrw4so1ggu1ljp4wolonc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={classes.rating}>
            {[...Array(5)].map((star) => {
              return <FaStar size="20%" color="gold" />;
            })}
          </div>
          <div className={classes.firstpara}>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit{" "}
              <br />
              amet, consectetur adipiscing elit. Ut elit tellus, luctus nec{" "}
              <br />
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className={classes.dummyborder}>
            <img
              className={classes.dummyimage}
              src="https://hennacrafts.com/wp-content/uploads/2021/04/cropped-nayab-henna-logo-300x100.jpg"
              alt="Logo"
            />
          </div>
        </div>
        <div className={classes.detailsborder}>
          <div className={classes.detailstoppart}>
            <img
              className={classes.detailsimage}
              src="https://hennacrafts.com/wp-content/uploads/2020/11/organic-badge-freeimg-1.png"
              alt=""
            />
            <div className={classes.textconatainer}>
              <h2 className={classes.products}>Certified Products</h2>
              <p className={classes.detailsfirstpara}>
                Click edit button to change this text. Lorem ipsum <br />
                dolor sit amet
              </p>
            </div>
          </div>
          <p className={classes.boldtextfirstpara}>
            We Deal With Various Quality
          </p>
          <p className={classes.boldtextsecondpara}>Organic Products!</p>
          <div className={classes.smallleaf}>
            <img
              src="https://hennacrafts.com/wp-content/uploads/2019/07/logo-leaf-new.png"
              alt=""
            />
          </div>
          <div className={classes.bulletsborder}>
            <div>
              <ul className={classes.bullets}>
                <li>
                  <FaCheckCircle color="green" />
                  <FontAwesomeIcon icon="fa-regular fa-circle-check" />
                  Fresh fruits
                </li>
                <li>
                  <FaCheckCircle color="green" />
                  Dry fruits
                </li>
                <li>
                  <FaCheckCircle color="green" />
                  Fresh vegetables
                </li>
                <li>
                  <FaCheckCircle color="green" />
                  Dried vegetables
                </li>
                <li>
                  <FaCheckCircle color="green" />
                  Dried vegetables
                </li>
              </ul>
            </div>
            <div className={classes.bullets1}>
              <ul>
                <li className={classes.rightsidebullet}>
                  <FaCheckCircle color="green" />
                  Beauty products
                </li>
                <li className={classes.rightsidebullet}>
                  <FaCheckCircle color="green" />
                  Milk products
                </li>
                <li className={classes.rightsidebullet}>
                  <FaCheckCircle color="green" />
                  Organic honey
                </li>
                <li className={classes.rightsidebullet}>
                  <FaCheckCircle color="green" />
                  Organic tea
                </li>
              </ul>
            </div>
          </div>
          <a href="#">
            <button className={classes.shopbutton}>
              <div className={classes.shopicon}>
                <FaShoppingCart size="1.5em" color="white" />
              </div>
              <div className={classes.shopcarttext}> Start Shopping </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
