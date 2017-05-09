"use strict";

const findMinMax = (arr) => {
    if (Array.isArray(arr)) {
        if (arr.length > 1) {
            arr.sort(function(a,b) { return a - b; });
            let min = arr[0],
                max = arr[arr.length - 1];
            if (arr[0] === arr[1]) {
                return [arr[0]];
            } else {
                return [min, max];
            }
        } else {
            return arr;
        }
    } else {
        return false;
    }
};
