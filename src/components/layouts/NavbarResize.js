import React from 'react';
import {useEffect,useState} from 'react';
import NavbarComponent from './NavbarComponent';

function NavbarResize() {
  const [width, setWidth] = useState(window.innerWidth)
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  return <NavbarComponent appwidth={width}/>
}

export default NavbarResize;