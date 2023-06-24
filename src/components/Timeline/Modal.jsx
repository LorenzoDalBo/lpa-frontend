import { Button } from "react-bootstrap";

export default function Modal({ isOpen }) {
  if (isOpen) {

    return (
      <div className="flex justify-center items-center"> 
        <div
          className={`bg-gray bg-opacity-50 h-fit w-[1000px] fixed p-3
             rounded-xl z-[1000] flex justify-center items-center`}>
          <div>
            <h1 className="font-inter text-red flex justify-center item-center">
              <strong>Modal Teste</strong>
            </h1>
              <input></input>
            <div className="flex justify-center gap-3 mt-8">
              <Button className="bg-red">Cancelar</Button>
              <Button className="bg-greensatc3">Salvar</Button>
            </div>  
          </div>       
        </div>
      </div>
    );
  }

  return null;
}
