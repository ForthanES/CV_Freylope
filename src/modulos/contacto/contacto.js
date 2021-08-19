import React from 'react';

const Contacto = ({ icono, dato, link }) => {
  return (
    <li className='list-group-item border-0 py-1 d-flex justify-content-between'>
      <span>{dato}</span>
      {link ? (
        <a href={link}>
          <i className={icono + ' ms-2'}></i>
        </a>
      ) : (
        <i className={icono + ' ms-2'}></i>
      )}
    </li>
  );
};

export default Contacto;
