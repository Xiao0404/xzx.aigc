var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function updateClock(){
    //获取时间
    var now = new Date();
    //获取秒
    var seconds = now.getSeconds();
    //计算秒针转动角度
    var secondsDeg = ((seconds / 60) * 360) + 90;
    //秒针转动
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    //获取分钟
    var minutes = now.getMinutes();
    //计算分针转动角度    
    var minutesDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    //分针转动  
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    //获取时钟
    var hours = now.getHours();
//计算时针角度
    var hoursDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
//时针转动
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
