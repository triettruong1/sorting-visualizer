import { useState, useEffect } from "react";

import '../Styles/SortingVisualizer.css';
import * as algos from '../Helpers/Algorithms';

const SortingVisualizer = ({arrayAmount, resetArrayBtn, beginSortBtn}) => {
    var [array, setArray] = useState([]);
    var [arraySize, setArraySize] = useState(arrayAmount);
    const animations = algos.bubbleSort(array);
    
    useEffect(() => {
        return newRandomizedArray;
    }, []);

    useEffect (() => {
        setArraySize(arrayAmount);
        return newRandomizedArray;
    }, [arrayAmount])

    useEffect (() => {
        return newRandomizedArray;
    }, [resetArrayBtn])

    useEffect(() => {
        if (animations === undefined){
            return;
        } else {
            animations.steps.forEach((step, index) => {
                setTimeout(() => {
                    console.log("swapping");
                    if (animations.swap[index]){
                        swapAnimation(step[0], step[1]);
                    }
                }, arrayAmount <= 25 ? index * 75 : index * 5);
            })
        }
    }, [beginSortBtn]) 
    const newRandomizedArray = () => {
        var newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray[i] = randomIntFromInterval(5, 100);
        }
        setArray(newArray);
    }
    

    return ( 
        <div className="sorting-visualizer">
            {array.map((value, index) => (
                <div className="bar" key={index} style={{height: `${value/3}vh`}}>
                </div>
            ))}
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
export default SortingVisualizer;