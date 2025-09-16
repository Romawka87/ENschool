import React  from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Foto = () => {
    const ImageMass = [
        {
            id: "1",
            imageUrl: "https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-teacher-young-english-female-teacher-teaching-various-subjects-learning-education-characters-png-image_11334822.png",
            title: "Преподаватели",
            description: "Молодой преподавательский состав"
        },

        {
            id: "2",
            imageUrl:"https://static6.depositphotos.com/1003362/613/i/450/depositphotos_6130882-stock-photo-modern-classroom-interior.jpg",
            title:"Современные классы",
            description: "Мы используем только современные технологии"
        },

        {
            id: "3",
            imageUrl: "https://anrotech.ru/wp-content/uploads/2019/11/118-3.jpg",
            title: "Современное оборудование",
            description: "Для детей все саме лучшее"
        }

    ]

  return (
     <div 
     className="container mt-5">
      <h2 className="text-center mb-4">О нас</h2>
      
      <Carousel 
        indicators 
        interval={3000} 
        pause={false}
        className="shadow-lg rounded"
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        {ImageMass.map((item) => (
          <Carousel.Item key={item.id}>
            <div
              style={{
                height: '600px',
                background: `url(${item.imageUrl}) center/cover`,
                borderRadius: '5px'
              }}
            />
            <Carousel.Caption 
              style={{ 
                background: 'rgba(0, 0, 0, 0.5)', 
                borderRadius: '10px',
                padding: '15px'
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="text-center mt-4">
        <small className="text-muted">
        </small>
      </div>
    </div>
  )
}

export default Foto
