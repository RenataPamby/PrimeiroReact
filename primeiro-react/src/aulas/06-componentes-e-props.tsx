import type React from "react";


//Criando uma propriedade
interface ICardProps{
  title: string;
  children: React.ReactNode;//Para poder receber filhos
} 

//Componete React
const Card = (props: ICardProps) => {

  return (
    <div style={{ border: '1px solid black' }} >
      <span>Title: {props.title}</span>

      <div>
        {props.children}
      </div>

      <div>
        Footer
      </div>
    </div>
  );
}
 


//Principal
export function App() {  

  return (
      <div>
        Olá
         <p>Card:</p>
         {/*<Card title="Teste01"/> {/*Self Close (pode não receber filhos)*/}
         <Card title="Propriedade titulo">
          Só posso escrever isso porque agora pode ter filhos, 
          e esse texto é um filho
         </Card>
      </div>
  )
}