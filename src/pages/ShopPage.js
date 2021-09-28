import RangeSlider from '../components/shop_page/RangeSlider';
import classes from './shoppage.module.css';
import { useState } from 'react';
import prod_info from '../components/shop_page/ProductInfo';
import ProductMenu from '../components/shop_page/ProductsMenu';
import FilterByRating from '../components/shop_page/FilterByRating';

function ShopPage() {

  //product
  const [currentpage,setCurrentPage]=useState(1);
  //const [noProd,setNoProd]=useState(9);
  
  function CurrentPage(curpage)
  {
    setCurrentPage(curpage);
  }

  var last_item=currentpage*9;
  var first_item=last_item-9;
  var product_info=prod_info.slice(first_item,last_item);

  return (
    <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info} setCurrentPage={CurrentPage}/>
    </div>
    <div className={classes.filter}>
      <h2>Products Filter</h2>
      <RangeSlider/>
      <FilterByRating/>
    </div>
  </div>
  );
}

export default ShopPage;
