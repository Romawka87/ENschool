import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from "../css/Registration.module.css"

const RegistatrationPage= () => {
    const navigate = useNavigate()
    const { ServiceType } = useParams()

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
            return;
        }  
        console.log('Данные формы:', { ...formdata, ServiceType });
        alert('Заявка отправлена!');
        navigate('/');
    };

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={s.div}>
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={6} lg={4}>
                    <div className="p-4 border rounded shadow-sm bg-white">
                        <h2 className="text-center mb-4">Форма регистрации</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label>Номер телефона</Form.Label>
                                <Form.Control
                                    required 
                                    name='number'
                                    onChange={handleChange}
                                    value={formdata.number}
                                    type="tel"
                                    placeholder="Введите телефон"
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicName">
                                <Form.Label>ФИО</Form.Label>
                                <Form.Control
                                    name='name'
                                    required
                                    onChange={handleChange}
                                    value={formdata.name}
                                    type="text"
                                    placeholder="ФИО"
                                />
                            </Form.Group>

                            <div className="d-flex gap-2">
                                <Button 
                                    variant="secondary" 
                                    className="flex-fill"
                                    onClick={handleBack}
                                >
                                    Назад
                                </Button>
                                
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    className="flex-fill"
                                >
                                    Отправить
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default RegistatrationPage;