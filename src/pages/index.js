import CardBase from "@/components/Cards/CardBase";
import Card2 from "@/components/Cards/CardBase2";

export default function Home() {
  return (
    <main className="bg-black h-fit">
        <div className="mt-0 p-1 text-center">
          <h1 className="mt-4 text-2xl font-inter text-bluesatc1">
            <strong>
              BEM VINDOS A PLATAFORMA DE PROJETOS DA ENGENHARIA DE SOFTWARE! É
              BOM TER VOCÊ POR AQUI!
            </strong>
          </h1>
          <p className="mt-3 font-inter text-bluesatc4">
            O Lupa é uma plataforma de desenvolvimento de projetos do curso de
            Engenharia de Software do{" "}
            <a href="https://www.google.com/maps/place/SATC+-+Educação,+Tecnologia+e+Inovação/@-28.7025207,-49.4080067,17z/data=!3m1!4b1!4m6!3m5!1s0x95218252afb9fcaf:0x1bb8a5bef9a85c0e!8m2!3d-28.7025207!4d-49.4054264!16s%2Fg%2F11g9swk2dt?entry=ttu">
              Centro Universitário SATC localizado no campus da instituição em
              Criciúma - Santa Catarina.
            </a>
          </p>
        </div>
        <div className="flex justify-around mt-24">
          <h1 className={`text-left text-2xl font-inter text-bluesatc1
          `}>
            <strong>Linha do Tempo</strong>
         </h1>
         <h1 className={`text-right text-2xl font-inter text-bluesatc1
          `}>
            <strong>Laboratório De Projetos</strong>
          </h1>
        </div>  
        <div className="flex">
        <div className="p-3 d-flex mt-10 w-100 h-96 wf-90">
          <img
            className="pl-4 h-[250px] w-[250px]"
            src="/images/hometest.jpg"
          ></img>
          <p className="pl-4 w-50 ml-2 font-inter text-bluesatc4">
            A linha do tempo permite que seja visualizado todas as atividades
            que envolvem o curso de engenharia de Software. Para cada evento
            podemos ter detalhes como fotos, vídeos e anexos dos eventos
            ocorridos envolvendo os acadêmicos do Engenharia de Software.
          </p>
        </div>
        <div className="p-3 d-flex mt-10 w-100 h-96 wf-90">
          <img
            className="pl-4 h-[250px] w-[250px]"
            src="/images/hometest3.png"
          ></img>
          <p className="pl-4 w-50 ml-2 font-inter text-bluesatc4">
            O Laboratório (Lupa) possui dois objetivos, acelerar o processo de
            colocação dos acadêmicos no mercado buscando desenvolver projetos
            que resolvam problemas reais. Além de subsidiar as empresas por meio
            de pesquisa ou de desenvolvimento de serviços de acordo com as suas
            necessidades.
          </p>
        </div>
      </div>
    <div className="flex justify-around mb-4">
       <Card2/>
       <Card2/>
       <Card2/>
    </div>
    </main>
  );
}
