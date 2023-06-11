import { useState } from "react";

export default function Aviso({isOpen, setOpenModal,children}) {

    const[openModal] = useState(false)

if(isOpen){

   


    return (
        <div className="avisoCard">

            <div className="cardAviso">
                <button className="buttonx"  onClick={(setOpenModal)} >Fechar</button>
                <h1 className="avisoInit">Aviso Importante !!</h1>
                <p className="aviso-text">Convidado <p className="nao"> NÂO </p> convida</p>

                
                    <img className="gato" src="https://i.pinimg.com/564x/6f/2e/24/6f2e2460e21494ddf58f1ed27989b26a.jpg" alt="" />
                   
            </div>

        </div>

    )
}


}