import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';
import {FaRegTimesCircle} from 'react-icons/fa';

function ProductCategory() {
  const filterctx=useContext(ProductFilterContext);
  return (
    <div className={classes.product_category}>
      <h2>Product categories</h2>
      <p>
        <input type="radio" id="Uncategorized" name="category" value="Uncategorized" onClick={()=>{filterctx.filterProductByCategory("Uncategorized")}}/>
        <label for="uncategorized">Uncategorized</label>
        {filterctx.filterByCategoryApplied=="Uncategorized" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Combo" name="category" value="Combo" onClick={()=>{filterctx.filterProductByCategory("Combo")}}/>
        <label for="Combo">Combo</label>
        {filterctx.filterByCategoryApplied=="Combo" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Essential oil" name="category" value="Essential oil" onClick={()=>{filterctx.filterProductByCategory("Essential oil")}}/>
        <label for="Essential oil">Essential oil</label>
        {filterctx.filterByCategoryApplied=="Essential oil" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Face pack" name="category" value="Face pack" onClick={()=>{filterctx.filterProductByCategory("Face pack")}}/>
        <label for="Face pack">Face pack</label>
        {filterctx.filterByCategoryApplied=="Face pack" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Henna" name="category" value="Henna" onClick={()=>{filterctx.filterProductByCategory("Henna")}}/>
        <label for="Henna">Henna</label>
        {filterctx.filterByCategoryApplied=="Henna" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Indigo" name="category" value="Indigo" onClick={()=>{filterctx.filterProductByCategory("Indigo")}}/>
        <label for="Indigo">Indigo</label>
        {filterctx.filterByCategoryApplied=="Indigo" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Powder" name="category" value="Powder" onClick={()=>{filterctx.filterProductByCategory("Powder")}}/>
        <label for="Powder">Powder</label>
        {filterctx.filterByCategoryApplied=="Powder" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="radio" id="Sample" name="category" value="Sample" onClick={()=>{filterctx.filterProductByCategory("Sample")}}/>
        <label for="Sample">Test/Samples</label>
        {filterctx.filterByCategoryApplied=="Sample" && <span className={classes.cross_ctn}><FaRegTimesCircle onClick={filterctx.resetFilter} className={classes.cross}/></span>}
      </p>
      <p>
        <input type="checkbox" id="Stock" name="Stock" value="Stock"/>
        <label for="Stock">In stock</label>
      </p>
    </div>
  );
}

export default ProductCategory;