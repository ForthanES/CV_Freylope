import React from 'react';

const Perfil = ({ img }) => {
  return (
    <div className='profileframe mb-2'>
      <img src={img} alt='profile' className='img-fluid profilepic' />
      <div className='triangle'></div>
    </div>
  );
};

export default Perfil;
