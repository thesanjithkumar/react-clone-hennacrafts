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
  sliderRange:[]
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState(prod_info);
  const [ftrbycategory,setFilterByCategory]=useState('none');
  const [UStoCanadian,setUStoCanadian]=useState(false);
  const [sliderval,setSliderVal]=useState([0,299]);

  function findMin()
  {
    //console.log("prod:")
    console.log(filteredProducts)
    var min=filteredProducts[0].price;
    for(let i=1;i<filteredProducts.length;i++)
    {
      if(filteredProducts[i].price<min)
         min=filteredProducts[i].price;
    }
    return min;
  }

  function findMax()
  {
    var max=filteredProducts[0].price;
    for(let i=1;i<filteredProducts.length;i++)
    {
      if(filteredProducts[i].price>max)
         max=filteredProducts[i].price;
    }
    return max;
  }

  function filterByProductCategoryHandler(category_val) {
      setFilterByCategory(category_val)
      setFilteredProducts(() => {
        return prod_info.filter((item) => {
          return item.category == category_val;
        }
        );
      });
    }
    setSliderVal([findMin(),findMax()]);

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
   // setSliderVal([findMin(),findMax()]);
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
    setSliderVal([0,299])
  }

  //console.log("fil ",filteredProducts)

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
    UStoCanadianDollarHandler:dollarConversion,
    sliderRange:sliderval
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;