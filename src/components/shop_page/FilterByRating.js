import { useState } from 'react';
import classes from './products.module.css';

function FilterByRating()
{
  const [rating_dropdown,setRatingDropdown]=useState(false);
  function ratingDropdown()
  {
    if(rating_dropdown==false)
    setRatingDropdown(true);
    else
    setRatingDropdown(false);
  }

  const [filterval,setFilterVal]=useState('filter by rating');
  function FilterVal(val)
  {
    setFilterVal(val);
    setRatingDropdown(false);
  }
  return (
    <div className={classes.rating_dropdown}>
    <button type='button' onClick={ratingDropdown} className={classes.fbr_btn}>{filterval}<span className={rating_dropdown?classes.ratingarrowup:classes.ratingarrowdown}></span></button>
    {rating_dropdown && <input type='search' placeholder='Search products...' className={classes.fbr_search}/>}
    {rating_dropdown && <div onClick={()=>{FilterVal("Filter by rating")}}>Filter by rating</div> }
    {rating_dropdown && <div onClick={()=>{FilterVal("average rating between 4 and 5")}}>average rating between 4 and 5</div>}
    {rating_dropdown && <div onClick={()=>{FilterVal("average rating between 3 and 4")}}>average rating between 3 and 4</div>}
    {rating_dropdown && <div onClick={()=>{FilterVal("average rating between 3 and 4")}}>average rating between 3 and 4</div>}
    {rating_dropdown && <div onClick={()=>{FilterVal("average rating between 2 and 3")}}>average rating between 2 and 3</div>}
  </div>
  );
}

export default FilterByRating;