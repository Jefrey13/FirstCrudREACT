import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
    {
      "id": 1,
      "name": "Seiya",
      "constellation": "Pegaso"
    },
    {
      "id": 2,
      "name": "Shiryu",
      "constellation": "Dragón"
    },
    {
      "id": 3,
      "name": "Hyoga",
      "constellation": "Cisne"
    },
    {
      "id": 4,
      "name": "Shun",
      "constellation": "Andrómeda"
    },
    {
      "id": 5,
      "name": "Ikki",
      "constellation": "Fénix"
    },
    {
      "id": 6,
      "name": "Mú",
      "constellation": "Aries"
    },
    {
      "id": 7,
      "name": "Saga",
      "constellation": "Geminis"
    },
    {
      "name": "Shura",
      "constellation": "Capricornio",
      "id": 1617237562207
    }
]
function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);//crear o actualizar

  const createData=(data)=>{}
  const updateData=(data)=>{}
  const deletData=(id)=>{}
  return (
    <>
    <h2>Crud App</h2>
        <CrudForm createData={createData} updateData={updateData} 
        dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
        <CrudTable data={db}/>
    </>
  )
}
export default CrudApp