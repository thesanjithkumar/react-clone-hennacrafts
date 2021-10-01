import classes from './AboutPage.module.css';
import styles from './AboutPage.module.css';
import React from 'react';
import {FaStar} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
function AboutPage() {
  return (
    <div className={classes.container}>
      <div className={classes.aboutusborder}>
            <h3>About Us</h3>
            <img src="https://hennacrafts.com/wp-content/uploads/2019/06/leaf-free-img.png" alt="" />
      </div>
      <div className={classes.border}>
        <div className={classes.contents}>
          <h1>We Are Your Favorite Store.</h1>
          <div className={classes.parafirst}>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc
            voluptates lobortis, varius, potentiplaceat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos
             ultrices natus distinctio ultri consequuntur numqu.
          </div>
          <p>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, 
            hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.
          </p>
          <p>
          Integer ducimus gravida ornare sociosqu. Wisi, fringilla volutpat! Ultrices laborum a dapibus, veritatis.
          </p>
        </div>
      <img className={classes.packets} src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg" alt="" />
        </div>
      <div className={classes.animationborder}>
        <p id={styles["animationtext"]}>
        Numbers Speak For <br/> Themselves!
        </p>
      </div>
      <div className={classes.aboutpagedownpart}>
         <div className={classes.imageborder}>
             <div className={classes.animationimage}>
             </div>
             <div className={classes.rating}>
               {[...Array(5)].map(star=> {
               return  <FaStar size="7%"/>;
               })}
            </div>
              <p className={classes.firstpara}>
            Click edit button to change this text. Lorem ipsum dolor sit
             </p>
            <p className={classes.secondpara}>
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
             </p>
             <p className={classes.thirdpara}>
            ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <img className={classes.dummyimage} src="https://hennacrafts.com/wp-content/uploads/2020/11/y10.png" alt="" />
            <p className={classes.dummyimagetext}>Mila Kunit</p>
            </div>
          <div className={classes.detailsborder}>
          <img src="https://hennacrafts.com/wp-content/uploads/2020/11/organic-badge-freeimg-1.png" alt="" />
          <h2 className={classes.products}>Certified Products</h2>
          <p className={classes.detailsfirstpara}>Click edit button to change this text. Lorem ipsum</p>
          <p className={classes.detailssecondpara}>dolor sit amet</p>
          <p className={classes.boldtextfirstpara}>
          We Deal With Various Quality 
          </p>
          <p className={classes.boldtextsecondpara}>
          Organic Products!
          </p>
          <div className={classes.smallleaf}>
          <img src="https://hennacrafts.com/wp-content/uploads/2019/07/logo-leaf-new.png" alt="" />
          </div>
          <div className={classes.textborder}>
            <div>
               <ul className={classes.bullets}>
                 <li>
                   Fresh fruits
                 </li>
                 <li>
                  Dry fruits
                 </li>
                 <li>
                  Fresh vegetables
                 </li>
                 <li>
                  Dried vegetables
                 </li>
                 <li>
                  Dried vegetables
                 </li>
                 </ul>
            </div>
            <div className={classes.bullets1}>
            <ul>
                 <li className={classes.rightsidebullet} >
                  Beauty products
                 </li>
                 <li className={classes.rightsidebullet}>
                  Milk products
                 </li>
                 <li className={classes.rightsidebullet}>
                  Organic honey
                 </li>
                 <li className={classes.rightsidebullet}>
                   Organic tea
                 </li>
              </ul>
              </div>
          </div>
          <button className={classes.shopbutton}>
                <FaShoppingCart size='2em' color='white' />
                <div className={classes.shopbuttontext}>
                Start Shopping 
                </div>
              </button>
          </div>
          </div>
    </div>
  );
}
export default AboutPage;
