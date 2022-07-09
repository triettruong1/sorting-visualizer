import '../Styles/Navigation.css';

const Navigation = () => {
    return (
        <div className="nav">
            <div className="container flex-col header">
                <h1>Sorting Algorithms Visualizer</h1>
                <span className="choose">Choose Algorithm</span>
                <div className="algoselect">
                    <div className="select">
                        <span>Select Algorithm</span>
                    </div>
                    <input type="hidden" name="algos"/>
                    <ul className='dropdown-menu'>
                        <li id="bubble"></li>
                        <li id="insert"></li>
                    </ul>
                </div>
            </div>
        </div>
      );
}
 
export default Navigation;