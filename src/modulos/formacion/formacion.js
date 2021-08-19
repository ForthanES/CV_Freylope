import React, { useState } from 'react';

const Formacion = ({ level, formation, year, ies, location, formdesc }) => {
  const [symbol, setSymbol] = useState('-');
  const [showFormdesc, setShowFormdesc] = useState('vfxShow');
  const changeSymbol = () => {
    if (symbol === '+') {
      setSymbol('-');
      setShowFormdesc('vfxShow');
    } else {
      setSymbol('+');
      setShowFormdesc('vfxHide');
    }
  };
  return (
    <article className='mt-2 mb-3'>
      <span
        className='btn badge rounded-pill p-0 px-1 mx-2'
        type='button'
        onClick={changeSymbol}
      >
        {symbol}
      </span>
      <span className='fw-bold'>
        <span>{level}</span>, <span>{formation}</span>, <span>{year}</span>
        <br />
      </span>
      <span>
        <span className='fw-bold'>{ies}</span> - <span>{location}</span>
        <br />
      </span>
      <span className={'d-block ' + showFormdesc}>{formdesc}</span>
    </article>
  );
};

export default Formacion;
