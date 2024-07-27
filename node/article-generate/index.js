

const {generate} = require('./lib/generator.js')
const {createRandomPicker} = require('./lib/random.js')
const {loadCorpus,saveCorpus} = require('./lib/corpus.js')


let article = []
let title = '';

 
function handle(){

   



    // 异步
    // 这里的路径填绝对路径，当node感知的目录发生改变可能会出现问题
    // const content =  fs.readFile(_path,{encoding:'utf8'},(err,data) =>{
    //     if(!err){
    //         console.log(data);

    //     }
    // })

    const corpus = loadCorpus('corpus/data.json');
    title = createRandomPicker(corpus.title)();
    article.push(title); // Ensure the title is the first element
    article.push(...generate(title, { corpus }));
    saveCorpus(title, article);

    

}

  module.exports = {
    article,
    handle,
    title

  }