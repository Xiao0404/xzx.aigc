// 选择所有的鼓键元素
const keys = document.querySelectorAll('.key');

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
   
// }

// 定义播放声音的函数
const playSound = (event) => {
    // 获取按键的建码
    const keyCode = event.keyCode;
      // 选择与键码对应的鼓键元素和音频元素
    const ele = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   // console.log(ele);
     // 如果找到对应的元素
    if (ele && audio) {
        // 添加 'playing' 类触发动画效果
        ele.classList.add('playing');
        // 将音频的播放时间重置为开始
        audio.currentTime = 0; 
        // 播放音频
        audio.play();
        
        setTimeout(() => {
            // 在 800 毫秒后移除 'playing' 类，结束动画效果
            ele.classList.remove('playing');
        }, 800);
    }
};

window.addEventListener('keydown', playSound); // 监听键盘按键事件
