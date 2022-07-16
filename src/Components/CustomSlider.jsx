import '../Styles/CustomSlider.css';
import ReactSlider from 'react-slider';
import { useState ,useEffect } from 'react';
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
            />
        </div>
     );
}
 
/* <div className="range">
    <div className='sliderValue'>
        <span>{sliderValue}</span>
    </div>
    <div className='field'>
        <div className="value left">6</div>
        <input type="range" min="5" max="100" value={sliderValue} id="element-amount" onChange={sliderHandler}/>
        <div className="value right">100</div>
    </div>
</div> */
export default CustomSlider;