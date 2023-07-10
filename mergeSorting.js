function merge(leftArr,rightArr){
    let mergedArr=[]
    let lti=0
    let rti=0
    while(lti<leftArr.length && rti<rightArr.length){
        if(leftArr[lti]<rightArr[rti]){
            mergedArr.push(leftArr[lti])
            lti++
        }
        else{
            mergedArr.push(rightArr[rti])
            rti++
        }
    }
        while(lti<leftArr.length){
            mergedArr.push(leftArr[lti])
            lti++
        }
        while(rti<rightArr.length){
            mergedArr.push(rightArr[rti])
            rti++
    }
    return mergedArr
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }

    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)
    const right= arr.slice(mid)

    const leftArr=mergeSort(left)
    const rightArr=mergeSort(right)

    return merge(leftArr,rightArr)
}

const arr=[1,5,4,3,6,78,4]
const sortedArr=mergeSort(arr)
console.log(sortedArr)