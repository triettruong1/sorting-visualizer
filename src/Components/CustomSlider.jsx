import '../Styles/CustomSlider.css';

const CustomSlider = ({sliderHandler, sliderValue}) => {
    return ( 
        <div className="range">
            <div className='sliderValue'>
                <span>50</span>
            </div>
            <div className='field'>
                <div className="value left">6</div>
                <input type="range" min="5" max="100" value={sliderValue} id="element-amount" onChange={sliderHandler}/>
                <div className="value right">100</div>
            </div>
        </div>
     );
}
 
export default CustomSlider;