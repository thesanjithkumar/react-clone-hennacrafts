import { createContext, useState, useEffect } from 'react';
import ContactPage from '../../pages/ContactPage';
import prod_info from './ProductInfo';

const ProductFilterContext = createContext({
  products: [],
  totalProducts: 0,
  filterProductByCategory: (category_val) => {},
  filterProductByPriceRange: (price_range) => { },
  filterProductByRating: (rating_range) => { },
  resetFilter: (filter_name,cat_val) => {},
  sortProducts: () => {},
  sliderRange: [],
  UStoCanadianDollar: false,
  UStoCanadianDollarHandler: () => { },
  filterApplied: {},
  //allFilters:()=>{},
  categoryFiltername:'',
  descProduct:{image:'',
  hoverimg:'none',
  descimg:[],
  category:'',
  title:'',
  price:0,
  rating:0},
  descriptionProduct:(item)=>{},
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState([prod_info]);
  const [UStoCanadian, setUStoCanadian] = useState(false);
  const [sliderval, setSliderVal] = useState([0, 400]);
  const [appliedFilter, setAppliedFilter] = useState({ category: 'none', rating: 'none',sorting:'none'});
  const [catfilter_name,setCatFilterName]=useState('none');
  const [appliedFilterOrder,setAppliedFilterOrder]=useState(['default']);
  const [descPageProd,setDescPageProd]=useState({image:'',
  hoverimg:'none',
  descimg:[],
  category:'',
  title:'',
  price:0,
  rating:0})


  function findMin() {
    var len=filteredProducts.length;
    var min = filteredProducts[len-1][0].price;
    for (let i = 1; i < filteredProducts[len-1].length; i++) {
      if (filteredProducts[len-1][i].price < min)
        min = filteredProducts[len-1][i].price;
    }
    return min;
  }

  function findMax() {
    var len=filteredProducts.length;
    var max = filteredProducts[len-1][0].price;
    for (let i = 1; i < filteredProducts[len-1].length; i++) {
      if (filteredProducts[len-1][i].price > max)
        max = filteredProducts[len-1][i].price;
    }
    return max;
  }

  useEffect(() => {
    setSliderVal([findMin(), findMax()]);
  }, [appliedFilter])

  function filterByProductCategoryHandler(category_val) {
    setCatFilterName(category_val)
    var arr_items=filteredProducts[filteredProducts.length-1].filter((item) => {
      return item.category == category_val;
    })
    setFilteredProducts(() => {
     return [...filteredProducts,arr_items]
    });
    setAppliedFilter((prevAppliedFilter) => {
      return { ...prevAppliedFilter, category: category_val }
    })
    setAppliedFilterOrder([...appliedFilterOrder,'category'])
  }

  function filterByPriceRangeHandler(price_range) {
    var arr_items=filteredProducts[filteredProducts.length-1].filter((item) => {
      return item.price >= price_range[0] && item.price <= price_range[1];
    })
    setFilteredProducts(() => {
      setFilteredProducts(() => {
        return [...filteredProducts,arr_items]
       });
    });
  }

  function filterProductByRatingHandler(rating_range) {
    var arr_items=filteredProducts[filteredProducts.length-1].filter((item) => {
      return item.rating >= rating_range[0] && item.rating <= rating_range[1];
    })
    setFilteredProducts(() => {
      setFilteredProducts(() => {
        return [...filteredProducts,arr_items]
       });
    });
    setAppliedFilter((prevAppliedFilter) => {
      return { ...prevAppliedFilter, rating: `average rating between ${rating_range[0]} and ${rating_range[1]}` }
    })
    if(rating_range[0]==1 && rating_range[1]==5)
    {
      resetFilterHandler('rating')
    }
    setAppliedFilterOrder([...appliedFilterOrder,'category'])
  }

  function sortProductsHandler() {
    var val = document.getElementById("sortingdropdown").value;
    var len=filteredProducts.length;
    if (val == 6) {
      filteredProducts[len-1].sort(function (prod1, prod2) { return prod2.price - prod1.price });
      var hl=document.getElementById('hightolowsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:hl.innerText}
      })
    }
    else if (val == 5) {
      filteredProducts[len-1].sort(function (prod1, prod2) { return prod1.price - prod2.price });
      var lh=document.getElementById('lowtohighsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:lh.innerText}
      })
    }
    else if (val == 4) {
      filteredProducts[len-1].sort(function (prod1, prod2) { 
        if(prod1.category < prod2.category ) { return -1; }
        else if(prod1.category > prod2.category ) { return 1; }
        else {return 0;}
    });
      var ls=document.getElementById('latestsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:ls.innerText}
      })
    }
    else if (val == 3) {
      filteredProducts[len-1].sort(function (prod1, prod2) { return prod2.rating - prod1.rating });
      var rs=document.getElementById('ratingsort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:rs.innerText}
      })
    }
    else if (val == 2) {
      filteredProducts[len-1].sort(function (prod1, prod2) { return prod2.rating - prod1.rating });
      var ps=document.getElementById('popularitysort');
      setAppliedFilter((prevAppliedFilter)=>{
        return {...prevAppliedFilter,sorting:ps.innerText}
      })
    }
    else if (val == 1) {
      filteredProducts[len-1].sort(function (prod1, prod2) { 
        if(prod1.title < prod2.title ) { return -1; }
        else if(prod1.title > prod2.title ) { return 1; }
        else {return 0;}
    });
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

    for(var i=0;i<appliedFilterOrder.length;i++)
    {
      if(filter_name==appliedFilterOrder[i])
           break;
    }

    setFilteredProducts(()=>{
      return [...filteredProducts.slice(0,i)]
    })

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
        document.getElementById("sortingdropdown").value=1;
        sortProductsHandler();
        return {...prevAppliedFilter,sorting:'none'}
      }
    })
  }

  
  function DescPageProductHandler(item){
    //console.log('item',item);
    setDescPageProd(item);
  }
  //console.log(descProd)
  //console.log("filteredProducts ",filteredProducts)

  const context = {
    products: filteredProducts,
    totalProducts: filteredProducts[filteredProducts.length-1].length,
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
    descProduct:descPageProd,
    descriptionProduct:DescPageProductHandler,
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;