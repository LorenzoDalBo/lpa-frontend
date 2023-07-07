import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import CardAbout from "@/components/Cards/CardAbout";
import CardAbout2 from "@/components/Cards/CardAbout2";
import CardAboutLab from "@/components/Cards/CardAboutLab";
import CardAboutLab2 from "@/components/Cards/CardAboutLab2";

const AboutPage = () => {
  return (
    <main className="bg-gray0 py-4">
      <div className="flex justify-center">
        <div className="flex justify-center items-end rounded-2xl bg-bluesatc4 bg-opacity-80 h-[60px] w-[600px] m-3 p-3">
          <h1 className="mt-4 text-2xl text-black">
            <strong>Conheça nossos orientadores:</strong>
          </h1>
        </div>
      </div>
      <div className="mt-20">
        <Container className="bg-gray0">
          <Row>
            <Col className="flex justify-center">
              <CardAbout></CardAbout>
            </Col>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4 bg-opacity-50 rounded-xl p-3 h-48 w-[600px] text-justify">
                <h2 className="text-black text-3xl">
                  <strong>Vagner Rodrigues</strong>
                </h2>
                <p className="text-black mt-2">
                  Nosso Coordenador Adjunto das engenharias de Software e
                  Computação, a pessoa mais gente boa da UNISATC! Possui uma
                  mente incrível de gestão.
                </p>
                <p className="mt-2">
                  <strong>Acompanhe seu trabalho:</strong> <br />
                  <a href="https://www.linkedin.com/in/vagnerdasilvarodrigues/">
                    Linkedn -
                    https://www.linkedin.com/in/vagnerdasilvarodrigues/
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4 bg-opacity-50 rounded-xl p-3 h-52 w-[600px] text-justify mt-6">
                <h2 className="text-black text-3xl">
                  <strong>Anderson Rodrigo Farias</strong>
                </h2>
                <p className="text-black mt-2">
                  O Coordenador Geral das engenharias de Software e da
                  Computação, uma das pessoas mais sábias e cheio de ideias
                  sobre os projetos! A pessoa da prática, repleto de
                  experiências.
                </p>
                <p className="mt-2">
                  <strong>Acompanhe seu trabalho:</strong> <br />
                  <a href="https://www.linkedin.com/in/anderson-rodrigo-farias/">
                    Linkedn -
                    https://www.linkedin.com/in/anderson-rodrigo-farias/
                  </a>
                </p>
              </div>
            </Col>
            <Col className="flex justify-center">
              <CardAbout2></CardAbout2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="flex justify-center mt-28">
        <div className="flex justify-center items-end rounded-2xl bg-bluesatc4 bg-opacity-80 h-[60px] w-[600px] m-3 p-3">
          <h1 className="mt-4 text-2xl text-black">
            <strong>Sobre o Laboratório LabTec:</strong>
          </h1>
        </div>
      </div>
      <div className="mt-20">
        <Container className="bg-gray0">
          <Row>
            <Col className="flex justify-center">
              <CardAboutLab />
            </Col>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4 bg-opacity-50 rounded-xl p-3 h-32 w-[600px] text-justify">
                <h2 className="text-black text-3xl">
                  <strong>LABTEC</strong>
                </h2>
                <p className="text-black mt-2">
                  Nosso laboratório de pesquisa e desenvolvimento de Software e
                  Computação onde tudo pode surgir, é administrado pelos nossos
                  orientadores ali de cima!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4 bg-opacity-50 rounded-xl p-3 h-44 w-[600px] text-justify mt-6">
                <h2 className="text-black text-3xl">
                  <strong>Objetivo</strong>
                </h2>
                <p className="text-black mt-2">
                  O Laboratório possui dois objetivos: acelerar o processo de
                  colocação dos acadêmicos no mercado, buscando desenvolver
                  projetos que resolvam problemas reais e, subsidiar as empresas
                  por meio de pesquisa ou de desenvolvimento de serviços de
                  acordo com as suas necessidades.
                </p>
              </div>
            </Col>
            <Col className="flex justify-center">
              <CardAboutLab2/>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default AboutPage;
