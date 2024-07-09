<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseOut">
           <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
           <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)"  @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
            
    </div>
    <!-- <button type="button" @click="onRate(2)">点击</button> -->

</template>

<script setup>

        // 新的需求  添加主题，不同风格的星

        import {ref,defineProps,computed,defineEmits} from 'vue';  // 传递和计算属性(形式上是函数)和通信的事件
        
        let props = defineProps({
            value: Number,
            theme:{type: String,default:'orange'}
        })
        // 自身的状态 
        let width = ref(props.value)
        let  fontwidth = computed(()=>`width:${width.value}em`);  // em相对于字体大小的等比例

      

        let themeObj = {
            orange:'#fa541c',
            blue:'#40a9ff',
            green:'#73d13d',
            black:'#000',
            red:'#f5222d',
            yellow:'#fadb14'
        }

        let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value)) 

        const fontstyle = computed(()=> {
            return `color:${themeObj[props.theme]}`
        })

        let emits = defineEmits(["update-rate"])
        
        const  onRate = (num) => {
            emits("update-rate",num)
        }

        function mouseOver(i){
                width.value = i;
        }
        function mouseOut(){
                width.value=props.value;
        }

</script>

<style lang="css" scoped>
        .rate{
            position: relative;
            display: block;
        }
        .rate span{
            /* 两种做法解决星星异位 */
            /* letter-spacing: 3px;    */
            /* 文字之间的间隙 */
            display: inline-block;
            width: 1rem;
            height: 22px;
            overflow: hidden;
            /* 设置span成为一个行内块，且设置高度和宽度，超出的则隐藏 */
        }
        .rate > span.hollow{
            position:absolute;
            display: block;
            top: 0;
            left: 0;
            width: 0;
            overflow: hidden;
        }
</style>