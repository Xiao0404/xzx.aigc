function randomInt(min,max){
        const n = Math.random()
        // 生成一个介于最小字数和最大字数之间的字数
        return Math.floor(min*(1-n)+max*n)  
}

function createRandomPicker(arr){
    // 使用闭包，相当于新建一个数组，再对数组进行操作
   arr = [...arr]
    
   // 保证连续两次取到的不一样
   // 每次将取出的序号与最后一位对调位置，且每次取出的都是上一次的最后一个
    function randomPick() {
       const len = arr.length-1
       const index = randomInt(0,len);
       [arr[index],arr[len]] = [arr[len],arr[index]]
       return arr[index]
    }
    // 先调用一次放弃掉，使得每次第一次调用出的不一定是原数组的最后一位
    randomPick()
    return randomPick

}

module.exports = {
    randomInt,
    createRandomPicker
}
