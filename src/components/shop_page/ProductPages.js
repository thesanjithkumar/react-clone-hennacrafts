import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

function ProductPages(props)
{
  const filterctx=useContext(ProductFilterContext);
  var pgs=[];
  for(let i=1;i<=Math.ceil(filterctx.totalProducts/9);i++)
  {
    pgs.push(i);
  }

  return(
    <div className={classes.pgs}>
      {
        pgs.map((no)=>{
          return <button value={no} className={classes.btn} onClick={()=>{props.setCurrentPage(no)}}>{no}</button>
        })
      }
      <button className={classes.btn}>{">"}</button>
    </div>
  )
  
}

export default ProductPages;