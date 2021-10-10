import classes from './product_description.module.css';
import { useContext, useState } from 'react';
import ProductFilterContext from '../ProductFilterContext';
import CAD from '../../img/CAD.jpg';
import USD from '../../img/USD.png';
import { FaStar } from 'react-icons/fa';

function ProductBasicInfo(props) {
  const filterctx = useContext(ProductFilterContext);
  const [curflagimg, setCurFlagImg] = useState(USD)
  const [flag_dropdown, setFlagDropdown] = useState(false);
  const [quantityVal, setQuantityVal] = useState(1);

  function FlagDropdownIn() {
    flag_dropdown ? setFlagDropdown(false) : setFlagDropdown(true)
  }

  function QuantityValInc() {
    var cnt = quantityVal + 1;
    setQuantityVal(cnt);
  }
  function QuantityValDec() {
    var cnt = quantityVal - 1;
    setQuantityVal(cnt);
  }
  // function FlagDropdownOut()
  // {
  //   setFlagDropdown(false) 
  // }
  var star = [];
  for (var i = 0; i < props.item.rating; i++) {
    star[i] = <FaStar className={classes.star} />
  }
  return <div className={classes.basicinfo}>
    <h1>{props.item.title}</h1>
    {
      star.map((icon) => { return icon })
    }
    <span> 1 Customer review</span>
    <p>{filterctx.UStoCanadianDollar ? `C$${(props.item.price * 1.27).toFixed(2)}` : `$${props.item.price.toFixed(2)}`}</p>
      <ul className={classes.flag_dropdown} onClick={FlagDropdownIn}>
        <li><div><img src={curflagimg} /> <span className={flag_dropdown ? classes.flagarrowup : classes.flagarrowdown}></span></div></li>
        {flag_dropdown && <li onClick={()=>{setCurFlagImg(CAD)}}><div className={classes.option}><img src={CAD} /><span className={classes.flagtxt}>USD</span></div></li>}
        {flag_dropdown && <li onClick={()=>{setCurFlagImg(USD)}}><div className={classes.option}><img src={USD} /><span className={classes.flagtxt}>CAD</span></div></li>}
      </ul>

    <ul className={classes.quantity}>
      <li><button onClick={QuantityValDec}>-</button></li>
      <li><div>{quantityVal}</div></li>
      <li><button onClick={QuantityValInc}>+</button></li>
      <li><button>Add to cart</button></li>
    </ul>

    <div className={classes.dispcategory}>Category:<span> {props.item.category}</span></div>
  </div>
}

export default ProductBasicInfo;