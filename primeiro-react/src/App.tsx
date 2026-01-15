import { useState } from "react"

//Principal
export function App() { 
  const [value, setValue] = useState(''); 
  const [list, setList] = useState([
    { id: '1', label: 'Estudar Type', },
    { id: '2', label: 'Estudar React', },
    { id: '3', label: 'Estudar Ingles', },
    { id: '4', label: 'Estudar Ingles', },
  ]);

  return (
      <div>
        {/*(onChange) atualiza o valor que vc esta colocando na input, e manda para setValue*/}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
         {/*(...list) tras tudo o que tinha antes na lsita*/}
        <button        
          onClick={() => {setList([...list, { id: (list.length+1).toString(), label: value} ]);
          setValue('')
          }}>          
          Adicionar
        </button>

        <ol>
          {/*A função homitiu o tipo(string),
            não mais pq agora é do tipo objeto*/}
          {/*o key tras que cada elemento da lista é unico.. 
            ..q um n é o mesmo que o outro*/}
          {list.map((listItem) => (
            <li key={listItem.id}>
              {listItem.label}
            </li>
          ))}
        </ol>
        
      </div>
  )
}

