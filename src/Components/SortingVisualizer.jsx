import '../Styles/SortingVisualizer.css';

const SortingVisualizer = ({array}) => {
    
    return ( 
        <div className="flex-center canvas">
            <div className= "sorting-visualizer">
                {array.map((value, index) => (
                    <div className="bar" key={index} style={{height: `${Math.floor(value)}%`}}>
                    </div>
                ))}
            </div>
        </div>
     );
}


export default SortingVisualizer;