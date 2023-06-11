import { useState } from "react";
import emailjs from '@emailjs/browser'



export default function Presente({ isOpen2, setOpenModalPresente, children }) {

    const [openModalPresente] = useState(false)
    const [nomepresente, setNomePresente] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function sendEmail(e) {
        e.preventDefault();
        if (nomepresente === ' ' ||name === ' ' || email === "") {
            alert("preencha todos os campos");
            return;
        }

        const templatePrams = {
            NomePrensente:nomepresente,
            from_name: name,
            email: email
        }


        emailjs.send("service_tqtjsor", "template_uut4izo", templatePrams, "p11D8o6_ZPo91shUR")
            .then((response) => {
                alert("Obrigado pelo Presente");
                setNomePresente('')
                setName('')
                setEmail('')
            }, (err) => {
                console.log("erro: ", err)
            })
    }

    if (isOpen2) {




        return (
            <div className="presente">
               
                <div className="cardpresente">
                <button id="fecharpresente" onClick={(setOpenModalPresente)}>x</button>
                <h1 id="textpresent">Presente  Com <br></br> <a id="p">P</a><br></br> Maiúsculo </h1>

            
                <form className="form" onSubmit={sendEmail}>

                <input type="text"
                        placeholder="Qual Presente: "
                        onChange={(e) => setNomePresente(e.target.value)}
                        value={nomepresente}
                    />

                    <input type="text"
                        placeholder="Nome: "
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input type="text"
                        placeholder="E-mail: "
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <input className="enviar" type="submit" />

                </form>
                </div>

            </div>

        )
    }


}