import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import CardAbout from "@/components/Cards/CardAbout";
import CardAbout2 from "@/components/Cards/CardAbout2";

const AboutPage = () => {
  return (
    <main className="bg-white py-4">
      <h1 className="mt-4 text-2xl font-inter text-bluesatc1 text-center">
        <strong>Conheça nossos orientadores:</strong>
      </h1>
      <div className="mt-20">
        <Container className="bg-white">
          <Row>
            <Col className="flex justify-center">
            <CardAbout></CardAbout>
            </Col>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4 rounded-xl p-3 h-32 w-[600px] text-justify">
                <h2 className="text-black text-3xl">
                  <strong>LABTEC</strong>
                </h2>
                <p className="text-black">
                  Laboratório de pesquisa e desenvolvimento da UNISATC.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-black flex flex-col justify-center">
              <div className="bg-bluesatc4  rounded-xl p-3 h-32 w-[600px] text-justify mt-6">
                <h2 className="text-black text-3xl">
                  <strong>CURSOS</strong>
                </h2>
                <p className="text-black">
                  O Laboratório engloba duas engenharias: Software e Computação.
                </p>
              </div>
            </Col>
            <Col className="flex justify-center">
            <CardAbout2></CardAbout2>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default AboutPage;
