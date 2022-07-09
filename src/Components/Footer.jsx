import '../Styles/Footer.css';

const Footer = ({sliderHandler, sliderValue, handleNewArrayClick, handleBeginClick, handleShuffleClick}) => {
    return (  
        <footer className="">
            <div className="flex-row controls">
                <button className="button" onClick={handleNewArrayClick}>New Array</button>
                <button className="button" onClick={handleBeginClick}>Begin</button>
                <input type="range" min="5" max="100" value={sliderValue} id="element-amount" onChange={sliderHandler}/>
            </div>
        </footer>
    );
}
 
export default Footer;