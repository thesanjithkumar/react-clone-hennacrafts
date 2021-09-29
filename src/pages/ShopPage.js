import { useState } from 'react';
import classes from './shoppage.module.css';
import ProductMenu from '../components/shop_page/ProductsMenu';
import FilterByRating from '../components/shop_page/FilterByRating';
import RangeSlider from '../components/shop_page/RangeSlider';
import ProductCategory from '../components/shop_page/ProductCategory';
import SelectCurrency from '../components/shop_page/SelectCurrency';
import RecentlyViewedProducts from '../components/shop_page/RecentlyViewedProducts';
import {ProductFilterContextProvider} from '../components/shop_page/ProductFilterContext';
import {useContext} from 'react';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';

function ShopPage() {
  const filterctx=useContext(ProductFilterContext);

  //product
  const [currentpage,setCurrentPage]=useState(1);
  
  function CurrentPage(curpage)
  {
    setCurrentPage(curpage);
  }
  console.log(filterctx.products);
  var last_item=currentpage*9;
  var first_item=last_item-9;
  var product_info=filterctx.products.slice(first_item,last_item);
  console.log(filterctx.products)

  return (
    <ProductFilterContextProvider>
    <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info} setCurrentPage={CurrentPage}/>
    </div>
    <div className={classes.filter}>
      <h2>Products Filter</h2>
      <RangeSlider/>
      <FilterByRating/>
      <input type='search' placeholder='Search products...' className={classes.search}/>
      <ProductCategory/>
      <SelectCurrency/>
      <RecentlyViewedProducts/>
    </div>
  </div>
  </ProductFilterContextProvider>
  );
}

export default ShopPage;
