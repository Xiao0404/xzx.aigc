import {useState} from 'react';
import LanguageSelector from './/components/LanguageSelector';
const App = () => {
  // useState  现在最牛逼的hook技术
  // vue 借鉴了 react hooks 思想
  // useReducer  vue-router , react  框架本身就内置了 hook函数
  // pinia api 
  const [sourceLanguage,setSourceLanguage]  = useState('eng_Latn');
  const [targetLanguage,setTargetLanguage]  = useState('zho_Hans');
  const [input,setInput] = useState('');
  const [output,setOutput] = useState('');

  setTimeout(()=>{
    setSourceLanguage('zh_Hans')
  },3000)

  return (
    <>
      <h1>Transformers.js</h1>
      <p>来自HuggingFace 抱抱脸社区的 NLP js库</p>
      <p>未来端模型将大放</p>
      <div className="container">
       <LanguageSelector 
        type="Source"
        defaultLanguage={sourceLanguage}
        onChange={x => setSourceLanguage(x.target.value)}
       />
       <LanguageSelector 
        type="Source"
        defaultLanguage={targetLanguage}
        onChange={x => setSourceLanguage(x.target.value)}
       />


      </div>
    </>
  )
}

export default App;