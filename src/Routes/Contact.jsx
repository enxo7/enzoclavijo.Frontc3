import { useState } from 'react'
import Form from '../Components/Form'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [formData, setFormData] = useState()
  const [formData1, setFormData1] = useState()
  const handleFormSubmit = (data) => {
    setFormData(data);
  }

  const handleFormSubmit2 = (dato) => {
    setFormData1(dato);
  }
  return (
    
    <div style={{
      textAlign: 'center',
      margin: '40px',
      padding: '10px',
    }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onSubmitNombre={handleFormSubmit} onSubmitEmail={handleFormSubmit2}/>
      <p>los datos del nombre son: {formData}</p>
      <p>Los datoss del email son: {formData1}</p>
    </div>
  )
}

export default Contact