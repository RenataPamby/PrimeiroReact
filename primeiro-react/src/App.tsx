import { useState } from "react"
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";

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
            <TodoItem 
              id={listItem.id}
              label={listItem.label}
              complite={listItem.complite}

              onComplite={() => setList(
                  [...list.map(item => 
                    ({ ...item, complite: item.id === listItem.id ? true : item.complite})) 
                  ])}
              onRemove={() => setList([...list.filter(item => item.id !== listItem.id) ])}
            />
          ))}
        </ol>        
      </div>
  )
}

