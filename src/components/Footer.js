import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insta from "../image/insta.png"
import Tg from "../image/tg.png"
import Truba from "../image/truba.png"

const Footer = () => {
 
  return (
    <footer 
    className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* Колонка с контактами */}
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">Свяжитесь с нами</h5>
            <div 
            
            className="d-flex align-items-center mb-2">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3"
                   style={{ width: '40px', height: '40px' }}>
                <img 
                  src = {Truba} 
                  alt="Телефон" 
                  style={{ width: '20px', height: '20px' }}
                />
              </div>
              <div>
                <p className="mb-0">+375(25) 664-15-99</p>
                <small className="text-muted">Наш номер телефона</small>
              </div>
            </div>
          </Col>

          {/* Колонка с соцсетями */}
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">Мы в соцсетях</h5>
            <div className="d-flex gap-3">
              {/* Instagram */}
              <a href="https://www.instagram.com/__antihero__or__no?igsh=ZDc3MXVwZHJpdGk3&utm_source=qr" target="_blank" rel="noopener noreferrer" 
                 className="text-decoration-none">
                <div className="bg-gradient instagram-btn d-flex align-items-center justify-content-center"
                     style={{ width: '50px', height: '50px', borderRadius: '10px' }}>
                  <img 
                    src={Insta} 
                    alt="Instagram" 
                    style={{ width: '34px', height: '34px' }}
                  />
                </div>
                <small className="d-block text-center mt-1">Instagram</small>
              </a>

              {/* Telegram */}
              <a href="https://t.me/antihero_or" target="_blank" rel="noopener noreferrer" 
                 className="text-decoration-none">
                <div className="bg-primary telegram-btn d-flex align-items-center justify-content-center"
                     style={{ width: '50px', height: '50px', borderRadius: '10px' }}>
                  <img 
                    src={Tg}
                    alt="Telegram" 
                    style={{ width: '34px', height: '34px' }}
                  />
                </div>
                <small className="d-block text-center mt-1">Telegram</small>
              </a>
</div>
             
          </Col>

          {/* Колонка с быстрыми ссылками */}
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">Быстрые ссылки</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#services" className="text-light text-decoration-none">Услуги</a></li>
              <li className="mb-2"><a href="#about" className="text-light text-decoration-none">О нас</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Контакты</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

       
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 English School. Все права защищены.</p>
          </Col>
        </Row>
      </Container>

      <style>{`
        .instagram-btn {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important;
          transition: transform 0.3s ease;
        }
        
        .telegram-btn {
          background: #0088cc !important;
          transition: transform 0.3s ease;
        }
        
        .whatsapp-btn {
          background: #25D366 !important;
          transition: transform 0.3s ease;
        }
        
        .instagram-btn:hover, 
        .telegram-btn:hover, 
        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        footer a:hover {
          color: #ffc107 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;