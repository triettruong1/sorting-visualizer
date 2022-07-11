import '../Styles/Footer.css';
import CustomSlider from './CustomSlider';
const Footer = ({sliderHandler, sliderValue, handleNewArrayClick, handleBeginClick, handleShuffleClick}) => {
    return (  
        <footer className="flex-row controls">
            <div className="buttons">
                <button className="button" onClick={handleNewArrayClick}>New Array</button>
                <button className="button" onClick={handleBeginClick}>Begin</button>
            </div>
            <CustomSlider sliderHandler={sliderHandler} sliderValue={sliderValue} />
        </footer>
    );
}
 
export default Footer;