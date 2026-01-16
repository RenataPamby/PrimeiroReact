import { useState } from "react"
import { InputAdd } from "./components/InputAdd";

//Principal
export function App() {   
  const [list, setList] = useState([
    { id: '1', label: 'Estudar Type', complite: false,},
    { id: '2', label: 'Estudar React', complite: false,},
    { id: '3', label: 'Estudar Ingles', complite: false,},
    { id: '4', label: 'Estudar Ingles', complite: false,},
  ]);

  {/*(...list) tras tudo o que tinha antes na lsita*/}
  {/*Esta lidando com o adicionar do evendto do input
    No iputAdd.tsx, ele lida com o do click do input */}
  const handleAdd = (value: string) => {
    setList([      
      ...list, 
      { id: (list.length+1).toString(), label: value, complite: false}
    ])
  }


  return (
      <div>
        {/*(onAdd) é um evento que acontece dentro do componente
          é o mesmo que o onClick ou o onChange*/}
        <InputAdd onAdd={handleAdd} />
        

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

