import { Button } from "react-bootstrap";
{/* import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);*/}

export default function Autenticação() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray0 text-black">
      <div className="w-96 p-6 shadow-2xl rounded-md bg-white">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        ></link>
        <h1 className="text-3xl block text-center">
          <i class="fa-regular fa-user"></i> Login
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label for="Username" classname="block text-base mb-2">
            Usuário
          </label>
          <input
            type="text"
            id="Username"
            className={`
                    border w-full text-base px-2 py-1 
                    focus:outline-none focus:ring-0 focus:border-gray
                    `}
            placeholder="Seu nome de usuário"
          ></input>
        </div>
        <div className="mt-3">
          <label for="Password" classname="block text-base mb-2">
            Senha
          </label>
          <input
            type="password"
            id="Username"
            className={`
                    border w-full text-base px-2 py-1 
                    focus:outline-none focus:ring-0 focus:border-gray
                    `}
            placeholder="Sua senha"
          ></input>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <input type="checkbox"></input>
            <label>Lembrar de mim</label>
          </div>
          <div>
            <a href="#" classname="text-bluesatc4 font-sans">
              Esqueceu a senha?
            </a>
          </div>
        </div>
        <div className="mt-4">
          <Button
            type="submit"
            className="border-2 border-bluesatc2 bg-bluesatc2 text-white py-1 w-full rounded-md"
          >
            <i class="fa-solid fa-right-to-bracket"></i> Login
          </Button>
        </div>
      </div>
    </div>
  );
}
