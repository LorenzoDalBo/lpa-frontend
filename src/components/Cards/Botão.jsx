import React from 'react';


const Button1 = ({ onClick }) => {
  return (
    <button
      className="bg-bluesatc1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
      onClick={onClick}
    >
      Adicionar novo projeto
    </button>
  );
};

export default Button1;