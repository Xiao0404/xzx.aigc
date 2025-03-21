function combineArrays(arrs){
        let result =[];

        function combine(current,index){
            if(index === arrs.length){
                result.push(current);
                return;
            }

            let next = arrs[index];
            for(let i=0;i<next.length;i++){
                combine(current.concat(next[i]),index+1);
            }
        }

        combine([],0);
        return result;
}

let input = [[-1, 1], [1, 2], [1, 3], [2, 4], [3, 5]];
console.log(combineArrays(input));