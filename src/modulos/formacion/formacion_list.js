import Formacion from './formacion';
import { dataform } from './formacion_data';

function FormacionList() {
  return (
    <>
      <section>
        <h3 className='d-flex m-0'>
          <span className='title'>Formación</span>
          <span className='bg-bluegray ms-4 my-1 rounded flex-fill'></span>
        </h3>
        {dataform
          .slice(0)
          .reverse()
          .map((dataf) => {
            return <Formacion key={dataf.id} {...dataf}></Formacion>;
          })}
      </section>
    </>
  );
}

export default FormacionList;
