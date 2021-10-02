import { createContext, useState, useEffect } from 'react';
import prod_info from './ProductInfo';

const ProductFilterContext = createContext({
  products: [],
  totalProducts: 0,
  filterProductByCategory: (category_val) => { },
  filterProductByPriceRange: (price_range) => { },
  filterProductByRating: (rating_range) => { },
  resetFilter: (filter_name,cat_val) => {},
  sortProducts: () => { },
  sliderRange: [],
  UStoCanadianDollar: false,
  UStoCanadianDollarHandler: () => { },
  filterApplied: {},
  //allFilters:()=>{},
  categoryFiltername:''
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState(prod_info);
  const [UStoCanadian, setUStoCanadian] = useState(false);
  const [sliderval, setSliderVal] = useState([0, 400]);
  const [appliedFilter, setAppliedFilter] = useState({ category: 'none', rating: 'none',sorting:'none'});
  const [catfilter_name,setCatFilterName]=useState('none');

  function findMin() {
    var min = filteredProducts[0].price;
    for (let i = 1; i < filteredProducts.length; i++) {
      if (filteredProducts[i].price < min)
        min = filteredProducts[i].price;
    }
    return min;
  }

  function findMax() {
    var max = filteredProducts[0].price;
    for (let i = 1; i < filteredProducts.length; i++) {
      if (filteredProducts[i].price > max)
        max = filteredProducts[i].price;
    }
    return max;
  }

  useEffect(() => {
    setSliderVal([findMin(), findMax()]);
  }, [appliedFilter])

  function filterByProductCategoryHandler(category_val) {
    setCatFilterName(category_val)
    setFilteredProducts(() => {
      return prod_info.filter((item) => {
        return item.category == category_val;
      }
      );
    });
    setAppliedFilter((prevAppliedFilter) => {
      return { ...prevAppliedFilter, category: category_val }
    })
  }

  function filterByPriceRangeHandler(price_range) {
    setFilteredProducts(() => {
      return prod_info.filter((item) => {
        return item.price >= price_range[0] && item.price <= price_range[1]
      })
    });
  }

  function filterProductByRatingHandler(rating_range) {
    setFilteredProducts(() => {
      return prod_info.filter((item) => {
        return item.rating >= rating_range[0] && item.rating <= rating_range[1]
      })
    });
    setAppliedFilter((prevAppliedFilter) => {
      return { ...prevAppliedFilter, rating: `average rating between ${rating_range[0]} and ${rating_range[1]}` }
    })
    if(rating_range[0]==1 && rating_range[1]==5)
    {
      resetFilterHandler('rating')
    }
  }

  function sortProductsHandler() {
    var val = document.getElementById("sortingdropdown").value;
    if (val == 6) {
      var dupinfo = [...prod_info];
      dupinfo.sort(function (prod1, prod2) { return prod2.price - prod1.price });
      setFilteredProducts(dupinfo);
      var hl=document.getElementById('hightolowsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:hl.innerText}
      })
    }
    else if (val == 5) {
      var dupinfo = [...prod_info];
      dupinfo.sort(function (prod1, prod2) { return prod1.price - prod2.price });
      setFilteredProducts(dupinfo);
      var lh=document.getElementById('lowtohighsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:lh.innerText}
      })
    }
    else if (val == 4) {
      setFilteredProducts(prod_info);
      var ls=document.getElementById('latestsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:ls.innerText}
      })
    }
    else if (val == 3) {
      var dupinfo = [...prod_info];
      dupinfo.sort(function (prod1, prod2) { return prod2.rating - prod1.rating });
      setFilteredProducts(dupinfo);
      var rs=document.getElementById('ratingsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:rs.innerText}
      })
    }
    else if (val == 2) {
      setFilteredProducts(prod_info);
      var ps=document.getElementById('popularitysort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:ps.innerText}
      })
    }
    else if (val == 1) {
      setFilteredProducts(prod_info)
      resetFilterHandler('sorting')
    }
  }


  function dollarConversion() {
    if (UStoCanadian == false)
      setUStoCanadian(true);
    else
      setUStoCanadian(false);
  }

  /*function allFiltersHandler()
  {
    if(appliedFilter['category']!='none')
    {
      var category_val;
      if(document.getElementById("Uncategorized").checked)
            category_val="Uncategorized"
      else if(document.getElementById("Uncategorized").checked)
             category_val="Uncategorized"
      else if(document.getElementById("Uncategorized").checked)
             category_val="Uncategorized"
      else if(document.getElementById("Uncategorized").checked)
             category_val="Uncategorized"
      
      filterByProductCategoryHandler(category_val)
    }
    else if(appliedFilter['rating']!='none')
    {
      filterProductByRatingHandler(rating_range)
    }
    else if(appliedFilter['sorting']!='none')
    {
      sortProductsHandler(); 
    }
  }*/

  function resetFilterHandler(filter_name) {
    setFilteredProducts(prod_info);
    setAppliedFilter((prevAppliedFilter) => {
      if(filter_name=='category')
      {
      document.getElementById(catfilter_name).checked = false;
      return { ...prevAppliedFilter,category:'none'}
      }
      else if(filter_name=='rating')
      {
        document.getElementById("rating_btn_val").innerText='Filter by rating'
        return{...prevAppliedFilter,rating:'none'}
      }
      else if(filter_name=='sorting')
      {
        return {...prevAppliedFilter,sorting:'none'}
      }
    })
  }

  //console.log("appliedFilter ",appliedFilter)

  const context = {
    products: filteredProducts,
    totalProducts: filteredProducts.length,
    filterProductByCategory: filterByProductCategoryHandler,
    filterProductByPriceRange: filterByPriceRangeHandler,
    filterProductByRating: filterProductByRatingHandler,
    resetFilter: resetFilterHandler,
    sortProducts: sortProductsHandler,
    UStoCanadianDollar: UStoCanadian,
    UStoCanadianDollarHandler: dollarConversion,
    sliderRange: sliderval,
    filterApplied: appliedFilter,
    categoryFiltername:catfilter_name,
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;