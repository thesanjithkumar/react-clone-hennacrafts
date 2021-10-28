import { useState } from 'react';
import classes from './shoppagecontainer.module.css';
import ProductMenu from './ProductsMenu';
import FilterByRating from './FilterByRating';
import RangeSlider from './RangeSlider';
import ProductCategory from './ProductCategory';
import SelectCurrency from './SelectCurrency';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';


function ShopPageContainer() {
  const filterctx=useContext(ProductFilterContext);

  //product
  const [currentpage,setCurrentPage]=useState(1);
  
  function CurrentPage(curpage)
  {
    setCurrentPage(curpage);
  }

  var last_item=currentpage*9;
  var first_item=last_item-9;
  //var product_info=filterctx.products[filterctx.products.length-1].slice(first_item,last_item);
  console.log(filterctx.products)
  var product_info=filterctx.products.slice(first_item,last_item);
  // var product_info=prod_info
  return (
  <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info} setCurrentPage={CurrentPage} curpage={currentpage}/>
    </div>
    <div className={classes.filter}>
      <h2>Products Filter</h2>
      <RangeSlider />
      <FilterByRating />
      <input type='search' placeholder='Search products...' className={classes.search} />
      <ProductCategory />
      <SelectCurrency />
      <RecentlyViewedProducts />
    </div>
  </div>
  );
}

export default ShopPageContainer;