import { useState } from "react";

//Componente Funcional
const Test = () => {
  return (
    <div>Teste</div>
  )
}

export function App() {  

  return (
      <div>
        Olá
        <Test></Test> {/*Componente Funcional*/}
      </div>
  )
}

//Função JS
const teste = () => {
  return 1 + 1;
}
//Função JS
const useTeste = () => {
  return 1 + 1;
}
//React hook
const useTest = () => {
  const [valor] = useState(1+1);
  return valor;
}
//Componente Funcional
const Testes = () => {
  return (
    <div>Teste</div>
  )
}
//Função JS que retorna HTML react
const test = () => {
  return (
    <div>Teste</div>
  )
}