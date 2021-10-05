import ProductItem from "./ProductItem";
import classes from './products.module.css';
import ProductHeader from "./ProductHeader";
import ProductPages from './ProductPages';
import styles from './products.module.css';

function ProductMenu(props) {
  var id='';

  if (props.products.length > 6) {
    id = 'container1';
  }
  else if (props.products.length > 3) {
    id = 'container2';
  }
  else {
    id = 'container3';
  }

  return (
    <div className={classes.product_container} id={styles[id]}>
      <ProductHeader />
      <ProductItem products={props.products} />
      <ProductPages setCurrentPage={props.setCurrentPage} curpage={props.curpage}/>
    </div>
  );
}

export default ProductMenu;