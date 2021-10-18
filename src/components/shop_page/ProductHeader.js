import classes from './products.module.css'
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';
import {FaRegTimesCircle} from 'react-icons/fa';
import { ContactsOutlined } from '@material-ui/icons';

//{filterctx.filterByCategoryApplied!='none' && <p><span>{filterctx.filterByCategoryApplied}</span> <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span></p>}
/*

*/
function ProductHeader()
{
  function SortingDropdown(e)
  {
    var id_name=["defaultsort","popularitysort","ratingsort","latestsort","lowtohighsort","hightolowsort"]
    var val=e.target.value
    var option = document.getElementById(id_name[val-1]);
    filterctx.setFilterApplied((prevAppliedFilter) => {
      return { ...prevAppliedFilter, sorting: option.innerText }
    })
  }

  const filterctx=useContext(ProductFilterContext);
  return (
  <div className={classes.header}>
    <h2>Shop</h2>
    {Object.keys(filterctx.filterApplied).map((filter_name)=>{
      return filterctx.filterApplied[filter_name]!='none'?<span>{filter_name =='rating'?`average rating between ${filterctx.filterApplied[filter_name][0]} and ${filterctx.filterApplied[filter_name][1]}`:filterctx.filterApplied[filter_name]}<span className={classes.cross_ctn}><FaRegTimesCircle onClick={()=>{filterctx.resetFilter(filter_name)}} className={classes.cross}/></span></span>:<span></span>
    }
    )}
    <p>Showing all {filterctx.products.length} results</p>
    <div className={classes.sortdropdown}>
    <select id="sortingdropdown" onChange={SortingDropdown}>
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