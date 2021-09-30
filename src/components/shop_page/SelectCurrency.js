import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

function SelectCurrency()
{
  const filterctx=useContext(ProductFilterContext);
  return <div className={classes.currency}>
    <h2>Select Currency</h2>
    <select onChange={filterctx.UStoCanadianDollarHandler}>
      <option>United States (US) dollar</option>
      <option>Canadian dollar</option>
    </select>
  </div>
}

export default SelectCurrency;