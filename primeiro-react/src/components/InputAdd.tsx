import { useState } from "react"

interface IInputAdd{
    onAdd(value: string): void;
}
export const InputAdd = (props: IInputAdd) => {
    const [value, setValue] = useState(''); 

    {/*(handle = lidar com). ental ele esta lidando com a 
        parte de adicionar */}
    const handleAdd = () => {
        props.onAdd(value); 
        setValue('');
    }

    return(
        <div>
            {/*(onChange) atualiza o valor que vc esta colocando na input, e manda para setValue*/}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
            
            {/* onClick={() => {handleAdd}}>  antes era assim, n precisa do ( () => ), 
              pq imagino de o hangleAdd ja passa pelo parametro dele*/}
            <button        
                onClick= {handleAdd}>          
                Adicionar
            </button>
        </div>

    );
}