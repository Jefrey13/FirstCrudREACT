import React from 'react'

function CrudTableRow({el}) {
  return (
    <>
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    </>
  )
}

export default CrudTableRow