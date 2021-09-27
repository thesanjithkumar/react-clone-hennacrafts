import classes from './products.module.css'
function ProductHeader()
{
  return (     
  <div className={classes.header}>
    <h2>Shop</h2>
    <p>Showing 1–9 of 38 results</p>
    <select>
    <option value="1">Default sorting</option>
    <option value="2">Sort by popularity</option>
    <option value="3">Sort by average rating</option>
    <option value="4">Sort by latest</option>
    <option value="5">Sort by price:low to high</option>
    <option value="6">Sort by price:high to low</option>
    </select>
  </div>
  );
}

export default ProductHeader;