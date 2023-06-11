

export default function ItemComp ({descricao,foto}){

    return(
        
        <div className="item">
        <img src={foto} alt="" />
        <div className="detalhes">
            <div className="titleitem">
                <p>{descricao}</p>

                

                
            </div>
        </div>

    </div>

    )
}