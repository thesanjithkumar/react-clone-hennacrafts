import classes from './products.module.css';

function ProductCategory() {
  return (
    <div className={classes.product_category}>
      <h2>Product categories</h2>
      <p>
        <input type="radio" id="uncategorized" name="category" value="Uncategorized" />
        <label for="uncategorized">Uncategorized</label>
      </p>
      <p>
        <input type="radio" id="Combo" name="category" value="Combo" />
        <label for="Combo">Combo</label>
      </p>
      <p>
        <input type="radio" id="Essential oil" name="category" value="Essential oil" />
        <label for="Essential oil">Essential oil</label>
      </p>
      <p>
        <input type="radio" id="Face pack" name="category" value="Face pack" />
        <label for="Face pack">Face pack</label>
      </p>
      <p>
        <input type="radio" id="Henna" name="category" value="Henna" />
        <label for="Henna">Henna</label>
      </p>
      <p>
        <input type="radio" id="Indigo" name="category" value="Indigo" />
        <label for="Indigo">Indigo</label>
      </p>
      <p>
        <input type="radio" id="Powder" name="category" value="Powder" />
        <label for="Powder">Powder</label>
      </p>
      <p>
        <input type="radio" id="Sample" name="category" value="Sample" />
        <label for="Sample">Test/Samples</label>
      </p>
      <p>
        <input type="checkbox" id="Stock" name="Stock" value="Stock" />
        <label for="Stock">In stock</label>
      </p>
    </div>
  );
}

export default ProductCategory;