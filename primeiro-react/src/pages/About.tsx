import { PageLayout } from "../shared/layout/page-layout/PageLayout";



export const About = () => {


    return(
        <PageLayout title="Sobre">
            <p>
                Este projeto é uma aplicação de lista de tarefas desenvolvida 
                durante aulas de React, com o objetivo de praticar e consolidar 
                conceitos fundamentais da biblioteca.
            </p>
            <p>
                A aplicação permite adicionar, listar, concluir e remover tarefas, 
                servindo como exercício prático para o uso de componentes, estados, 
                propriedades e organização do código.
            </p>
            <p>
                O foco principal do projeto é o aprendizado e a experimentação, 
                acompanhando a evolução dos estudos em React e desenvolvimento 
                front-end.
            </p>
        </PageLayout>        
    );
}