import React, { useState } from 'react';

//Buena practica.
const initialForm={
  id: null,
  name:"",
  constellation:"",
}
function CrudForm() {
  const [form, setForm] = useState(initialForm)
  const handleChange=(e)=>{

  }
  const handleSubmit=(e)=>{
    
  }
  const handleReset=(e)=>{
    
  }
  return (
    <>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='Nombre' onChange={handleChange}
        value={form.name}/>
        <input type="text" name="constellation" id="constellation" 
        placeholder='Constellation' onChange={handleChange}
        value={form.constellation}/>
        
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </>
  )
}

export default CrudForm