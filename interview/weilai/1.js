function twoSum(nums, target){
        const map = new Map(); // hashMap  key 可以是对象 
        // Map 的查找 时间复杂度是 O(1)
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }


}