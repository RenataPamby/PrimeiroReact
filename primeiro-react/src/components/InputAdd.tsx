import { useRef, useState } from "react"

import InputAddStyle from "./InputAdd.module.css"

interface IInputAdd{
    onAdd(value: string): void;
}
export const InputAdd = (props: IInputAdd) => {
    {/**O useRef ele é utilizado para armazenar um valor sem ter que disparar 
        o fluxo de heander, e quando disparar o fluxo de heander, se quiser,
        ele mostra o valor que ficou salvo na memoria */}
    //const countRef = udeRef(0);

    {/**Aqui ele esta sendo usado para colocar a input como referencia, para 
        que depois de adicionar o uma nova tarefa uma vez, o focos volte na
        input*/}
    const inputRef = useRef<HTMLInputElement>(null);    
    const [value, setValue] = useState(''); 



    {/*(handle = lidar com). ental ele esta lidando com a 
        parte de adicionar */}
    const handleAdd = () => {
        props.onAdd(value); 
        setValue('');
        inputRef.current?.focus();

        //countRef.current = countRef.current +1;
        //console.log(countRef.current);
    }

    return(
        <div className={InputAddStyle.Container}>
            {/*(onChange) atualiza o valor que vc esta colocando na input, e manda para setValue*/}
            <input className={InputAddStyle.LabelName}
                value={value}
                ref={inputRef}
                onChange={(e) => setValue(e.target.value)}
                />

            {/*{countRef.current}*/}
            
            {/* onClick={() => {handleAdd}}>  antes era assim, n precisa do ( () => ), 
              pq imagino de o hangleAdd ja passa pelo parametro dele*/}
            <button  className={InputAddStyle.BottonAdicionar}      
                onClick= {handleAdd}>          
                Adicionar
            </button>
        </div>

    );
}