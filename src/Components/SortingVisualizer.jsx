import '../Styles/SortingVisualizer.css';

const SortingVisualizer = ({array}) => {
    // console.log(array);

    return ( 
        <div className="sorting-visualizer">
            {array.map((value, index) => (
                <div className="bar" key={index} style={{height: `${Math.floor(value/2.5)}vh`}}>
                </div>
            ))}
        </div>
     );
}


export default SortingVisualizer;