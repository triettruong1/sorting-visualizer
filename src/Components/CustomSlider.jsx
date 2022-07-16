import '../Styles/CustomSlider.css';
import ReactSlider from 'react-slider';
import { useState } from 'react';
const CustomSlider = ({sliderClassName,sliderHandler, sliderValue, isDisabled}) => {
    const [spanValue, setSpanValue] = useState(5);
    return ( 
        <div className={sliderClassName + "-slider"}>
            <span className="sliderSpan flex-center">{spanValue}</span>
            <ReactSlider
            className='customSlider'
            trackClassName='customSlider-track'
            defaultValue={5}
            value={sliderValue}
            onChange={value => {
                sliderHandler(value);
                setSpanValue(value);
            }}
            min={5}
            max={100}
            disabled={isDisabled}
            />
        </div>
     );
}

export default CustomSlider;