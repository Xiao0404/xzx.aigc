import {onMounted, ref} from 'vue'
export const useMouse = () => {


    const x = ref(0);
    const y = ref(0);
    const update = (event) =>{
       x.value = event.clientX;
       y.value = event.clientY;
    }
    
    // 鼠标悬停的坐标
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    return {
        x,
        y
    }

}