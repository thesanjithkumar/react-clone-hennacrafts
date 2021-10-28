import { colors, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import React, { useState } from "react";
import { useContext } from 'react';
import MultiRangeSlider from "./MultiRangeSlider";
import ProductFilterContext from './ProductFilterContext';

function RangeSlider() {
       return (
       <MultiRangeSlider
       min={0}
       max={299}
       onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
       />
      
       );
}

export default RangeSlider;