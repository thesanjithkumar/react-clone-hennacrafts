import classes from './product_description.module.css';

function FullScreenImage(props)
{
  return <>
        <span className= {classes.moveleft}></span>
        <img src={props.item.descimg[0]}/>
        <span className= {classes.moveright}></span>
        </>
}

export default FullScreenImage;