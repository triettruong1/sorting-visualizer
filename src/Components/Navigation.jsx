import '../Styles/Navigation.css';

const Navigation = ({sliderHandler, sliderValue, handleNewArrayClick}) => {

    

    return (
        <div className="nav">
            <h1>Sorting Algorithms Visualizer</h1>
            <div className="algoselect">
                <select name="algos">
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="heap">Heap Sort</option>
                </select>
            </div>
            <div className="buttons">
                <button onClick={handleNewArrayClick}>New Array</button>
                <button>Begin</button>
            </div>
            <div>
                <input type="range" min="1" max="100" value={sliderValue} id="element-amount" onChange={sliderHandler}/>
            </div>
        </div>
      );
}
 
export default Navigation;