import { useState } from "react";


export default function Form() {
    const[firstName,setFist] =useState("")
  const[lastName,setLast] =useState("")
  
    function handleFirstNameChange(e) {
      setFist(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setLast(e.target.value);
    }
  
    function handleReset() {
      setFist('');
      setLast('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }