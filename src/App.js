import './App.css';
import SortingVisualizer from './Components/SortingVisualizer';
import Navigation from './Components/Navigation';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import * as algos from './Helpers/Algorithms';

function App() {
  var [array, setArray] = useState([]);
  var [arraySize, setArraySize] = useState(50);
  var [sliderValue, setSliderValue] = useState(50);
  var animations = algos.bubbleSort(array);

  const handleSlide = (event) => {
    setSliderValue(event.target.value);
    newRandomizedArray();
  }

  const handleResetClick = () => {
    return newRandomizedArray();
  }

  const handleBeginClick = () => {
    if (animations === undefined){
      return;
    } else {
        animations.steps.forEach((step, index) => {
            setTimeout(() => {
                if (animations.swap[index]){
                    swapAnimation(step[0], step[1]);
                }
            }, arraySize <= 25 ? index * 25 : index * 5);
        })
    }
  }

  useEffect(() =>{
    setArraySize(sliderValue);
  }, [sliderValue])

  useEffect (() => {
    return newRandomizedArray();
  }, [])

  function newRandomizedArray(){
      var newArray = [];
      for (let i = 0; i < arraySize; i++) {
        newArray[i] = randomIntFromInterval(5, 100);
      }
      setArray(newArray);
  }

  return (
    <div className="App">
        <Navigation/>
        <SortingVisualizer array={array}/>
        <Footer
          sliderHandler = {handleSlide}
          handleNewArrayClick={handleResetClick}
          handleBeginClick={handleBeginClick}
        />
    </div>
  );
}

const swapAnimation = (firstPos, secondPos) => {
  const firstEle = document.querySelector(`.sorting-visualizer :nth-child(${firstPos+1})`);
  const secondEle = document.querySelector(`.sorting-visualizer :nth-child(${secondPos+1})`);

  const temp = firstEle.style.height;
  firstEle.style.height = secondEle.style.height;
  secondEle.style.height = temp;
}


const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
