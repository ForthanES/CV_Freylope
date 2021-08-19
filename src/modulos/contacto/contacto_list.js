import { contactos } from './contacto_data';
import Contacto from './contacto';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactoList() {
  return (
    <>
      <section>
        <h3 className='d-flex m-0'>
          <span className='title'>Contacto</span>
          <span className='bg-bluegray ms-4 my-1 rounded flex-fill'></span>
        </h3>
        <ul className='list-group'>
          {contactos.map((dataf) => {
            return <Contacto key={dataf.id} {...dataf}></Contacto>;
          })}
        </ul>
      </section>
    </>
  );
}

export default ContactoList;
