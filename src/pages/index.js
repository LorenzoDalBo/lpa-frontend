export default function Home() {
  return (
    <main className="bg-gray-500 h-fit">
      <div className="text-orange-950 mt-0 p-1 text-center font-sans ">
        <h1 className="mt-2 text-2xl">
          <strong>
            BEM VINDOS A PLATAFORMA DE PROJETOS DA ENGENHARIA DE SOFTWARE! É BOM
            TER VOCÊ POR AQUI!
          </strong>
        </h1>
        <p className="mt-3">
            O Lupa é uma plataforma de desenvolvimento de projetos do curso de
            Engenharia de Software do <a href="https://www.google.com/maps/place/SATC+-+Educação,+Tecnologia+e+Inovação/@-28.7025207,-49.4080067,17z/data=!3m1!4b1!4m6!3m5!1s0x95218252afb9fcaf:0x1bb8a5bef9a85c0e!8m2!3d-28.7025207!4d-49.4054264!16s%2Fg%2F11g9swk2dt?entry=ttu">
            Centro Universitário SATC localizado no campus da instituição em Criciúma - Santa Catarina.
          </a>
        </p>
      </div>
      <div>
        <h1 className="h-2 p-10 ml-10 mt-10 text-2xl text-center">
          Linha Do Tempo
        </h1>
      </div>
      <div className="flex ml-6 p-10 h-96 wf-90">
        <img src="/images/hometest.jpg"></img>
        <p className="ml-3 text-align: center ">
          A linha do tempo permite que seja visualizado todas as atividades que
          envolvem o curso de engenharia de Software. Para cada evento podemos
          ter detalhes como fotos, vídeos e anexos dos eventos ocorridos
          envolvendo os acadêmicos do Engenharia de Software.
        </p>
      </div>
      <div>
        <h1 className="h-2 p-10 ml-10 mt-10 text-2xl text-center">
          Laboratório De Projetos
        </h1>
      </div>
      <div className="flex mt-0 ml-6 text-justify p-10 h-96 wf-90">
        <img src="/images/hometest3.png"></img>
        <p className="ml-3 text-align: center text-justify">
          O Laboratório (Lupa) possui dois objetivos, acelerar o processo de
          colocação dos acadêmicos no mercado buscando desenvolver projetos que
          resolvam problemas reais. Além de subsidiar as empresas por meio de
          pesquisa ou de desenvolvimento de serviços de acordo com as suas
          necessidades.
        </p>
      </div>
    </main>
  );
}
