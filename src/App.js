import SortingVisualizer from './Components/SortingVisualizer';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import * as algos from './Helpers/Algorithms';

import './App.css';
function App() {
  var [array, setArray] = useState([]);
  var [arraySize, setArraySize] = useState(61);
  var [sliderValue, setSliderValue] = useState(61);

  var ACCENT_COLOR = "#dd9230";
  var SECONDARY_COLOR = "#000";

  const handleSlide = (event) => {
    setSliderValue(event.target.value);
    newRandomizedArray();
  }

  const handleResetClick = () => {
    return newRandomizedArray();
  }

  const handleBeginClick = () => {
    const selected = document.querySelector(".select-box").value;
    switch (selected) {
      case "bubble":
          beginBubbleSort();
        break;
      case "merge":
          // beginBubbleSort();
        break;
      case "quick":
          // beginBubbleSort();
        break;
      case "selection":
          // beginBubbleSort();
        break;
    
      default:
        break;
    }
  }

  function beginBubbleSort() {
    var animations = algos.bubbleSort(array);
    console.log(animations);
    if (animations === undefined){
      return;
    } else {
      animations.steps.forEach((step, index) => {
          const firstEle = document.querySelector(`.sorting-visualizer :nth-child(${step[0]+1})`);
          const secondEle = document.querySelector(`.sorting-visualizer :nth-child(${step[1]+1})`);
          
          const isColorChange = index % 3 !== 1;
          if (isColorChange){
            const color = index % 3 === 0 ? ACCENT_COLOR : SECONDARY_COLOR;
            setTimeout(() => {
              firstEle.style.background = color;
              secondEle.style.background = color;
            }, arraySize <= 50 ? index * 40 : index * 5)
          } else if (animations.swap[index]){
            setTimeout(() => {
              swapAnimation(step[0], step[1]);
            }, arraySize <= 50 ? index * 40 : index * 5)
          }
        })
    }
  }

  useEffect(() =>{
    setArraySize(sliderValue);
    console.log(sliderValue);
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
          <Header/>
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
