

import TextInit from "../components/Init"
import Aviso from "../components/Aviso";
import Lista from "../components/lista de presentes/Lista";
import Presente from "../components/lista de presentes/presente"
import './App.css'
import '../components/Inicial.css';
import '../components/aviso.css';
import { useState } from "react";
import '../components/lista de presentes/lista.css'
import '../components/lista de presentes/presente.css'
import '../components/lista de presentes/responsivo.css'




export default function App() {

  const [openModal, setOpenModal] = useState(true)
 /* const [openModaltext, setOpenModaltext] = useState(false)*/
  const [openModallista, setOpenModallista] = useState(false)
 


  return (
    <div>
      < Aviso isOpen={openModal} setOpenModal={() => setOpenModal(!TextInit)} />
    
      
 
    
      <TextInit />
      <div className="ver">
      <button id="verLista" onClick={() => setOpenModallista(true)}>Ver lista</button>
      </div>
      <Lista isOpen1={openModallista} setOpenModallista={() => setOpenModallista(!TextInit)} />
      
      
    </div>

  )
}


