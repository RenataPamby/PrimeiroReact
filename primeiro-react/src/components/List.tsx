
{/*Você pode fazer dessa maneira, onde isso (React.PropsWithChildren)
    fala que vc pode usar as props e o children dessa maneira 
    (React.PropsWithChildren<{value: number}>
    
    Ou vc poderia usar uma interface como ele ensinou em outra aula)*/}
{/*É melhor usar esta configuração quando vc quiser utilizar apenas o children mesmo*/}
export const List = ({ children }: React.PropsWithChildren) => {

    return(
        <ol className="Lista">
            {children}
        </ol>
    );
}