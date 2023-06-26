import { Button } from "react-bootstrap";
export default function Modal({ isOpen, setModalClosed }) {
  if (isOpen) {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`bg-gray bg-opacity-90 h-fit w-[1000px] fixed p-3
             rounded-xl z-[1000] flex justify-center items-center`}
        >
          <div>
            <h1 className="font-inter text-xl text-red flex justify-center item-center">
              <strong>Cadastro de projeto</strong>
            </h1>
            <div className="grid row justify-center gap-3 mt-2 p-2">
              <h2>Insira a imagem que representará o projeto:</h2>
              <input
                className="w-80 h-7 rounded-xl"
                type="src"
                imagem="src"
                id="image"
              ></input>
              <input
                className="bg-bluesatc2 w-32 h-7 rounded-xl ml-24 font-inter"
                type="button"
                value="Inserir"
                id="Insert"
              ></input>
              <h2>Insira título do projeto:</h2> 
              <input
                className="w-80 h-7 rounded-xl"
                type="text"
                título="txt"
                id="title"
              ></input>
              <h2>Uma breve descrição sobre o projeto:</h2> 
              <input
                className="w-80 h-32 rounded-xl"
                type="text"
                descricao="txt"
                id="description"
              ></input>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <Button className="bg-red" onClick={setModalClosed}>
                Cancelar
              </Button>
              <Button className="bg-greensatc3">Salvar</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
