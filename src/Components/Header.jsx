import '../Styles/Header.css';
import CustomSelectBox from './CustomSelectBox';

const Header = () => {
    return (
        <div className="nav">
            <div className="container flex-col header">
                <div className="app-title text-center">
                    <h1>Sorting Algorithms Visualizer</h1>
                </div>
                <span className="choose">Choose Algorithm</span>
                <CustomSelectBox/>
            </div>
        </div>
      );
}
 
export default Header;