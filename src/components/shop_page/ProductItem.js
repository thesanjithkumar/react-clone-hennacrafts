import classes from './products.module.css';
import { Link } from 'react-router-dom';

import ProductImage from './ProductImage';

function ProductItem(props){
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <Link to='/' className={classes.link}>
          <ProductImage item={item}/>
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>{`$${item.price.toFixed(2)}`}</p>
         </Link>
    </div>
   
    );
  });

}


export default ProductItem;