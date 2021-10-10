import classes from './product_description.module.css'
import { Magnifier} from "react-image-magnifiers";
import {useState} from 'react';
import search from "../../img/search.jpg";
import Modal from './Modal';
import FullScreenImage from './FullScreenImage';

function ProductDescriptionImage(props)
{
  console.log("Testing",props.item)
  const [curzoomimg,setCurZoomImg]=useState(props.item.descimg.length>0 ?props.item.descimg[0]:props.item.image)
  const [isModalOpen,setIsModalOpen]=useState(false);

  function changeImage(imgaddress){
    setCurZoomImg(imgaddress)
  }
  return<div className={classes.img_container}>
    <Magnifier
  imageSrc={curzoomimg}
  imageAlt="product_img"
  //largeImageSrc="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg"
    />
    <img src={search} alt="search" className={classes.imgMagSearch} onClick={()=>{setIsModalOpen(true)}}/>
    {props.item.descimg.length>1 &&
    <ul className={classes.prodimagelist}>
      {props.item.descimg.map((imgaddress)=>{
        return (<li><img src={imgaddress} alt={"product_img"} onClick={()=>{changeImage(imgaddress)}} className={curzoomimg==imgaddress?classes.curzoomimg:classes.notcurzoomimg}/></li>);
      })}
    </ul>
    }
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
      <FullScreenImage item={props.item} setIsModalOpen={setIsModalOpen} changeImage={setCurZoomImg}/>
    </Modal>
  </div>
}

export default ProductDescriptionImage;