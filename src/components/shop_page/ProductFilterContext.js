import { createContext, useState, useEffect } from 'react';
import prod_info from './ProductInfo';

const ProductFilterContext = createContext({
  products: [],
  totalProducts: 0,
  // filterProductByCategory: (category_val) => { },
  // filterProductByPriceRange: (price_range) => { },
  // filterProductByRating: (rating_range) => { },
  resetFilter: (filter_name, cat_val) => { },
  // sortProducts: () => { },
  sliderRange: [],
  UStoCanadianDollar: false,
  UStoCanadianDollarHandler: () => { },
  filterApplied: {},
  setFilterApplied:()=>{},
  //allFilters:()=>{},
  // categoryFiltername: ''
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState(prod_info);
  const [UStoCanadian, setUStoCanadian] = useState(false);
  const [sliderval, setSliderVal] = useState([0, 400]);
  const [appliedFilter, setAppliedFilter] = useState({ category: 'none', rating: 'none', sorting: 'none' });
  // const [catfilter_name, setCatFilterName] = useState('none');
  // const [appliedFilterOrder, setAppliedFilterOrder] = useState(['default']);
  // const [triggerFilter,setTriggerFilter]=useState({category:false,rating:false,sorting:false});

var allFilters=async(products)=>{
  if(appliedFilter.category!='none')
  {
    products=await filterByProductCategoryHandler(appliedFilter.category,products)
  }
  if(appliedFilter.rating!='none')
  {
    products=await filterProductByRatingHandler(appliedFilter.rating,products)
  }
  if(appliedFilter.sorting!='none')
  {
    products=sortProductsHandler(products)
  }
  return products
}

var filters=async()=>{
 const prod=await allFilters(prod_info); 
 setFilteredProducts(()=>{return prod});
}
  useEffect(() => {
    // var filters={category:false,rating:false,rating:false}
    filters()
    setSliderVal([findMin(), findMax()]);
  }, [appliedFilter])

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

  function filterByProductCategoryHandler(category_val,products) {
        return products.filter((item) => {
          return item.category == category_val;
        })
  }

  function filterByPriceRangeHandler(price_range) {
    var arr_items = filteredProducts[filteredProducts.length - 1].filter((item) => {
      return item.price >= price_range[0] && item.price <= price_range[1];
    })
    setFilteredProducts(() => {
      setFilteredProducts(() => {
        return [...filteredProducts, arr_items]
      });
    });
  }

  function filterProductByRatingHandler(rating_range,products) {
        return products.filter((item) => {
          return item.rating >= rating_range[0] && item.rating <= rating_range[1];
        })

      // if (rating_range[0] == 1 && rating_range[1] == 5) {
      //   resetFilterHandler('rating')
      // }
  }

  function sortProductsHandler(products) {
    var val = document.getElementById("sortingdropdown").value;
    if (val == 6) {
      products.sort(function (prod1, prod2) { return prod2.price - prod1.price });
    }
    else if (val == 5) {
      products.sort(function (prod1, prod2) { return prod1.price - prod2.price });
    }
    else if (val == 4) {
     products.sort(function (prod1, prod2) {
        if (prod1.category < prod2.category) { return -1; }
        else if (prod1.category > prod2.category) { return 1; }
        else { return 0; }
      });
    }
    else if (val == 3) {
      products.sort(function (prod1, prod2) { return prod2.rating - prod1.rating });
    }
    else if (val == 2) {
      products.sort(function (prod1, prod2) { return prod2.rating - prod1.rating });
    }
    else if (val == 1) {
    products.sort(function (prod1, prod2) {
        if (prod1.title < prod2.title) { return -1; }
        else if (prod1.title > prod2.title) { return 1; }
        else { return 0; }
      });
    if (appliedFilter.sorting != 'none') {
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:"none"}
      })
    }
    }
    return products;
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
    // console.log(filteredProducts,appliedFilter,filter_name,filter_name.includes('rating'))
    // for (var i = 0; i < appliedFilterOrder.length; i++) {
    //   if (appliedFilterOrder[i] == filter_name)
    //     break;
    // }

    // setAppliedFilterOrder((prevorder)=>{prevorder.splice(i,1)})
    // console.log('appliedFilter',appliedFilterOrder)
    // var remFilter=appliedFilterOrder.slice(i+1,appliedFilterOrder.length)
    // console.log(appliedFilterOrder)
    // setFilteredProducts(() => {
    //   return [...filteredProducts.slice(0, i)]
    // })


    setAppliedFilter((prevAppliedFilter) => {
      if (filter_name=="category") {
        var cat=document.getElementsByName("category")
        for(var i=0;i<cat.length;i++)
            cat[i].checked = false;
        return { ...prevAppliedFilter, category: 'none' }
      }
      else if (filter_name == 'rating') {
        // console.log(filteredProducts)
        document.getElementById("rating_btn_val").innerText = 'Filter by rating'
        return { ...prevAppliedFilter, rating: 'none' }
      }
      else if (filter_name == 'sorting') {
        document.getElementById("sortingdropdown").value = 1;
        return { ...prevAppliedFilter, sorting: 'default' }
      }
    })

    // remFilter.map((ftr)=>{
    //   if(ftr=='category')
    //   {
    //     filterByProductCategoryHandler(appliedFilter.category)
    //   }
    //   else if(ftr=='rating')
    //   {
    //     filterProductByRatingHandler(appliedFilter.rating)
    //   }
    //   else if(ftr=='sorting')
    //   {
    //     sortProductsHandler()
    //   }

    // })
  }

  // console.log("AppliedFilterOrder ",appliedFilterOrder)
  // console.log(filteredProducts)

  const context = {
    products: filteredProducts,
    totalProducts: filteredProducts.length,
    // filterProductByCategory: filterByProductCategoryHandler,
    // filterProductByPriceRange: filterByPriceRangeHandler,
    // filterProductByRating: filterProductByRatingHandler,
    resetFilter: resetFilterHandler,
    // sortProducts: sortProductsHandler,
    UStoCanadianDollar: UStoCanadian,
    UStoCanadianDollarHandler: dollarConversion,
    sliderRange: sliderval,
    filterApplied: appliedFilter,
    setFilterApplied:setAppliedFilter,
    // categoryFiltername: catfilter_name,
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;
