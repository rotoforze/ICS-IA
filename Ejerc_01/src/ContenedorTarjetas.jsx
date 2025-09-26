import React from 'react';

const Tarjeta = ({ image, title, description }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const ContenedorTarjetas = () => {
  const tarjetasData = [
    {
      image: 'https://puttu.com/wp-content/uploads/2014/08/300x200.gif',
      title: 'Tarjeta 1',
      description: 'Descripción de la tarjeta número uno.',
    },
    {
      image: 'https://puttu.com/wp-content/uploads/2014/08/300x200.gif',
      title: 'Tarjeta 2',
      description: 'Descripción de la tarjeta número dos.',
    },
    {
      image: 'https://puttu.com/wp-content/uploads/2014/08/300x200.gif',
      title: 'Tarjeta 3',
      description: 'Descripción de la tarjeta número tres.',
    },
    {
      image: 'https://puttu.com/wp-content/uploads/2014/08/300x200.gif',
      title: 'Tarjeta 4',
      description: 'Descripción de la tarjeta número cuatro.',
    },
  ];

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: '#d4edda' }}>
      <div className="row g-4">
        {tarjetasData.map((tarjeta, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <Tarjeta
              image={tarjeta.image}
              title={tarjeta.title}
              description={tarjeta.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContenedorTarjetas;
