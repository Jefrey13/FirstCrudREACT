import React from 'react'
import CrudTableRow from './CrudTableRow'

function CrudTable({data, setDataToEdit, deleteData}) {
  return (
    <>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ?(
                 <tr> <td colSpan="3">Sin datos</td> </tr>
                ):(
                    data.map((el)=> <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                )}
            </tbody>
        </table>
    </>
  )
}

export default CrudTable