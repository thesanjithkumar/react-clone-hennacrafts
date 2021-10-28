import {useState,useRef,useCallback, useEffect} from "react";
import PropTypes from "prop-types";
import classes from "./MultiRangeSlider.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Set width of the range to decrease from the left side
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);
  return(
    <div className={classes.container}>
      <div className={classes.values}>
      <div className={classes.leftvalue}>
        <div className={classes.leftmoment}>
            ${minVal}
        </div>
          </div>
          <div className={classes.rightvalue}>
            <div className={classes.rightmoment}>
            ${maxVal}
            </div>
          </div>
          </div>
        <div className={classes.slider}>
        <div ref={range} className="slider__range">
          </div>
       </div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal);
          setMaxVal(value);
          maxValRef.current = value;
       }}
       className="thumb thumb--right"
      />
      <div className={classes.valuesdown}>
      <div className={classes.value1}>
       0
       <div className={classes.lines}>
       <div className={classes.lines0}></div> 
       <div className={classes.lines1}></div>
       <div className={classes.lines2}></div>
        <div className={classes.lines3}></div>
        <div className={classes.lines4}></div>
        <div className={classes.lines5}></div>
        </div>
      </div>
      <div className={classes.value2}>
        75
        <div className={classes.lines}>
        <div className={classes.lines6}></div>
        <div className={classes.lines7}></div>
        <div className={classes.lines8}></div>
        <div className={classes.lines9}> </div>
        <div className={classes.lines10}> </div>
        </div>
      </div>
      <div className={classes.value3}>
        150
        <div className={classes.lines}>
        <div className={classes.lines11}></div>
        <div className={classes.lines12}></div>
        <div className={classes.lines13}></div>
        <div className={classes.lines14}></div>
        <div className={classes.lines15}></div>
        </div>
      </div>
      <div className={classes.value4}>
        224
        <div className={classes.lines}>
        <div className={classes.lines16}></div>
        <div className={classes.lines17}> </div>
        <div className={classes.lines18}></div>
        <div className={classes.lines19}></div>
        <div className={classes.lines20}></div>
        </div>
      </div>
      <div className={classes.value5}>
        299
      </div>
      </div>
      </div>
  );
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
export default MultiRangeSlider;