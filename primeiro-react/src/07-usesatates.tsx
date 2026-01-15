import { useState } from 'react';


//Principal
export function App() {  

  {/*- Ajuda a controlar o fluxo de renderização 
     - Usado para guardar valores que você quer utilizar na sua aplicação (atualizar esses valores)
     - Quarda um valor na memória do react, e para atualizar o valor se usa o setCount, porque ele 
    “Manda o novo valor para o useState (atualiza o valor que esta em memoria) que faz o novo fluxo de reander com 
    o valor novo jogado na memória do react”. */}
  const [count, setCount] = useState(0);
  
  return (
      <div>
        <button onClick={() => setCount(count+1)}>
          {count}
        </button>
      </div>
  )
}