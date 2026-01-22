import { useState } from "react"

import { TodoAPI } from "./shared/services/api/TodoAPI";
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";




TodoAPI.getAll().then(data => console.log('APP', data));


//Principal
export function App() {   
  const [list, setList] = useState([
    { id: '1', label: 'Estudar Type', complite: false,},
    { id: '2', label: 'Estudar React', complite: false,},
    { id: '3', label: 'Estudar Ingles', complite: false,},
    { id: '4', label: 'Estudar Ingles', complite: false,},
  ]);

  {/*(...list) tras tudo o que tinha antes na lsita*/}
  {/*Esta lidando com o adicionar do evento do input
    No iputAdd.tsx, ele lida com o do click do input */}
  const handleAdd = (value: string) => {
    setList([      
      ...list, 
      { id: (list.length+1).toString(), label: value, complite: false}
    ])
  }
   const handleComplite = (id: string) => {
      setList(
        [...list.map(item => 
          ({ ...item, complite: item.id === id ? true : item.complite})) 
        ])
   }
   const handleRemove = (id: string) => {
      setList([...list.filter(item => item.id !== id) ])
   }


  return (
      <div>
        {/*(onAdd) é um evento que acontece dentro do componente
          é o mesmo que o onClick ou o onChange*/}
        <InputAdd onAdd={handleAdd} />        

        {/*Em um projeto grande não é bom sair componetizando tudo,
          exemplo esse list, que só foi uma demosntração, mas talvez em projetos
          maiores não seria nescessario*/}
        <List>
          {list.map((listItem) => (
            <TodoItem 
              id={listItem.id}
              label={listItem.label}
              complite={listItem.complite}

              onComplite={() => handleComplite(listItem.id)}
              onRemove={() => handleRemove(listItem.id)}
            />
          ))}
        </List>        
      </div>
  )
}

