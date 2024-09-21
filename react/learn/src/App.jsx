import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from'react-redux'
import {addNum,changeMesThunk} from './store/toolkit'

function App() {

  let num = useSelector((state)=>{  
    return state.numReducer.num
  })
 
  let mes = useSelector((state)=>{
    return state.mesReducer.mes
  })

  let dispatch = useDispatch()

  return (
    <>
       <span>{num}</span>
        <button onClick={()=>{
          // dispatch({
          //   type:"num/addNum"
          // })
          dispatch(addNum())
        }}>点击添加</button>

        <br />
        <span>{mes}</span>
        <button onClick={()=>{
          dispatch(changeMesThunk(20))
        }}>
          修改
        </button>

    </>
  )
}

export default App
