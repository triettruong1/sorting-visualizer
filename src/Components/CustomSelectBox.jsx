import '../Styles/CustomSelect.css';

const CustomSelectBox = () => {
    return (  
        <div className="algoselect">
            <select className='select-box'>
                <option value="bubble">Bubble Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="selection">Selection Sort</option>
            </select>
        </div>
    );
}
 
export default CustomSelectBox;