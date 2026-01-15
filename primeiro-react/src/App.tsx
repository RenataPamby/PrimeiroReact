import { useState } from "react"

//Principal
export function App() {  
  const [list, setList] = useState([
    { id: '1', label: 'Estudar Type', },
    { id: '2', label: 'Estudar React', },
    { id: '3', label: 'Estudar Ingles', },
    { id: '4', label: 'Estudar Ingles', },
  ]);

  return (
      <div>
        <input/>
        <button>
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

