import { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import _ from 'lodash';




const TimelineItem = () => {

  const nomes = ['Eduardo', 'Lorenzo', 'Jean', 'Lourenço', 'Daniel', 'Arthur', 'Luiz', 'Jeff'];
  const titulos = ['RexLAB', 'Observatório Social', 'Wolfer Automação', 'Ferramenta de gestão automatizada para mitigação de conflitos entre rede elétrica e vegetação', 'Trion', 'Rádio','e-Book FAPESC', 'Sistema de Avaliação Cocreation'];
  const orientandos = ["Vagner Da Silva Rodrigues", "Anderson Rodrigo Farias"];
  const descricoes = [
    "O Laboratório (Lupa) possui dois objetivos, acelerar o processo de colocação dos acadêmicos no mercado buscando desenvolver projetos que resolvam problemas reais. Além de subsidiar as empresas por meio de pesquisa ou de desenvolvimento de serviços de acordo com as suas necessidades.",
    "Aplicado na escola SATC, para os alunos do 6° ano do ensino fundamental até o 1° ano do ensino médio, com o objetivo de aprender jogando com a plataforma interativa chamada Trion.",
    "Plataformas web entregam solução para um grande número de pessoas, a um custo consideravelmente baixo quando comparado a outros métodos de comunicação e gerenciamento. Assim, garantido a eficiência de iniciativas diversas e sendo imprescindível a disponibilização de tal ferramenta nos dias atuais. Com isso, é identificada a necessidade de desenvolvimento de uma plataforma online que atenda os produtos oferecidos pelo Escritório de Inovação SATC, bem como um processo online de gerenciamento do próprio escritório.",
    "A partir da aplicação de um sistema embarcado em um Rádio, será possível verificar o status de uma estação de rádio, utilizando a integração de uma API de um bot de telegram para realizar a troca de informações com o usuário.",
    "O presente projeto tem por objeto propiciar condições básicas para a execução do Projeto denominado “Vending Machine de Serviços de Impressão”, que consiste no desenvolvimento de uma aplicação embarcada em equipamento Multifuncional com autonomia ao usuário de interação com serviços disponíveis como Cópias, Digitalização e Impressão. A proposta é que se desenvolva um sistema integrado para check-out diretamente no equipamento.",
    "O projeto tem por objetivo o desenvolvimento de uma maquete com dispositivos eletrônicos que simulam o controle e automação de uma residência. O projeto é uma parceria entre a SATC e o RexLAB para possibilitar que o controle da maquete seja realizado de forma remota através do RexLAB.",
    "Consiste em obter dados disponibilizados pelo Governo, efetuar um trabalho de seleção e limpeza destes dados e em seguida aplicar técnicas de BI para extração de informações e padrões que auxiliem nas tomadas de decisões da instituição.",
    "Solução de apoio à decisão dos gestores de linhas de produção com informações em tempo real captadas diretamente dos dispositivos conectados aos equipamentos da linha de produção.",
    "Aplicado na escola SATC, para os alunos do 6° ano do ensino fundamental até o 1° ano do ensino médio, com o objetivo de aprender jogando com a plataforma interativa chamada Trion."
  ];
  
  const titulo = _.sample(titulos);
  const orientado = _.sample(nomes);
  const orientando = _.sample(orientandos);
  const descricao = _.sample(descricoes);

  

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work`}
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#0a0a0a" }}
      contentArrowStyle={{ borderRight: "7px solid", color: "#0c0a09" }}
      date="2011 - present"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#3b0764" }}
    >
      <h3 className="vertical-timeline-element-title font-black">{titulo}</h3>
      <h4 className="vertical-timeline-element-subtitle">{orientado}</h4>
      <h4 className="vertical-timeline-element-subtitle">{orientando}</h4>
      <p>{descricao}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
