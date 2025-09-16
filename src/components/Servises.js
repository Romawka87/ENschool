import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Teacher from "../image/teachers.jpg"
import Group from "../image/group.jpg"
import Online from "../image/online.jpg"
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const navigate = useNavigate()

  const handleRegister = (serviceType) =>
  {
    navigate(`/register/${encodeURIComponent(serviceType)}`)
  }
  return (
    <div 
    className="container py-5">
      <h3 className='text-center mb-4' data-aos="fade-down">Услуги</h3>
      
      <div className="row justify-content-center">
        
        <div className="col-md-6 col-lg-4 mb-4 d-flex" data-aos="fade-right">
          <Card 
          className="w-100">
            <Card.Img 
              variant="top" 
              src={Teacher} 
              style={{ height: '150px', objectFit: 'cover' }} 
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Индивидуальные занятия</Card.Title>
              <Card.Text className="flex-grow-1">
                Хотите что б ваш ребенок разговаривал на английском?
                Тогда этот вид занятий для вас, преподаватель сможет максимально уделить внимание вашему ребенку
              </Card.Text>
              <Button
               onClick={() => handleRegister('Индивидуальные занятия')}
              variant="primary" className="mt-auto">Записаться</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 mb-4 d-flex" data-aos="fade-up">
          <Card className="w-100">
            <Card.Img 
              variant="top" 
              src={Group} 
              style={{ height: '150px', objectFit: 'cover' }} 
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Групповые занятия</Card.Title>
              <Card.Text className="flex-grow-1">
                Хотите что б ваш ребенок разговаривал и уделял большее время практике на английском?
                Тогда этот вид занятий для вас, ваш ребенок будет практиковать английский с другими детьми
              </Card.Text>
              <Button
               onClick={() => handleRegister('Групповые занятия')}
              variant="primary" className="mt-auto">Записаться</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 mb-4 d-flex" data-aos="fade-left">
          <Card className="w-100">
            <Card.Img 
              variant="top" 
              src={Online} 
              style={{ height: '150px', objectFit: 'cover' }} 
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Онлайн занятия</Card.Title>
              <Card.Text className="flex-grow-1">
                Вы с другого города, но мы вызвали у вас доверие?
                Тогда этот вид занятий для вас, ваш ребенок будет практиковать английский прямиком из дома.
              </Card.Text>
              <Button
               onClick={() => handleRegister('Онлайн занятия')}
              variant="primary" className="mt-auto">Записаться</Button>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Services