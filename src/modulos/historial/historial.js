import React, { useState } from 'react';

const Historial = ({
  puesto,
  fechain,
  fechafin,
  empresa,
  location,
  formdesc,
}) => {
  const [symbol, setSymbol] = useState('+');
  const [showFormdesc, setShowFormdesc] = useState('vfxHide');
  const changeSymbol = () => {
    if (symbol === '+') {
      setSymbol('-');
      setShowFormdesc('vfxShowH');
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
        <span>{puesto}</span>, <span>{fechain}</span> - <span>{fechafin}</span>
        <br />
      </span>
      <span className='fw-bold'>
        <span>{empresa}</span> - <span>{location}</span>
        <br />
      </span>
      <span className={'d-block ' + showFormdesc}>{formdesc}</span>
    </article>
  );
};

export default Historial;
