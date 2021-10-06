import classes from './product_description.module.css'
import ProdDescImage from './ProdDescImage';

function ProductDescription()
{
  return <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.header}>
        <ProdDescImage/>
        <div className={classes.basicinfo}>
      </div>
      </div>
      <div className={classes.prodbody}>
      </div>
      <div className={classes.footer}>
      </div>
    </div>
  </div>
}

export default ProductDescription;