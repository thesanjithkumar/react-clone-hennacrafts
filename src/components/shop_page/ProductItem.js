import classes from './products.module.css';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

import ProductImage from './ProductImage';

function ProductItem(props){
  const filterctx=useContext(ProductFilterContext);
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <Link to='/product_description' className={classes.link}>
          <ProductImage item={item}/>
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>{filterctx.UStoCanadianDollar?`C$${(item.price*1.27).toFixed(2)}`:`$${item.price.toFixed(2)}`}</p>
         </Link>
    </div>
   
    );
  });

}


export default ProductItem;