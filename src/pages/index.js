export default function Home() {
  return (
    <main className="bg-black h-fit">
      <div className="mt-0 p-1 text-center">
        <h1 className="mt-2 text-2xl font-inter text-bluesatc1">
          <strong>
            BEM VINDOS A PLATAFORMA DE PROJETOS DA ENGENHARIA DE SOFTWARE! É BOM
            TER VOCÊ POR AQUI!
          </strong>
        </h1>
        <p className="mt-3 font-inter text-bluesatc4">
            O Lupa é uma plataforma de desenvolvimento de projetos do curso de
            Engenharia de Software do <a href="https://www.google.com/maps/place/SATC+-+Educação,+Tecnologia+e+Inovação/@-28.7025207,-49.4080067,17z/data=!3m1!4b1!4m6!3m5!1s0x95218252afb9fcaf:0x1bb8a5bef9a85c0e!8m2!3d-28.7025207!4d-49.4054264!16s%2Fg%2F11g9swk2dt?entry=ttu">
            Centro Universitário SATC localizado no campus da instituição em Criciúma - Santa Catarina.
          </a>
        </p>
      </div>
      <div>
        <h1 className="row d-flex justify-content-center h-2 p-10 ml-10 mt-10 text-2xl font-inter text-bluesatc1">
         <strong className="flex justify-center">Linha do Tempo</strong>
        </h1>
      </div>
      <div className="p-3 d-flex justfy-content-between w-100 ml-6 h-96 wf-90">
        <img className="pl-4 h-[250px] w-[250px]" src="/images/hometest.jpg"></img>
        <p className="pl-4 w-50 ml-2 font-inter text-bluesatc4">
          A linha do tempo permite que seja visualizado todas as atividades que
          envolvem o curso de engenharia de Software. Para cada evento podemos
          ter detalhes como fotos, vídeos e anexos dos eventos ocorridos
          envolvendo os acadêmicos do Engenharia de Software.
        </p>
      </div>
      <div>
        <h1 className="rod d-flex text-2xl justify-content-center font-inter text-bluesatc1">
          <strong>Laboratório De Projetos</strong>
        </h1>
      </div>
      <div className="p-3 h-96 w-100 ml-6 wf-90 d-flex justfy-content-between text-justify">
        <img className= "pl-4 h-[250px] w-[250px]" src="/images/hometest3.png"></img>
        <p className="pl-4 w-50 ml-2 font-inter text-bluesatc4">
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
