import React from 'react'

function CrudTableRow({el, setDataToEdit, deleteData}) {
  return (
    <>
        <tr>
        <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button className='btnEditar' onClick={()=>setDataToEdit(el)}>Editar</button>
                <button className='btnDelete' onClick={()=> deleteData(el.id)}>Eliminar</button>
            </td>
        </tr>
    </>
  )
}

export default CrudTableRow