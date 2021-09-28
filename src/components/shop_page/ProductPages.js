import { Button } from '@material-ui/core';
import classes from './products.module.css';
function ProductPages(props)
{
  var pgs=[];
  for(let i=1;i<=Math.ceil(16/9);i++)
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