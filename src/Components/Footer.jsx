import CustomSlider from './CustomSlider';
import CustomSliderWithMark from './CustomSliderWithMark';
import '../Styles/Footer.css';
const Footer = ({sliderHandler, speedSliderHandler, sliderValue, handleNewArrayClick, handleBeginClick, handleShuffleClick}) => {
    return (  
        <footer className="flex-row controls">
            <div className="buttons">
                <button className="button reset" onClick={handleNewArrayClick}>New Array</button>
                <button className="button begin" onClick={handleBeginClick}>Begin</button>
            </div>
            <CustomSliderWithMark speedSliderHandler={speedSliderHandler} sliderClassName="sorting-speed" />
            <CustomSlider sliderClassName="array-size" sliderHandler={sliderHandler} sliderValue={sliderValue} />
        </footer>
    );
}
 
export default Footer;