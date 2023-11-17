/* eslint-disable react/prop-types */
 // eslint-disable-next-line react/prop-types

 const Informações = ({informações, removeInformações, concluirInformações}) => {
    return (
      <div>
        <div className="Informações" 
        style={{ textDecoration: informações.isCompleted ? "line-through" : ""}}>
            <div className='content'>
                <p>{informações.text}</p>
                <p className='category'>({informações.category})</p>
            </div>
            <div>
                <button className='conclua' onClick={() => concluirInformações(informações.id)}>Concluir</button>
                <button className='remove' onClick={() => removeInformações(informações.id)}>x</button>
            </div>
      </div>
      </div>
          
    )
  }

export default Informações
