import { Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray0 text-black">
      <div className="grid grid-cols-2 gap-32 justify-center items-center">
        <div className="w-96 p-6 shadow-2xl rounded-md bg-white">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          ></link>
          <h1 className="text-3xl block text-center">
            <i class="fa-regular fa-user"></i> <br />
            Sou administrador ou faço parte do laboratório
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <p className="text-justify px-4">
              Para colaboradores da UNISATC que fazem parte do laboratório
              LABTEC ou administradores deste projeto.
            </p>
          </div>
          <div className="mt-4">
            <Button className="border-2 border-bluesatc2 bg-bluesatc2 text-white py-1 w-full rounded-md">
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />{" "}
              <a href="http://localhost:3000/AuthenticationPage">
                Ir para o Login
              </a>
            </Button>
          </div>
        </div>
        <div className="w-96 p-6 shadow-2xl rounded-md bg-white">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          ></link>
          <h1 className="text-3xl block text-center">
            <FontAwesomeIcon icon="fa-solid fa-people-group" /> <br />
            Sou estudante ou visitante
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <p className="text-justify px-4">
              Para visitantes ou alunos UNISATC que possuem interesse em
              visualizar o site e os projetos.
            </p>
          </div>
          <div className="mt-4">
            <Button className="border-2 border-bluesatc2 bg-bluesatc2 text-white py-1 w-full rounded-md">
              <a href="http://localhost:3000/">Apreciar o site</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
