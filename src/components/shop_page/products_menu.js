import ProductItem from "./product_item";
import classes from './products.module.css';
import ProductHeader from "./product_header";
import ProductPages from './product_pages';

function ProductMenu(props)
{
  return(
  <div className={classes.product_container}>
    <ProductHeader/>
    <ProductItem products={props.products}/>
    <ProductPages/>
  </div>);
}

export default ProductMenu;