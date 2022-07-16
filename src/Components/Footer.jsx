import CustomSlider from './CustomSlider';
import CustomSliderWithMark from './CustomSliderWithMark';
import '../Styles/Footer.css';
const Footer = ({sliderHandler, speedSliderHandler, sliderValue, handleNewArrayClick, handleBeginClick, isDisabled}) => {
    return (  
        <footer className="flex-row controls">
            <div className="buttons">
                <button disabled={isDisabled} className="button reset" onClick={handleNewArrayClick}>New Array</button>
                <button disabled={isDisabled} className="button begin" onClick={handleBeginClick}>Begin</button>
            </div>
            <CustomSliderWithMark sliderClassName="sorting-speed" speedSliderHandler={speedSliderHandler} />
            <CustomSlider sliderClassName="array-size" sliderHandler={sliderHandler} sliderValue={sliderValue} />
        </footer>
    );
}
 
export default Footer;