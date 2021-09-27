import classes from './products.module.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function ProductItem(props){
  const [hover,setHover]=useState(false);

  function Hovered(hoverimg)
  {
    if(hoverimg!='none')
         setHover(true);
  }
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <Link to='/' className={classes.link}>
         {!hover && <img src={item.image} alt={item.title} onMouseOver={()=>{Hovered(item.hoverimg)}}/>}
         {hover && <img src={item.hoverimg} alt={item.title} onMouseOut={()=>{setHover(false)}}/> }
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>{`$${item.price.toFixed(2)}`}</p>
         </Link>
    </div>
   
    );
  });

}


export default ProductItem;