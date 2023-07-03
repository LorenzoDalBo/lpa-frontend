import CardBaseHome from "@/components/Cards/CardBaseHome";
import IframePage from "@/components/Incorporação/inc";

export default function Home() {
  return (
    <main className="bg-white h-fit">
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
      <div className="flex justify-around mt-24">
        <h1
          className={`text-left text-2xl font-inter text-bluesatc1
          `}
        >
          <strong>Linha do Tempo</strong>
        </h1>
        <h1
          className={`text-right text-2xl font-inter text-bluesatc1
          `}
        >
          <strong>Laboratório De Projetos</strong>
        </h1>
      </div>
      <div className="pl-8 flex gap-2">
        <div className=" p-3 d-flex ml-3 mt-10 w-100 h-72">
          <img
            className="h-[250px] w-[250px] rounded-xl shadow-2xl"
            src="/images/hometest.jpg"
          ></img>
          <p className="pl-4 w-50 ml-2 font-inter text-justify text-bluesatc2 text-lg">
            A linha do tempo permite que seja visualizado todas as atividades
            que envolvem o curso de engenharia de Software. Para cada evento
            podemos ter detalhes como fotos, vídeos e anexos dos eventos
            ocorridos envolvendo os acadêmicos do Engenharia de Software.
          </p>
        </div>
        <div className="p-3 d-flex mt-10 w-100 h-72">
          <img
            className="h-[250px] w-[250px] rounded-xl shadow-2xl"
            src="/images/hometest3.png"
          ></img>
          <p className="pl-4 w-50 ml-2 text-justify font-inter text-bluesatc2 text-lg">
            O Laboratório possui dois objetivos: acelerar o processo de
            colocação dos acadêmicos no mercado, buscando desenvolver projetos
            que resolvam problemas reais e, subsidiar as empresas por meio de
            pesquisa ou de desenvolvimento de serviços de acordo com as suas
            necessidades.
          </p>
        </div>
      </div>
      <h1 className="text-center justify-center items-center text-2xl font-inter text-bluesatc1 mt-24">
        <strong>Conheça nossos principais projetos</strong>
      </h1>
      <div className="flex justify-around h-fit mt-16 p-6">
        <CardBaseHome />
        <CardBaseHome />
        <CardBaseHome />
      </div>
    </main>
  );
}
