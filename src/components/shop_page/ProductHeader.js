import classes from './products.module.css'
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';
import {FaRegTimesCircle} from 'react-icons/fa';

function ProductHeader()
{
  const filterctx=useContext(ProductFilterContext);
  return (     
  <div className={classes.header}>
    <h2>Shop</h2>
    {filterctx.filterByCategoryApplied!='none' && <p><span>{filterctx.filterByCategoryApplied}</span> <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span></p>}
    <p>Showing all {filterctx.products.length} results</p>
    <div className={classes.sortdropdown}>
    <select id="sortingdropdown" onChange={filterctx.sortProducts}>
    <option id="defaultsort" value="1">Default sorting</option>
    <option id="popularitysort" value="2">Sort by popularity</option>
    <option id="ratingsort" value="3">Sort by average rating</option>
    <option id="latestsort" value="4">Sort by latest</option>
    <option id="lowtohighsort" value="5">Sort by price:low to high</option>
    <option id="hightolowsort" value="6">Sort by price:high to low</option>
    </select>
    </div>
  </div>
  );
}

export default ProductHeader;