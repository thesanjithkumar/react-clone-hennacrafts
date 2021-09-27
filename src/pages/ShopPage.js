import RangeSlider from '../components/shop_page/RangeSlider';
import classes from './shoppage.module.css';
import { useState } from 'react';
import prod_info from '../components/shop_page/product_info';
import ProductMenu from '../components/shop_page/products_menu';

function ShopPage() {
  const [rating_dropdown,setRatingDropdown]=useState(false);

  //product
  const [currentpage,setCurrentPage]=useState(1);
  //const [noProd,setNoProd]=useState(9);

  var last_item=currentpage*9;
  var first_item=last_item-9;
  var product_info=prod_info.slice(first_item,last_item);

  function ratingDropdown()
  {
    if(rating_dropdown==false)
    setRatingDropdown(true);
    else
    setRatingDropdown(false);
  }
  return (
    <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info}/>
    </div>
    {/*
   <div className={classes.filter}>
      <RangeSlider/>
      <div className={classes.dropdown}>
        <button type='button' onClick={ratingDropdown}>filter by rating</button>
        {rating_dropdown && <input type='text' placeholder='Search products...'/>
        }
      </div>
      </div>*/}
  </div>
  );
}

export default ShopPage;
