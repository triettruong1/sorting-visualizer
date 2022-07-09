import { useState, useEffect } from "react";

import '../Styles/SortingVisualizer.css';

const SortingVisualizer = ({arrayAmount, resetArray}) => {
    var [array, setArray] = useState([]);
    var [arraySize, setArraySize] = useState(arrayAmount);

    const newRandomizedArray = () => {
        var newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray[i] = randomIntFromInterval(5, 100);
        }
        setArray(newArray);
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect (() => {
        setArraySize(arrayAmount);
        return newRandomizedArray;
    }, [arrayAmount])

    useEffect (() => {
        console.log(resetArray);
        return newRandomizedArray;
    }, [resetArray])

    return ( 
        <div className="sorting-visualizer">
            {array.map((value, index) => (
                <div className="bar" key={index} style={{height: `${value/2}vh`}}>
                </div>
            ))}
        </div>
     );
}
 
export default SortingVisualizer;