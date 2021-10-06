import classes from './product_description.module.css'
import {
  Magnifier,
} from "react-image-magnifiers";
import ProductFilterContext from '../ProductFilterContext';
import {useContext} from 'react';

function ProductDescriptionImage()
{
  const filterctx=useContext(ProductFilterContext);
  return<div className={classes.img_container}>
    <Magnifier
  imageSrc="https://hennacrafts.com/wp-content/uploads/2021/05/daeb6568-bf37-474d-90a8-41905a87d7a0_600x-300x300.jpg"
  imageAlt="Example"
  largeImageSrc="https://hennacrafts.com/wp-content/uploads/2021/05/daeb6568-bf37-474d-90a8-41905a87d7a0_600x.jpg"
    />
    {console.log(filterctx.descProduct)}
    <ul>
      {filterctx.descProduct.descimg.map((imgaddress)=>{
        return (<li><img src={imgaddress} alt={filterctx.descProduct.title}/></li>);
      })}
    </ul>
    
  </div>
}

export default ProductDescriptionImage;