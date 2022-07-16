import ReactSlider from "react-slider";
import { useState } from "react";
import "../Styles/CustomSliderMark.css";

const CustomSliderWithMark = ({speedSliderHandler, sliderClassName , isDisabled}) => {
    const [currentValue, setCurrentValue] = useState(0);

    return (
        <div className={sliderClassName + "-slider"}>
            <span className="sliderSpan flex-center">{currentValue === 0 ? currentValue + ".5x" : currentValue + "x"}</span>
            <ReactSlider
                className="customSlider"
                trackClassName="customSlider-track"
                markClassName="customSlider-mark"
                value={currentValue}
                defaultValue={0}
                onChange={(value) => {
                    speedSliderHandler(value);
                    setCurrentValue(value)}}
                marks={1}
                min={0}
                max={5}
                renderMark={(props) => {
                    if (props.key < currentValue) {
                        props.className =
                            "customSlider-mark customSlider-mark-before";
                    } else if (props.key === currentValue) {
                        props.className =
                            "customSlider-mark customSlider-mark-active";
                    }
                    return <span {...props} />;
                }}
                disabled={isDisabled}
            />
        </div>
    );
};

export default CustomSliderWithMark;
