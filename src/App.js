import './App.css';
import SortingVisualizer from './Components/SortingVisualizer';
import Navigation from './Components/Navigation';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {

  var [sliderValue, setSliderValue] = useState(50);
  var [resetBtnClick, setResetBtnClick] = useState(false);
  var [beginBtnClick, setBeginBtnClick] = useState(false);
  const handleSlide = (event) => {
    setSliderValue(event.target.value);
  }

  const handleResetClick = () => {
    setResetBtnClick(!resetBtnClick);
  }

  const handleBeginClick = () => {
    setBeginBtnClick(!beginBtnClick);
  }


  return (
    <div className="App">
        <Navigation 
          sliderHandler = {handleSlide} 
          sliderValue = {sliderValue} 
          handleNewArrayClick={handleResetClick}
          handleBeginClick={handleBeginClick}
        />
        <SortingVisualizer arrayAmount = {sliderValue} resetArrayBtn = {resetBtnClick} beginSortBtn = {beginBtnClick}/>
        <Footer />
    </div>
  );
}

export default App;
