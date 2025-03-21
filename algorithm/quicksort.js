function quicksort(arr,low=0,high=arr.length-1){
        if(low >= high) return ;

        const pivotIndex = patition(arr,low,high);
        quicksort(arr,low,pivotIndex-1);
        quicksort(arr,pivotIndex+1,high);

        return arr;
}


function patition(arr,low,high){
    const pivot = arr[high];
    let i = low -1;
    for(let j=low;j<high;j++){
        if(arr[j] <= pivot){
            i++;
        [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}

let arr = [1,3,6,4,5];
console.log(quicksort(arr));