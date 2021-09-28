import ProductItem from "./ProductItem";
import classes from './products.module.css';
import ProductHeader from "./ProductHeader";
import ProductPages from './ProductPages';

function ProductMenu(props)
{
  return(
  <div className={classes.product_container}>
    <ProductHeader/>
    <ProductItem products={props.products}/>
    <ProductPages setCurrentPage={props.setCurrentPage}/>
  </div>);
}

export default ProductMenu;