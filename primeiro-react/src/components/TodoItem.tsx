
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
        <li key={props.id}>
              {props.label}
              {props.complite ? ' Concluido ' : ''}

              <button
                onClick={props.onComplite}>
                Concluir
              </button>

              <button
                onClick={props.onRemove}>
                Remover
              </button>
            </li>
    );
}