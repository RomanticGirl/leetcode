
// Minimum Distance to the Target Element
function getMinDistance(nums: number[], target: number, start: number): number {
    var min;
    for (let i = start; i < nums.length; i++) {
        if (nums[i] == target) {
            min = Math.abs(i - start)
            break;
        }
    }
    for (let i = start; i >= 0; i--) {
        if (nums[i] == target) {
            min = min! > Math.abs(i - start) || !min ? Math.abs(i - start) : min
            break
        }
    }
    return min!
};

// Remove One Element to Make the Array Strictly Increasing
function canBeIncreasing(nums: number[]): boolean {
    let counter = 0;
    const isSorted = (arr: number[]) => arr.every((v, i, a) => !i || a[i - 1] < v)
    for (let i = 0; i < nums.length; i++) {
        counter = nums[i]
        delete nums[i]
        let arr: number[] = [];
        nums.forEach((x) => x ? arr.push(x) : null)
        if (isSorted(arr)) {
            return isSorted(arr);
        };
        nums[i] = counter;
        arr = [];
    }
    return false;
};

// Find the Maximum Divisibility Score
function maxDivScore(nums: number[], divisors: number[]): number {
    const results: number[][] = [];
    let maxCount = 1;
    let maxDivisor = 1000000000;
    for (let j = 0; j < divisors.length; j++) {
        results.push([divisors[j]])
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % divisors[j] == 0) {
                results[j].push(nums[i]);
            }
        }
    }
    for (let i = 0; i < results.length; i++) {
        if (results[i].length >= maxCount) {
            if (results[i].length == maxCount) {
                maxDivisor = maxDivisor > results[i][0] ? results[i][0] : maxDivisor;
            } else if (results[i].length > maxCount) {
                maxCount = results[i].length;
                maxDivisor = results[i][0];
            }
        }
    }

    return maxDivisor;
};
