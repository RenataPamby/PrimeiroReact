import { useState } from "react"

//Principal
export function App() { 
  const [value, setValue] = useState(''); 
  const [list, setList] = useState([
    { id: '1', label: 'Estudar Type', complite: false,},
    { id: '2', label: 'Estudar React', complite: false,},
    { id: '3', label: 'Estudar Ingles', complite: false,},
    { id: '4', label: 'Estudar Ingles', complite: false,},
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
          onClick={() => {setList([...list, { id: (list.length+1).toString(), label: value, complite: false} ]);
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
              {listItem.complite ? ' Concluido ' : ''}

              <button
                onClick={() => setList(
                  [...list.map(item => 
                    ({ ...item, complite: item.id === listItem.id ? true : item.complite})) 
                  ])}
              >
                Concluir
              </button>
              {/*filtra o intem para os itens que forem direfentes
                deste item.id eles irão permanecer*/}
              <button
                onClick={() => setList([...list.filter(item => item.id !== listItem.id) ])}
              >
                Remover
              </button>
            </li>
          ))}
        </ol>
        
      </div>
  )
}

