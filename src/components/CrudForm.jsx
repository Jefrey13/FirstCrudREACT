import React, { useState, useEffect } from 'react';

//Buena practica.
const initialForm={
  id: null,
  name:"",
  constellation:"",
}
function CrudForm({createData, updateData, dataToEdit, setDataToEdit}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit);
    }else{
      setForm(initialForm);
    }
  }, [dataToEdit])//Verificamos cada que cambia, o se presiona el boton edit, de la tabla.
  
  //Almacenamos los datos del input, en las propiedades dee name y constellation.
  const handleChange=(e)=>{
    setForm({
      ...form, //// Copia todas las propiedades existentes en `form`
      [e.target.name]: e.target.value,
      //Obtiene el atributo name del input que desencadenó el evento
      //obtiene el valor actual del input que desencadenó el evento.
  });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name || !form.constellation){
      alert("Datos incompletos");
      return;
    }
    //Comunicación con el padre
    if(form.id === null){
      createData(form);
    }else{
      updateData(form);
    }
    handleReset()
  }
  const handleReset=(e)=>{
    setForm(initialForm);
    setDataToEdit(null);
  }
  return (
    <>
      <h3>{dataToEdit? "Editar": "Agregar"}</h3>
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