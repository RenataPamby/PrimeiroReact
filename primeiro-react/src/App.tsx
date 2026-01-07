import { useState } from "react"


function App() {
  const [count, setCount] = useState(0) 
  {/*useSatate = Valor inicial da função*/}

  return (
    <>
    <p>Hello Word</p>
    <button onClick={() => setCount(count + 1)}> {/*setCount é uma função*/}
      Contador {count} {/*count é uma variavel que sera contada*/}
    </button>
    </>
  )
}

export default App
