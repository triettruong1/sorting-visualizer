import '../Styles/CustomSlider.css';
import ReactSlider from 'react-slider';
const CustomSlider = ({sliderHandler, sliderValue}) => {
    return ( 
        
        <ReactSlider
        className='customSlider'
        trackClassName='customSlider-track'
        defaultValue={50}
        value={sliderValue}
        onChange={value => {
            sliderHandler(value);
        }}
        min={5}
        max={100}
        />
        
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