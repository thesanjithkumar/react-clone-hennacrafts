import classes from './product_description.module.css'
import styles from './product_description.module.css'
import ProdDescImage from './ProdDescImage';
import ProductBasicInfo from './ProductBasicInfo';
import { useLocation } from 'react-router';
import {useState} from 'react';
import {FaRegStar,FaStar} from 'react-icons/fa';
import RelatedProducts from './RelatedProducts';

function ProductDescription() {
  const [descinfo,setDescInfo]=useState(true);
  const location = useLocation();
  const [includeStar,setIncludeStar]=useState([false,false,false,false,false]);
  const [userRating,setUserRating]=useState(0);

  function IncludeStar(val)
  {
    setIncludeStar((prevStarVal)=>{
      var a=[...prevStarVal]
      a[val]=true;
      return a
    });
    val+=userRating;
    setUserRating(val);
  }

  function NotIncludeStar(val)
  {
    setIncludeStar((prevStarVal)=>{
      var a=[...prevStarVal]
      a[val]=false;
      return a
    });
    val=userRating-val;
    setUserRating(val);  
  }

  function DescInfo()
  {
    setDescInfo(true);
  }

  function Review()
  {
    setDescInfo(false);
  }

  return <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.header}>
        <ProdDescImage item={location.state.descProduct} />
        <ProductBasicInfo item={location.state.descProduct}/>
      </div>
      <div className={classes.prodbody}>
        <div className={classes.bodymenu}>
        <div className={classes.description} id={descinfo ?styles['curinfo']:styles['notcurinfo']}onClick={DescInfo}>
          Description
        </div>
        <div className={classes.review} id={!descinfo ?styles['curinfo']:styles['notcurinfo']} onClick={Review}>
          Review
        </div>
        </div>
        {descinfo && <div >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident, quas omnis tenetur facilis, ad porro fugiat, repudiandae consequatur recusandae aspernatur? Cum suscipit tenetur nihil cumque id similique voluptatibus libero alias consectetur quae officiis, quia assumenda aperiam, quis praesentium. Fugit corporis ratione, veritatis enim odit amet reiciendis quisquam? Architecto libero, omnis alias officiis quam sed illum. Fugit harum impedit ratione veniam magnam rerum maiores, consequuntur ipsam corrupti consequatur ex labore, voluptatem nesciunt possimus officia asperiores! Debitis id animi sapiente eos minus odio impedit dignissimos rerum, quas vero laudantium sequi iusto modi. Blanditiis eum error praesentium ipsa aperiam eos provident sunt!
          </div>}
        {!descinfo && 
        <div className={classes.review_container}>
          <div className={classes.reviewinfo}>
            There are no reviews yet.
          </div>
          <div className={classes.addreview}>
            <h3>Add a review</h3>
            <form id={styles['addReviewFrm']}>
            <p>Your email address will not be published. Required fields are marked *</p>
            <label htmlFor='yourRating'>Your rating *</label>
            <p>
              <span><FaRegStar className={classes.nofillstar1} /></span>
              <span><FaRegStar className={classes.nofillstar2} /></span>
              <span><FaRegStar className={classes.nofillstar3} /></span>
              <span><FaRegStar className={classes.nofillstar4} /></span>
              <span><FaRegStar className={classes.nofillstar5} /></span>
            </p>
            <label htmlFor='yourReview'>Your review *</label>
            <p>
            <textarea name='yourReview' cols='45' rows='8' required></textarea>
            </p>
            <label htmlFor='userName'>Name *</label>
            <p>
            <input type='text' name='userName' size='30'required/>
            </p>
            <label htmlFor='mail'>Email *</label>
            <p>
            <input type='email' name='mail' size='30'required/>
            </p>
            <p>
              <input type='checkbox' /> Save my name, email, and website in this browser for the next time I comment.
            </p>
            <p>
              <button type='button' className={classes.submit}>Submit</button>
            </p>
            </form>
          </div>
        </div>
        }
      </div>
      <div className={classes.footer}>
        <h2>Related Products</h2>
        <div className={classes.related}><RelatedProducts item={location.state.descProduct}/></div>
      </div>
    </div>
  </div>
}

export default ProductDescription;