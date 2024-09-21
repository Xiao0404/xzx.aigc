function solution(num, data) {
    let forces = new Array(num).fill(0);
    let force = 0;
    for(let i = 0;i<num;i++){
     if(data[i]==='R') force = num;
     else if(data[i]=='L') force = 0;
     else force = Math.max(force-1,0);
     forces[i] +=force; 
    }
 
    force = 0;
    for(let i =num-1;i>=0;i--){
      if(data[i]==='L') force = num;
      else if(data[i]==='R') force = 0;
      else force = Math.max(force-1,0);
 
      forces[i] -= force;
    }
    let count = 0;
    let res = []
    for(let i =0;i<num;i++){
      if(forces[i] === 0){
       count++;
       res.push(i+1);
      }
    }
    if(count>0){
        return `${count}:${res.join(',')}`;
    }else{
        return '0';
    }
 
 }
 
 function main() {
   //  You can add more test cases here
   console.log(solution(14, ".L.R...LR..L..") === "4:3,6,13,14");
  console.log(solution(5, "R....") === "0");
  console.log(solution(1, ".") === "1:1");
 }
 
 main();