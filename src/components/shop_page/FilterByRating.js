import { useState } from 'react';
import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

function FilterByRating()
{
  const [rating_dropdown,setRatingDropdown]=useState(false);
  const filterctx=useContext(ProductFilterContext);
  function ratingDropdown()
  {
    if(rating_dropdown==false)
    setRatingDropdown(true);
    else
    setRatingDropdown(false);
  }

  const [filterval,setFilterVal]=useState('Filter by rating');
  function FilterVal(val,rating_range)
  {
    setFilterVal(val);
    setRatingDropdown(false);
    filterctx.setFilterApplied((prevVal)=>{
      return {...prevVal,rating:rating_range}
    });
  }
  return (
    <div className={classes.rating_dropdown}>
    <button type='button'  onClick={ratingDropdown} className={classes.fbr_btn}><span id="rating_btn_val">{filterval}</span><span className={rating_dropdown?classes.ratingarrowup:classes.ratingarrowdown}></span></button>
    {rating_dropdown && <input type='search' placeholder='Search products...' className={classes.fbr_search}/>}
    {rating_dropdown && <div  onClick={()=>{FilterVal("Filter by rating",[1,5])}}>Filter by rating</div> }
    {rating_dropdown && <div  onClick={()=>{FilterVal("average rating between 4 and 5",[4,5])}}>average rating between 4 and 5</div>}
    {rating_dropdown && <div  onClick={()=>{FilterVal("average rating between 3 and 4",[3,4])}}>average rating between 3 and 4</div>}
    {rating_dropdown && <div  onClick={()=>{FilterVal("average rating between 2 and 3",[2,3])}}>average rating between 2 and 3</div>}
    {rating_dropdown && <div  onClick={()=>{FilterVal("average rating between 1 and 2",[1,2])}}>average rating between 1 and 2</div>}
  </div>
  );
}

export default FilterByRating;