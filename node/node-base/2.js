// 石头剪刀布
// node 2.js rock     电脑随机出一个，并输出结果

let playerAction = process.argv[process.argv.length-1]

// 随机
let random = Math.random() *3
let computerAction = ''
if(random <1 ){
     computerAction = 'rock'
}else if(random <2){
     computerAction ='scissors'
}else{
     computerAction = 'paper'

}

// 比较
if(playerAction === computerAction){
    console.log( "你出的是:" + playerAction +' vs ' +'电脑出的是:' +computerAction);
    console.log('平局')
}else if(playerAction === 'rock' && computerAction ==='scissors' ||
    playerAction ==='scissors' && computerAction === 'paper' ||
    playerAction === 'paper' && computerAction === 'rock'){
        console.log( "你出的是:" + playerAction +' vs "电脑出的是" '+computerAction);
    console.log('你赢了')
}else{
    console.log( "你出的是:" + playerAction +' vs "电脑出的是" '+computerAction);
    console.log('你输了')
}