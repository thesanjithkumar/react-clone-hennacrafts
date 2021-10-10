import {useState} from 'react';

function ProductImage(props)
{
  const [hover,setHover]=useState(false);

  function Hovered(hoverimg)
  {
    if(hoverimg!='none')
         setHover(true);
  }

  return <span>
 {!hover && <img src={props.item.image} alt={props.item.title} onMouseOver={()=>{Hovered(props.item.hoverimg)}}/>}
  {hover && <img src={props.item.hoverimg} alt={props.item.title} onMouseOut={()=>{setHover(false)}}/> }
  </span>
}

export default ProductImage;