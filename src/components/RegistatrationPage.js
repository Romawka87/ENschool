import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom';


const RegistatrationPage = () => {
    const navigate = useNavigate()
    const {ServiceType} = useParams()

    const [formdata, setFormdata] = useState({
        number: "",
        name: ''
})
  const handleChange = (e) => {
   
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
    
   
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.name.trim() || !formdata.number.trim()) {
        alert('Заполните все поля');
    
    }  
    console.log('Данные формы:', { ...formdata, ServiceType });
    alert('Заявка отправлена!');
    navigate('/');
  };
  return (
   <Form onSubmit={handleSubmit}>
    <div className='col-md-3 col-lg-3'>
      <Form.Group className="mb-3, width 40%" controlId="formBasicNumber">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control
        required 
        name='number'
        onChange={handleChange}
        value={formdata.number}
        type="number" placeholder="Введите телефон" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ФИО</Form.Label>
        <Form.Control
        name='name'
        required
        onChange={handleChange}
        value={formdata.name}
        type="text" placeholder="ФИО" />
      </Form.Group>
     </div>
      <Button variant="primary" type="submit"
      onClick={()=>navigate(-1)}
      >
        Отправить
      </Button>
    </Form>
  )
}

export default RegistatrationPage
