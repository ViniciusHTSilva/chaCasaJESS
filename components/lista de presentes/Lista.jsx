import { useState } from "react";
import Presente from "./presente"
import ItemLista from "./ItemComp"





export default function lista({ isOpen1, setOpenModallista, children }) {

    const [setOpenModal] = useState(true)

  

    const [openModalPresente, setOpenModalPresente] = useState(false)
    

   


    if (isOpen1) {

        return (
            <div className="ver-lista">
                <div id="lista-item">
                    <header>
                        <div className="titleheader">
                            <h1> Bem Vindo a Lista da Jess</h1>

                        </div>
                        <button id="listafechar" onClick={(setOpenModallista)}>x</button>
                    </header>

                    <main>

                    <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="kit Panela"
                    />
                    <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="kit toalha"
                    />
                           <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste1"
                    />
                    <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste2"
                    />
                           <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste3"
                    />
                    <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste4"
                    />
                    <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste4"
                    />
                      
                      <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste4"
                    />
                      
                      <ItemLista
                    foto="https://http2.mlstatic.com/D_NQ_NP_643463-MLB54166103873_032023-O.webp"
                    descricao="teste4"
                    />
                      
                      



                    </main>

                    <footer>
                        <div className="outro">
                            <h1 id="outroLevar">Escolha seu presente </h1>
                            <h3 id="comunique"><a id="click" onClick={() => setOpenModalPresente(true)}>Digite aqui </a></h3>

                        </div>
                    </footer>

                </div>
                <Presente  isOpen2={openModalPresente} setOpenModalPresente={() => setOpenModalPresente(!lista)} />
            </div>
           
        )
    }
}