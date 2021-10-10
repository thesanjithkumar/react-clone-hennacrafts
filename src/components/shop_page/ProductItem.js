import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';
import ProductImage from './ProductImage';
import { useHistory } from 'react-router';

function ProductItem(props){
  const history=useHistory();
  const filterctx=useContext(ProductFilterContext);
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <ProductImage item={item}/>
        <div className={classes.link} onClick={()=>{history.push('/product_description',{descProduct:item})}}>
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>{filterctx.UStoCanadianDollar?`C$${(item.price*1.27).toFixed(2)}`:`$${item.price.toFixed(2)}`}</p>
         </div>
    </div>
   
    );
  });

}


export default ProductItem;