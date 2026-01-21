
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
    
    return (
        <li key={props.id}>
              {props.label}
              {props.complite ? ' Concluido ' : ''}

              <button
                onClick={props.onComplite}>
                Concluir
              </button>
              {/*filtra o intem para os itens que forem direfentes
                deste item.id eles irão permanecer*/}
              <button
                onClick={props.onRemove}>
                Remover
              </button>
            </li>
    );
}