function generateWorstArray(arrLength) {
    let res = []
    for (let i = arrLength; i > 0; --i) {
        res.push(i)
    }
    return res
}

function generateBestArray(arrLength) {
    let res = []
    for (let i = 1; i <= arrLength - 10; ++i) {
        res.push(i)
    }
    for (let i = arrLength; i >= arrLength - 10; --i) {
        res.push(i)
    }
    return res
}

function generateRandomArray(arrLength) {
    let res = []
    for (let i = 0; i < arrLength; ++i) {
        res.push(Math.floor(Math.random() * 100))
    }
    return res
}


function insertionSort(arr) {
    let array = [...arr]
    let start = Date.now()
    for (let i = 1; i < array.length; ++i) {
        let temp = array[i], j = i - 1
        while (j >= 0 && temp < array[j]) {
            array[j + 1] = array[j]
            --j
        }
        array[j + 1] = temp
    }
    let finish = Date.now()
    return {
        array: array,
        spentTime: finish - start
    }
}

function shellSort(arr) {
    let arrSize = arr.length;
    let start = Date.now()
    for (let step = Math.floor(arrSize / 2); step > 0; step = Math.floor(step / 2)) {
        for (let i = step; i < arrSize; i += 1) {
            let temp = arr[i], j;
            for (j = i; j >= step && arr[j - step] > temp; j -= step) {
                arr[j] = arr[j - step];
            }
            arr[j] = temp;
        }
    }
    let finish = Date.now()
    return {
        array: arr,
        spentTime: finish - start
    }
}

let insWorstLit = insertionSort(generateWorstArray(50)),
    insWorstBig = insertionSort(generateWorstArray(10000)),
    insRandLit = insertionSort(generateRandomArray(50)),
    insRandBig = insertionSort(generateRandomArray(10000)),
    insBestLit = insertionSort(generateBestArray(50)),
    insBestBig = insertionSort(generateBestArray(10000))


let shellWorstLit = shellSort(generateWorstArray(50)),
    shellWorstBig = shellSort(generateWorstArray(10000)),
    shellRandLit = shellSort(generateRandomArray(50)),
    shellRandBig = shellSort(generateRandomArray(10000)),
    shellBestLit = shellSort(generateBestArray(50)),
    shellBestBig = shellSort(generateBestArray(10000))


// console.log(insertionSort([1, 6, -1, 4, -10]))
// console.log(shellSort([1, 6, -1, 4, -10]))

console.log('Insertion sort')
console.log(insWorstLit)
console.log(insWorstBig)
console.log(insRandLit)
console.log(insRandBig)
console.log(insBestLit)
console.log(insBestBig)
console.log('Shell sort')
console.log(shellWorstLit)
console.log(shellWorstBig)
console.log(shellRandLit)
console.log(shellRandBig)
console.log(shellBestLit)
console.log(shellBestBig)