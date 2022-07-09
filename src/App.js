import './App.css';
import SortingVisualizer from './Components/SortingVisualizer';
import Navigation from './Components/Navigation';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {

  var [sliderValue, setSliderValue] = useState(50);
  var [clicked, setClicked] = useState(false);

  

  const handleSlide = (event) => {
    setSliderValue(event.target.value);
  }

  const handleResetClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className="App">
        <Navigation 
          sliderHandler = {handleSlide} 
          sliderValue = {sliderValue} 
          handleNewArrayClick={handleResetClick}
        />
        <SortingVisualizer arrayAmount = {sliderValue} resetArray = {clicked}/>
        <Footer />
    </div>
  );
}

export default App;
