// 不能做DOM Window self = this 

import {
    pipeline,  // pipe 模块，派出一个任务
    env
} from 'http://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false; // 不用加载本地大模型 

// es6 的 class 封装  翻译pipeline 类
//  @func  翻译nlp任务派发单例类(实例化一次)  pipeline  非常耗性能

class MyTranslationPipeline {
    // 静态属性 只有类内部才能用， private  public 实例的属性
    static  task =  'translation' 
    // 使用的翻译模型 
    static model = 'Xenova/nllb-200-distilled-600M'
    // 单例
    static instance = null

    static async getInstance (progress_callback=null) {
        if (this.instance === null){
            console.log('-------');
            // self.postMessage(x)
            this.instance = pipeline(this.task,this.model,{
                progress_callback
            })
        } 
        return this.instance
    }
}


self.addEventListener('message',async (event) => {
    // 单例
    let translator = await  MyTranslationPipeline.getInstance((x) => {
        console.log(x);     
    })
    console.log(event)
    self.postMessage({
        text: 'AI任务完成了'
    })
})