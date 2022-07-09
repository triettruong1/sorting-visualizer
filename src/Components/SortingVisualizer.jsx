import { useState, useEffect } from "react";

import '../Styles/SortingVisualizer.css';

const SortingVisualizer = ({size}) => {
    var [array, setArray] = useState([]);
    var [arraySize, setArraySize] = useState(size);
    useEffect (() => {
        return newRandomizedArray;
    }, [])

    const newRandomizedArray = () => {
        var newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray[i] = randomIntFromInterval(5, 100);
            console.log(newArray[i]);
        }
        setArray(newArray);
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return ( 
        <div className="sorting-visualizer">
            {array.map((value, index) => (
                <div className="bar" key={index} style={{height: `${value*3}px`}}>
                </div>
            ))}
        </div>
     );
}
 
export default SortingVisualizer;