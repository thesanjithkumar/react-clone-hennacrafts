import { createContext, useState } from 'react';
import prod_info from './ProductInfo';

const ProductFilterContext = createContext({
  products:[],
  totalProducts:0,
  filterProductByCategory:(category_val)=>{},
  filterProductByPriceRange:(price_range)=>{},
  filterProductByRating:(rating_range)=>{},
  filterByCategoryApplied:'',
  resetFilter:()=>{},
  sortProducts:()=>{},
  UStoCanadianDollar:false,
  UStoCanadianDollarHandler:()=>{}
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState(prod_info);
  const [ftrbycategory,setFilterByCategory]=useState('none');
  const [UStoCanadian,setUStoCanadian]=useState(false);

  function filterByProductCategoryHandler(category_val) {
    setFilterByCategory(category_val)
    setFilteredProducts(() => {
      return prod_info.filter((item)=>{
        return item.category==category_val}
        )
    });
  }

  function filterByPriceRangeHandler(price_range) {
    setFilteredProducts(() => {
      return prod_info.filter((item)=>{
        return item.price>=price_range[0] && item.price<=price_range[1]})
    });
  }

  function filterProductByRatingHandler(rating_range){
    setFilteredProducts(() => {
      return prod_info.filter((item)=>{
        return item.rating>=rating_range[0] && item.rating<=rating_range[1]})
    }); 
  }

  function sortProductsHandler()
  {
    var val=document.getElementById("sortingdropdown").value;
    if(val==6)
    {
      var dupinfo=[...prod_info];
      dupinfo.sort(function(prod1,prod2){return prod2.price-prod1.price});
      setFilteredProducts(dupinfo);
    }
    else if(val==5)
    {
      var dupinfo=[...prod_info];
      dupinfo.sort(function(prod1,prod2){return prod1.price-prod2.price});
      setFilteredProducts(dupinfo);
    }
    else if(val==4)
    {
      setFilteredProducts(prod_info);
    }
    else if(val==3)
    {
      var dupinfo=[...prod_info];
      dupinfo.sort(function(prod1,prod2){return prod2.rating-prod1.rating});
      setFilteredProducts(dupinfo);
    }
    else if(val==2)
    {
      setFilteredProducts(prod_info);
    }
    else if(val==1)
    {
      setFilteredProducts(prod_info);
    } 
  }
  

  function dollarConversion()
  {
    if(UStoCanadian==false)
        setUStoCanadian(true);
    else
        setUStoCanadian(false);
  }

  function resetFilters()
  {
    setFilteredProducts(prod_info);
    document.getElementById(ftrbycategory).checked=false;
    setFilterByCategory('none');
  }

  
  const context = {
    products:filteredProducts,
    totalProducts: filteredProducts.length,
    filterProductByCategory:filterByProductCategoryHandler,
    filterProductByPriceRange:filterByPriceRangeHandler,
    filterProductByRating:filterProductByRatingHandler,
    filterByCategoryApplied:ftrbycategory,
    resetFilter:resetFilters,
    sortProducts:sortProductsHandler,
    UStoCanadianDollar:UStoCanadian,
    UStoCanadianDollarHandler:dollarConversion
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;