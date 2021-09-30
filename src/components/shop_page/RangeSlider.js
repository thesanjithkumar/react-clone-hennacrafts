import { colors, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useContext } from 'react';
import ProductFilterContext from './ProductFilterContext';

function RangeSlider() {
  const filterctx = useContext(ProductFilterContext);
  const useStyles = makeStyles(
    {
      wrapper:
      {
        marginBottom: '4em',
        marginTop: '4em',
        marginLeft: '0.5em',
      },

      slider:
      {
        width: '100%',
        color: 'grey',
        opacity: 1,
        size: 'medium'
      },
      ['@media (max-width:768px)']:
      {
        slider:
        {
          width: '100%'
        },
      }
    });
  const gfg = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 75,
      label: "$75",
    },
    {
      value: 150,
      label: "$150",
    },
    {
      value: 224,
      label: "$224",
    },
    {
      value: 299,
      label: "$299",
    },
  ];
  const [val, setVal] = useState([0, 299]);
  const updateRange = (e, data) => {
    setVal(data);
  };

  const classes = useStyles()
  return <div className={classes.wrapper}>
    <Slider value={val} onChange={updateRange} onMouseUp={() => { filterctx.filterProductByPriceRange(val) }} marks={gfg}
      step={15} max={300} valueLabelDisplay="on" className={classes.slider} />
  </div>
}

export default RangeSlider;