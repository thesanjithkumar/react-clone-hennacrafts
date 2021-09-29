import classes from './products.module.css';

function SelectCurrency()
{
  return <div className={classes.currency}>
    <h2>Select Currency</h2>
    <select>
      <option>United States (US) dollar</option>
      <option>Canadian dollar</option>
    </select>
  </div>
}

export default SelectCurrency;