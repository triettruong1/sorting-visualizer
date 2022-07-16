import SortingVisualizer from './Components/SortingVisualizer';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import * as algos from './Helpers/Algorithms';

import './App.css';
function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const [animationSpeed, setAnimationSpeed] = useState(500);
  const [isSorting, setIsSorting] = useState(false);
  var ACCENT_COLOR = "#dd9230";
  var SECONDARY_COLOR = "#000";

  const handleSlide = (value) => {
		setSliderValue(value);
  }

  const handleResetClick = () => {
		resetColors();
		return newRandomizedArray();
  }

  const handleSpeedSlide = (value) => {
		switch (value) {
			case 0:
				setAnimationSpeed(500)
				break
			case 1:
				setAnimationSpeed(100)
				break
			case 2:
				setAnimationSpeed(50)
				break
			case 3:
				setAnimationSpeed(15)
				break
			case 4:
				setAnimationSpeed(5)
				break
			case 5:
				setAnimationSpeed(3)
				break

			default:
				break
		}
  }
  
  const handleBeginClick = async () => {
	  const selected = document.querySelector(".select-box").value;
	  await setIsSorting(true);
		switch (selected) {
			case "bubble":
				beginBubbleSort();
				break
			case "merge":
				beginMergeSort();
				break
			case "quick":
				beginQuickSort();
				break
			case "selection":
				beginSelectionSort();
				break
			default:
				break
		}
  }

  function beginBubbleSort() {
	const animations = algos.bubbleSort(array);
	let animationTime = 0;
	animations.steps.forEach((step, index) => {
		const bars = document.querySelectorAll(".bar");
		const isColorChange = index % 3 !== 1;
		const [barOneIdx, barTwoIdx] = step;
		if (isColorChange) {
			const color = index % 3 === 0 ? ACCENT_COLOR : SECONDARY_COLOR;
			setTimeout(() => {
				bars[barOneIdx].style.background = color;
				bars[barTwoIdx].style.background = color;
			}, index * animationSpeed)
		} else if (animations.swap[index]) {
			setTimeout(() => {
				swapAnimation(barOneIdx, barTwoIdx);
			}, index * animationSpeed)
		}
		animationTime = index * animationSpeed;
	});
	setTimeout(() => {
		setIsSorting(false);
	}, animationTime)
  }

  function beginMergeSort() {
	const animations = algos.getMergeSortAnimations(array);
	let animationTime = 0;
	animations.forEach((step,index) => {
		const bars = document.querySelectorAll(".bar");
		const isColorChange = index % 3 !== 2;
		if (isColorChange){
			const [barOneIdx, barTwoIdx] = step;
			const color = index % 3 === 0 ? ACCENT_COLOR : SECONDARY_COLOR;
			setTimeout(() => {
				bars[barOneIdx].style.background = color;	
				bars[barTwoIdx].style.background = color;	
			}, index * animationSpeed)
		} else {
			setTimeout(() => {
				const [barOneIdx, newHeight] = step;
				bars[barOneIdx].style.height = `${newHeight}%`;
			}, index * animationSpeed)
			animationTime = index * animationSpeed;
		}
	});
	setTimeout(() => {
		setIsSorting(false);
	}, animationTime)
  }

  function beginQuickSort() {
	const animations = algos.getQuickSortAnimations(array);
	let animationTime = 0;	
	animations.steps.forEach((step, index) => {
		const bars = document.querySelectorAll(".bar");
		const isColorChange = index % 3 !== 2;
		const [barOneIdx, barTwoIdx] = step;
		if (isColorChange){
			const color = index % 3 === 0 ? ACCENT_COLOR : SECONDARY_COLOR;
			setTimeout(() => {
				bars[barOneIdx].style.background = color;
				bars[barTwoIdx].style.background = color;
			}, index * animationSpeed)
		} else if (animations.swap[index]){
			setTimeout(() => {
				swapAnimation(barOneIdx, barTwoIdx);
			}, index * animationSpeed)
		}
		animationTime = index * animationSpeed;			
	});
	setTimeout(() => {
		setIsSorting(false);
	}, animationTime)	
  }

  function beginSelectionSort(){
	var animations = algos.getSelectionSortAnimations(array);
	let animationTime = 0;
	animations.steps.forEach((step, index) => {
		const bars = document.querySelectorAll(".bar");
		const isColorChange = index % 3 !== 1;
		const [barOneIdx, barTwoIdx] = step;
		if (isColorChange) {
			const color = index % 3 === 0 ? ACCENT_COLOR : SECONDARY_COLOR;
			setTimeout(() => {
				bars[barOneIdx].style.background = color;
				bars[barTwoIdx].style.background = color;
			}, index * animationSpeed)
		} else if (animations.swap[index]) {
			setTimeout(() => {
				swapAnimation(barOneIdx, barTwoIdx);
			}, index * animationSpeed)
		}
		animationTime = index * animationSpeed;
	})
	setTimeout(() => {
		setIsSorting(false);
	}, animationTime)
  }

  useEffect(() => {
		newRandomizedArray()
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arraySize])

  useEffect(() => {
		setArraySize(sliderValue)
		resetColors()
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue])

  useEffect(() => {
		return newRandomizedArray()
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function newRandomizedArray() {
		var newArray = []
		for (let i = 0; i < arraySize; i++) {
			newArray[i] = randomIntFromInterval(5, 100);
		}
		setArray(newArray)
  }

  function resetColors() {
		const bars = document.querySelectorAll(".bar");
		bars.forEach((bar) => {
			bar.style.background = SECONDARY_COLOR
		})
  }

  return (
		<div className="App">
			<Header />
			<SortingVisualizer array={array} />
			<Footer
				sliderHandler={handleSlide}
				speedSliderHandler={handleSpeedSlide}
				handleNewArrayClick={handleResetClick}
				handleBeginClick={handleBeginClick}
				isDisabled={isSorting}
			/>
		</div>
  )
}

const swapAnimation = (firstPos, secondPos) => {
  const firstEle = document.querySelector(`.sorting-visualizer :nth-child(${firstPos+1})`);
  const secondEle = document.querySelector(`.sorting-visualizer :nth-child(${secondPos+1})`);

  [firstEle.style.height, secondEle.style.height] = [secondEle.style.height, firstEle.style.height];
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
