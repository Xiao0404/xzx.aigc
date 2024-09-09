import { useState } from 'react'
import  MemberEntity  from './components/MemberEntity'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MemberEntity />
    </>
  )
}

export default App
