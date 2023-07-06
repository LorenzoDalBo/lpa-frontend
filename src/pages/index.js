import CardBaseHome from "@/components/Cards/CardBaseHome";
import IframePage from "@/components/Incorporação/inc";
import { Button } from "react-bootstrap";
import Banner from "@/components/Banner/banner";
export default function Home() {
  return (
    <main className="bg-gray1 h-fit w-screen -mr-6">
      <Banner/>
      <div className="mt-0 p-1 text-center">
        <h1 className="mt-4 text-2xl font-inter text-bluesatc1">
          <strong>
            BEM-VINDOS À PLATAFORMA DE PROJETOS LABTEC! É BOM TER VOCÊ POR AQUI!
          </strong>
        </h1>
        <p className="mt-3 font-inter text-xl text-bluesatc2">
          O LabTec é nossa plataforma de desenvolvimento de projetos dos cursos
          de Engenharia de Software e Engenharia da Computação do{" "}
          <a href="https://www.google.com/maps/place/SATC+-+Educação,+Tecnologia+e+Inovação/@-28.7025207,-49.4080067,17z/data=!3m1!4b1!4m6!3m5!1s0x95218252afb9fcaf:0x1bb8a5bef9a85c0e!8m2!3d-28.7025207!4d-49.4054264!16s%2Fg%2F11g9swk2dt?entry=ttu">
            Centro Universitário SATC localizado no campus da instituição em
            Criciúma - Santa Catarina.
          </a>
        </p>
      </div>
      <div className="flex justify-around mt-36">
        <div className="bg-bluesatc4 bg-opacity-30 h-[40px] w-[200px] rounded-xl">
          <h1
            className={`text-center justify-center items-center text-2xl font-inter text-bluesatc1
            `}
          >
            <strong>Linha do Tempo</strong>
          </h1>
        </div>
        <div className="bg-bluesatc4 bg-opacity-30 h-[40px] w-[200px] rounded-xl">
          <h1
            className={`text-center justify-center items-center text-2xl font-inter text-bluesatc1
           `}
          >
            <strong>Projetos</strong>
          </h1>
        </div>
      </div>
      <div className="pl-8 flex gap-2">
        <div className=" p-3 d-flex mt-10 w-100 h-72">
          <img
            className="h-[300px] w-[300px] rounded-2xl shadow-2xl"
            src="/images/timelinelupa.svg"
          ></img>
          <p className="pl-4 w-82 ml-2 mr-6 font-inter text-justify text-bluesatc2 text-lg">
            A linha do tempo permite uma visualização geral de todas
            as atividades que envolvem o curso de engenharia de Software e
            Computação. Para cada evento aparece uma breve descrição do projeto,
            sua data de início e término. Além de poder ser redirecionado para a
            aba projetos referente ao visualizado na linha do tempo, onde
            encontram-se informações mais detalhadas. <br/>
            <Button className="rounded-lg bg-bluesatc4 bg-opacity-30 text-black h-[40px] w-[150px] mt-3">
              <a href="http://localhost:3000/aboutPage">Saiba mais</a>
            </Button>
          </p>
        </div>
        <div className="p-3 d-flex mt-10 w-100 h-72">
          <img
            className="h-[300px] w-[300px] rounded-xl shadow-2xl"
            src="/images/projectlupa.svg"
          ></img>
          <p className="pl-4 w-82 ml-2 mr-6 text-justify font-inter text-bluesatc2 text-lg">
            Os projetos permitem uma visualização com maior detalhe, contam com
            informações de: Autores do projeto, Orientadores, Detalhes escritos
            do projeto, fotos, vídeos e anexos dos eventos ocorridos envolvendo
            os acadêmicos das Engenharias de Software e Computação. <br/>
            <Button className="rounded-lg bg-bluesatc4 bg-opacity-30 text-black h-[40px] w-[150px] mt-16">
              <a href="http://localhost:3000/aboutPage">Saiba mais</a>
            </Button>
          </p>
        </div>
      </div>
      <div className="p-4 mt-32">
        <div className="bg-opacity-30 bg-bluesatc4 h-[650px] w-[1400px] ml-36 rounded-3xl">
          <h1 className="text-center justify-center items-center text-3xl font-inter text-bluesatc1 p-10">
            <strong>Conheça nossos principais projetos</strong>
          </h1>
          <div className="flex justify-around h-fit p-6">
            <CardBaseHome />
            <CardBaseHome />
            <CardBaseHome />
          </div>
        </div>
      </div>
    </main>
  );
}
