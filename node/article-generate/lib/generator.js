
const {randomInt,createRandomPicker} = require('./random.js')

// 生成文章
function generate(title,{ corpus, min=1000 , max=2000 }){
        const articleLength = randomInt(min,max)
            const {famous,bosh_before,bosh,conclude,said} = corpus

            // map 循环，接受一个回调函数，返回一个数组 ,会将函数中返回的放进这个 map 循环要返回的数组中
            // 这里相当于借助 map 循环 去封装五个类似功能的函数
        const [pickFamous,pickBoshBefore,pickBosh,pickConclude,pickSaid]  
        =   [famous,bosh_before,bosh,conclude,said].map(createRandomPicker)
        
        const article = []
        let totalLength = 0
        while(totalLength < articleLength){
            let section = ''
            const sectionLength = randomInt(100,500)
            while(section.length < sectionLength){
                const n = randomInt(0,100)
                if(n<20){ // 名人名言
                    section += sentence(pickFamous,{said:pickSaid , conclude:pickConclude})



                }else if (n<50){ // 前置废话
                    section += sentence(pickBoshBefore,{title}) + sentence(pickBosh,{title})

                }else {     // 废话
                    section += sentence(pickBosh,{title})
                }
            }
            totalLength += section.length
            article.push(section)

        }

        return article


}

// 文本替换
function sentence( pick ,replacer ){
        let res = pick()  
        for( let key in replacer){
            // new RegExp(`{{${key}}}}`,'g')
         res =  res.replace(
                new RegExp(`{{${key}}}`, 'g'),
               typeof replacer[key] === 'function'? replacer[key]() : replacer[key]
            )
        }
        return res

}

module.exports = {
    generate,
    sentence
}