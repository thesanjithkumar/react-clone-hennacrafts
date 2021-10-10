import classes from './product_description.module.css';
import {useState,useEffect} from 'react';
import { FaTimes,FaSearchPlus,FaSearchMinus,FaCompress } from 'react-icons/fa';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function FullScreenImage(props)
{
  const [imageNo,setImageNo]=useState(0);
  const [zoomin,setZoomIn]=useState(false);
  const [fullscreen,setFullScreen]=useState(false);
  const handle = useFullScreenHandle();

  function keyHandler({keyCode})
  {
    if(keyCode==39)
      incNo();
    else if(keyCode==37)
       decNo()
  }

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    // window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      // window.removeEventListener("keyup", upHandler);
    };
  }, []);

  function incNo()
  {
    setImageNo((prevNo)=>{return (prevNo+1)%props.item.descimg.length})
  }

  function decNo()
  {
    setImageNo((prevNo)=>{if(prevNo==0){prevNo=props.item.descimg.length}return (prevNo-1)%props.item.descimg.length})
  }

  function  FullScreenHandler() {
    fullscreen?setFullScreen(false):setFullScreen(true)    
  }

  return<FullScreen handle={handle} onChange={FullScreenHandler}>
        {/* <img src={cross} alt='close modal' className={classes.closeModal}/> */}
        <FaTimes className={classes.closeModal} size={25} onClick={()=>{props.setIsModalOpen(false)}}/>
        {!zoomin && <FaSearchPlus className={classes.zoomicon} size={25} onClick={()=>{setZoomIn(true)}}/>}
        {zoomin && <FaSearchMinus className={classes.zoomicon} size={25} onClick={()=>{setZoomIn(false)}}/>}
        {!fullscreen && <FaCompress className={classes.fullscreen} size={25} onClick={handle.exit}/>}
        {fullscreen && <FaCompress className={classes.fullscreen} size={25} onClick={handle.enter}/>}
        <span className= {classes.moveleft} onClick={decNo}></span>
        <img src={props.item.descimg[imageNo]} onClick={()=>{zoomin?setZoomIn(false):setZoomIn(true)}} className={zoomin?classes.zoomin:classes.zoomout}/>
        <span className= {classes.moveright} onClick={incNo}></span>
        </FullScreen>
}

export default FullScreenImage;