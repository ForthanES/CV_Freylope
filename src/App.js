import './App.css';
import Nombre from './modulos/user';
import Profile from './modulos/profile';
import Resumen from './modulos/resumen/resumen';
import FormacionList from './modulos/formacion/formacion_list';
import HistorialList from './modulos/historial/historial_list';
import ContactoList from './modulos/contacto/contacto_list';
import AptitudesList from './modulos/aptitudes/aptitudes_list';
import ConocimientosList from './modulos/conocimientos/conocimientos_list';

function App() {
  return (
    <>
      <main className='App shadowgradient'>
        <header className='banner bg-blue'>
          <Nombre username='Francisco Borja Rey López'></Nombre>
        </header>
        <div className='column1'>
          <Resumen></Resumen>
          <FormacionList></FormacionList>
          <HistorialList></HistorialList>
        </div>
        <div className='column2'>
          <Profile img='./profilepic.jpg'></Profile>
          <ContactoList></ContactoList>
          <ConocimientosList></ConocimientosList>
          <AptitudesList></AptitudesList>
        </div>
      </main>
    </>
  );
}

export default App;
