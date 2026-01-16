import { useState } from "react"

interface IInputAdd{
    onAdd(value: string): void;
}
export const InputAdd = (props: IInputAdd) => {
    const [value, setValue] = useState(''); 

    return(
        <div>
            {/*(onChange) atualiza o valor que vc esta colocando na input, e manda para setValue*/}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
            {/*(...list) tras tudo o que tinha antes na lsita*/}
            <button        
                onClick={() => { props.onAdd(value); setValue('');}}>          
                Adicionar
            </button>
        </div>

    );
}