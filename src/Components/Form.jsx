import { useState } from "react";

function Form({ onSubmitNombre, onSubmitEmail }){
  const [inputNombre, setInputNombre] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [mensaje, setMensaje] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputNombre.trim().length <= 2){
      setMensaje("Ingresá un nombre más largo por favor");
    } else if(inputEmail.trim().length <= 5){
      setMensaje("Ingresá un email más largo por favor")
    }else {
      setMensaje('Información enviada!')
      onSubmitNombre(inputNombre);
      onSubmitEmail(inputEmail)
      setInputNombre('');
      setInputEmail('');
      }
  };

    return(
        <form style={{padding: '60px'}} 
        onSubmit={handleSubmit}>
          <h3>Contactanos</h3>
          <input style={{margin: '10px'}}
          type="text" placeholder="Ingrese su nombre" value={inputNombre} onChange={(e) => setInputNombre(e.target.value)}/>
          <input style={{margin: '10px'}} 
          type="email" placeholder="Ingrese su email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
          <span>{mensaje ? <div>{mensaje}</div> : null}</span>
          <button style={{margin: '10px'}} type="submit">Enviar información</button>
        </form>
    )
}



export default Form;