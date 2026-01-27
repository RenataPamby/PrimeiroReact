import { useEffect, useState } from "react";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { InputAdd } from "../components/InputAdd";
import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";


//Inicio
export const Home = () => {   
  const [list, setList] = useState<ITodo[]>([]);

  {/*o effect só vai atualizar de novo { } quando as dependecias dele
  for alterada [];*/}
  useEffect( () => {
    TodoAPI.getAll().then(data => setList(data));
  }, []);


  {/*(...list) tras tudo o que tinha antes na lsita*/}
  {/*Esta lidando com o adicionar do evento do input
    No iputAdd.tsx, ele lida com o do click do input */}
  const handleAdd = (value: string) => {
    {/*Agara esta fazendo as funções no front e back, salvando
        também os dados*/}
    TodoAPI.create({label: value, complite: false})
      .then( data => setList([      
          ...list, data])
      );     
  }
  const handleComplite = (id: string) => {
    TodoAPI.updateById( id, {complite: true})
      .then(() => setList(
        [...list.map(item => 
        ({ ...item, complite: item.id === id ? true : item.complite})) 
      ])
    );  
  }
  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id)
      .then(() => setList([...list.filter(item => item.id !== id) ])
    );
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
              key={listItem.id}
              
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