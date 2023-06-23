import { Button } from "react-bootstrap";

export default function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div
        className={`h-screen w-full fixed left-0 top-0
            bg-gray bg-opacity-50 rounded-xl flex justify-around items-center`}
      >
        <div>
          <h1 className="font-inter text-red">
            <strong>Modal Teste</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vero possimus tempora id? Voluptate debitis vero sequi animi officia
            unde ea minima officiis. Est maiores vitae, beatae cumque esse
            libero.
          </p>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <Button className="bg-red">Cancelar</Button>
          <Button className="bg-greensatc3">Salvar</Button>
        </div>
      </div>
    );
  }

  return null;
}
