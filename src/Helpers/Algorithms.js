export const bubbleSort = sortingArray => {
    var animations = {
        steps: [],
        swap: []
    };
    var array = sortingArray.slice();
    var stepCounter = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const value = array[j];
            const nextValue = array[j+1];
            if (value > nextValue)
            {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter] = true;
            } else{
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter] = false;
            }
            stepCounter++;
        }
    }
    return animations;
};