import { useState } from 'react';


//Principal
export function App() {  
  //tipando o useState
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  //O useState é como se foce uma função, só que para renderização
  //então existe um forma de com se declara ele
  //[nome var, nome funçao] = useState<tipo>(declaração inicial)
  const [nome, setNome] = useState<string>("");
  const [name, setName] = useState(""); //você também pode homitir o tipo,
                                        // pois ele assume altomaticamente

  return (
      <div>
        {/*Forma 01*/}
        {hide && <p>Teste1</p>} {/*Testa com um "menu hamburger?"*/}
        {!hide && <p>Teste2</p>}

        {/*Forma 02*/}
        {hide
          ? <p>Teste1</p>
          : <p>Teste2</p>     
        }
        <button onClick={() => setHide(!hide)}>
         Toggle
        </button>

        <button onClick={() => setCount(count+1)}>
          {count}
        </button>
      </div>
  )
}

