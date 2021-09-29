import { createContext, useState } from 'react';
import prod_info from './ProductInfo';

const ProductFilterContext = createContext({
  products:prod_info,
  totalProducts: prod_info.length,
  filterProductByCategory:(category_val)=>{},
  filterProductByPriceRange:(price_range)=>{}
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState(prod_info);

  function filterByProductCategoryHandler(category_val) {
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

  
  const context = {
    products:filteredProducts,
    totalProducts: filteredProducts.length,
    filterProductByCategory:filterByProductCategoryHandler,
    filterProductByPriceRange:filterByPriceRangeHandler
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;