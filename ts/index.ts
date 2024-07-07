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

canBeIncreasing([1, 2, 10, 5, 7]);