import Historial from './historial';
import { datahist } from './historial_data';

function HistorialList() {
  return (
    <>
      <section>
        <h3 className='d-flex m-0'>
          <span className='title'>Historial Laboral</span>
          <span className='bg-bluegray ms-4 my-1 rounded flex-fill'></span>
        </h3>
        {datahist
          .slice(0)
          .reverse()
          .map((dataf) => {
            return <Historial key={dataf.id} {...dataf}></Historial>;
          })}
      </section>
    </>
  );
}

export default HistorialList;
