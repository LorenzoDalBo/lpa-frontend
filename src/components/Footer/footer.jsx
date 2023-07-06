import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white h-fit w-screen flex justify-center items-center gap-40">
      <a href="https://unisatc.com.br/">
        <img className="h-28" src="images/bannerSatcsemfundo.png"></img>
      </a>
      <a href="https://unisatc.com.br/graduacao/engenharia-de-software/">
        <img className="h-32" src="images/LogoSoftwareSemfundo.png"></img>
      </a>
      <a href="https://unisatc.com.br/graduacao/engenharia-de-computacao/">
        <img className="h-28" src="images/logocomputação.png"></img>
      </a>
    </footer>
  );
}
