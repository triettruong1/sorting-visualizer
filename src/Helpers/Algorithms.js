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
                animations.swap[stepCounter++] = true;
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter++] = true;
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter] = true;
            } else{
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter++] = false;
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter++] = false;
                animations.steps[stepCounter] = [j, j+1];
                animations.swap[stepCounter] = false;
            }
            stepCounter++;
        }
    }
    animations.array = array.slice();
    return animations;
};

export const getMergeSortAnimations = (sortingArray) => {
    let auxiliaryArray = sortingArray.slice();
    let animations = []
    mergeSortRecur(sortingArray, auxiliaryArray, 0, sortingArray.length - 1, animations);
    return animations;
}

const mergeSortRecur = (sortingArray, auxiliaryArray, startIdx, endIdx, animations) => {
    if (startIdx === endIdx) return;
    var midIdx = Math.floor((endIdx + startIdx) / 2);
    mergeSortRecur(auxiliaryArray, sortingArray, startIdx, midIdx, animations);
    mergeSortRecur(auxiliaryArray, sortingArray, midIdx + 1, endIdx, animations);

    doMerge(sortingArray, auxiliaryArray, startIdx, midIdx, endIdx, animations);
    
}

const doMerge = (sortingArray, auxiliaryArray, startIdx, midIdx, endIdx, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = midIdx + 1;
    while(i <= midIdx && j <= endIdx)
    {
        animations.push([i, j]);
        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k, auxiliaryArray[i]]);
            
            sortingArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]])

            sortingArray[k++] = auxiliaryArray[j++];
        }
    }
    

    while(i <= midIdx){
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, auxiliaryArray[i]])
        sortingArray[k++] = auxiliaryArray[i++];
    }

    while(j <= endIdx){
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, auxiliaryArray[j]])

        sortingArray[k++] = auxiliaryArray[j++];
    }

}

export const getQuickSortAnimations = (sortingArray) => {
    const auxiliaryArray = sortingArray.slice();
    const animations = {
        steps: [],
        swap: []
    };
    quickSortRecur(sortingArray, 0, sortingArray.length - 1, animations);
    return animations;
}

const quickSortRecur = (sortingArray, startIdx, endIdx, animations) =>{
    if (startIdx > endIdx) return;
    const pivotIdx = getPivot(sortingArray, startIdx, endIdx, animations);
    quickSortRecur(sortingArray, startIdx, pivotIdx-1, animations);
    quickSortRecur(sortingArray, pivotIdx + 1, endIdx, animations);
}

const getPivot = (sortingArray, startIdx, endIdx, animations) => {
    const pivot = sortingArray[endIdx];
    let eleFromLeft = startIdx - 1, eleFromRight = startIdx;
    let stepCounter = 0;
    while(eleFromRight < endIdx) {
        // console.log(eleFromLeft + " " + eleFromRight);
        if (sortingArray[eleFromRight] < pivot){
            animations.steps.push([eleFromLeft,eleFromRight]);
            animations.swap.push(true);
            animations.steps.push([eleFromLeft,eleFromRight]);
            animations.swap.push(true);
            eleFromLeft++;
            animations.steps.push([eleFromLeft, eleFromRight]);
            animations.swap.push(true);
            [sortingArray[eleFromLeft], sortingArray[eleFromRight]] = [sortingArray[eleFromRight], sortingArray[eleFromLeft]]
        } else {
            animations.steps.push([eleFromLeft,eleFromRight]);
            animations.swap.push(false);
            animations.steps.push([eleFromLeft,eleFromRight]);
            animations.swap.push(false);
            animations.steps.push([eleFromLeft,eleFromRight]);
            animations.swap.push(false);
        }
        eleFromRight++;
        stepCounter++;
    }
    animations.steps.push([eleFromLeft + 1, endIdx]);
    animations.swap.push(true);
    animations.steps.push([eleFromLeft + 1, endIdx]);
    animations.swap.push(true);
    animations.steps.push([eleFromLeft + 1, endIdx]);
    animations.swap.push(true);
    [sortingArray[eleFromLeft+1], sortingArray[endIdx]] = [sortingArray[endIdx], sortingArray[eleFromLeft+1]];

    return eleFromLeft + 1;
}

export const getSelectionSortAnimations = (sortingArray) =>{
    const animations = {
        steps: [],
        swap: []
    }

    selectionSort(sortingArray, animations)
    return animations;
}

const selectionSort = (sortingArray, animations) => {
    let stepCounter = 0;
    for (let placementIdx = 0; placementIdx < sortingArray.length - 1; placementIdx++) {
        let smallestValueIdx = placementIdx;
        for (let i = placementIdx + 1; i < sortingArray.length; i++) {
            animations.steps.push([smallestValueIdx, i]);
            animations.steps.push([smallestValueIdx, i]);
            animations.steps.push([smallestValueIdx, i]);
            animations.swap.push(false);
            animations.swap.push(false);
            animations.swap.push(false);
            if (sortingArray[i] < sortingArray[smallestValueIdx]){
                smallestValueIdx = i;
            }   
        }
        animations.steps.push([placementIdx ,smallestValueIdx]);
        animations.steps.push([placementIdx ,smallestValueIdx]);
        animations.steps.push([placementIdx ,smallestValueIdx]);
        animations.swap.push(true);
        animations.swap.push(true);
        animations.swap.push(true);
        [sortingArray[placementIdx], sortingArray[smallestValueIdx]] = [sortingArray[smallestValueIdx], sortingArray[placementIdx]]
    }
}