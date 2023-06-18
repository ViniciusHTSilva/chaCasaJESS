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
                            <h1> Olá, essa Lista são APENAS sugestões, Caso queira presentear, aperte em "Digite aqui".</h1>

                        </div>
                        <button id="listafechar" onClick={(setOpenModallista)}>x</button>
                    </header>

                    <main>

                       
                        <ItemLista
                            foto="https://i.ibb.co/S00J374/IMG-20230602-WA0024.jpg"
                            descricao="Panos de Prato"
                        />
                        <ItemLista
                            foto="https://i.ibb.co/JkZMMM7/IMG-20230602-WA0023.jpg"
                            descricao="Descanso de Panela"
                        />
                        <ItemLista
                            foto="https://i.ibb.co/GQHpxwG/IMG-20230602-WA0022.jpg"
                            descricao="Jogo de Sobremesa"
                        />
                        <ItemLista
                            foto="https://i.ibb.co/wpcss5z/IMG-20230602-WA0021.jpg"
                            descricao="Fruteira de mesa"
                        />
                        <ItemLista
                            foto="https://i.ibb.co/Yy1v18M/IMG-20230602-WA0020.jpg"
                            descricao="Pegador de Salada /massa"
                        />
                        <ItemLista
                            foto="https://i.ibb.co/yBz4yX5/IMG-20230602-WA0019.jpg"
                            descricao="Kit de Peneiras"
                        />

                        <ItemLista
                            foto="https://i.ibb.co/1bQxDjC/IMG-20230602-WA0018.jpg"
                            descricao="Jarra de Suco"
                        />

                        <ItemLista
                            foto="https://i.ibb.co/3vDgfYL/IMG-20230602-WA0017.jpg"
                            descricao="Panela de Pudim"
                        />

                        <ItemLista
                            foto="https://i.ibb.co/LrvrC2K/IMG-20230602-WA0016.jpg"
                            descricao="Tabua de Carnes /Legumes"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/GkRh1J8/IMG-20230602-WA0042.jpg"
                            descricao="Cesto de Roupa"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/C2RLHsp/IMG-20230602-WA0041.jpg"
                            descricao="Tapete de Banheiro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/TL18FFb/IMG-20230602-WA0040.jpg"
                            descricao="Jogo de Taças"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/nzQkh6n/IMG-20230602-WA0039.jpg"
                            descricao="Suporte Papel Toalha"
                        />




                        <ItemLista
                            foto="https://i.ibb.co/ncWbwxh/IMG-20230602-WA0029.jpg"
                            descricao="Porta Condimentos"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/qFFpJSL/IMG-20230602-WA0028.jpg"
                            descricao="Potes Plasticos"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/Z2wHX2F/IMG-20230602-WA0027.jpg"
                            descricao="Forma de Bolo"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/RBGD0vg/IMG-20230602-WA0026.jpg"
                            descricao="Forma de Bolo"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/x6VWnZV/IMG-20230602-WA0025.jpg"
                            descricao="Potes de Vidro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/Nm9KVz8/IMG-20230602-WA0004.jpg"
                            descricao="Baldes"
                        />

                        <ItemLista
                            foto="https://i.ibb.co/mq4sdG3/IMG-20230602-WA0003.jpg"
                            descricao="Assadeira de Vidro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/cLBtZ7b/IMG-20230602-WA0060.jpg"
                            descricao="Ralador"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/ZVT7ngF/IMG-20230602-WA0059.jpg"
                            descricao="Boleira"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/rcgcNNj/IMG-20230602-WA0058.jpg"
                            descricao="Espatula de Bolo"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/GMNzc5C/IMG-20230602-WA0057.jpg"
                            descricao="Açucareiro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/Kb1RZ7q/IMG-20230602-WA0056.jpg"
                            descricao="Saleiro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/58R4Gbj/IMG-20230602-WA0055.jpg"
                            descricao="Kit Banheiro"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/thgYZkH/IMG-20230602-WA0054.jpg"
                            descricao="Escova/Limpeza"
                        />




                        <ItemLista
                            foto="https://i.ibb.co/dLdNbvr/IMG-20230602-WA0052.jpg"
                            descricao="Abridor de Lata"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/7pQVmmw/IMG-20230602-WA0051.jpg"
                            descricao="Prendedor de Embalagem"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/njdY3c8/IMG-20230602-WA0050.jpg"
                            descricao="Tesoura/Cozinha"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/KWq2r8J/IMG-20230602-WA0049.jpg"
                            descricao="Espremedor"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/DkB3hkD/IMG-20230602-WA0048.jpg"
                            descricao="Jogo Americano"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/YXscTfG/IMG-20230602-WA0047.jpg"
                            descricao="Jogo de Cama"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/CPBpjg4/IMG-20230602-WA0046.jpg"
                            descricao="Jogo de Toalhas"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/MSJ3qNp/IMG-20230602-WA0045.jpg"
                            descricao="Aparelho de Jantar"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/TY5RJVj/IMG-20230602-WA0044.jpg"
                            descricao="Jogo de Facas"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/mb8R8Rn/IMG-20230602-WA0043.jpg"
                            descricao="Kit de Xicaras/Canecas "
                        />


                        <ItemLista
                            foto="https://i.ibb.co/SVrdXY1/IMG-20230602-WA0011.jpg"
                            descricao="Cabides"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/ZcnHjmj/IMG-20230602-WA0014.jpg"
                            descricao="Kit de Colheres de Silicone "
                        />


                      


                        <ItemLista
                            foto="https://i.ibb.co/dbpSQHf/IMG-20230602-WA0009.jpg"
                            descricao="Kit Colheres de Pau"
                        />




                        <ItemLista
                            foto="https://i.ibb.co/gv8sxD3/IMG-20230602-WA0005.jpg"
                            descricao="Kit Pia/ Cozinha"
                        />

                        <ItemLista
                            foto="https://i.ibb.co/7vTkjdr/IMG-20230602-WA0030.jpg"
                            descricao="Porta mantimentos hermético"
                        />


                        <ItemLista
                            foto="https://i.ibb.co/zVtqDDc/IMG-20230602-WA0053.jpg"
                            descricao="Espatula Manteiga/Requeijão"
                        />




                    </main>

                    <footer>
                        <div className="outro">
                            <h1 id="outroLevar">Escolha seu presente </h1>
                            <h3 id="comunique"><a id="click" onClick={() => setOpenModalPresente(true)}>Digite aqui </a></h3>

                        </div>
                    </footer>

                </div>
                <Presente isOpen2={openModalPresente} setOpenModalPresente={() => setOpenModalPresente(!lista)} />
            </div>

        )
    }
}