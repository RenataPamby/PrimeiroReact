import { Link } from 'react-router';

import TodoItemStyle from "./TodoItem.module.css";

interface ITodoItemProps {
    id: string,
    label: string,
    complite: boolean,
    onComplite(): void;
    onRemove(): void;
}
{/*também possopassar assim. Ai é só apagar a palavra (props.)*/}
{/*export const TodoItem =({id, label, complite}: ITodoItemProps) */}
export const TodoItem =(props: ITodoItemProps) => {
    
    {/*o key tras que cada elemento da lista é unico.. 
            ..q um n é o mesmo que o outro*/}
    return (        
        <li className={TodoItemStyle.Lista} 
            data-complite={props.complite} key={props.id}>
              {/*Span foi criado para fazer um check no css*/}
              <Link to={`/detalhe/${props.id}`} className={TodoItemStyle.Text}>
                {props.label}
                {props.complite}
              </Link>

              <div className={TodoItemStyle.ButtonsDiv}>
                <button className={TodoItemStyle.ButtonConcluir}
                  onClick={props.onComplite}>
                  Concluir
                </button>

                <button className={TodoItemStyle.ButtonRemover}
                  onClick={props.onRemove}>
                  Remover
                </button>
              </div>              
            </li>
    );
}