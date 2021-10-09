import { mergeClasses } from '@material-ui/styles';
import prod_info from '../ProductInfo';
import ProductItem from '../ProductItem';
import classes from './product_description.module.css';

function RelatedProducts(props) {
  var relatedProd = prod_info.filter((prod_item) => { return prod_item.category == props.item.category && prod_item.title != props.item.title })
  // var relatedProd=prod_info
  return <ProductItem products={relatedProd} />
}

export default RelatedProducts;