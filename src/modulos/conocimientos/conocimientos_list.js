function ConocimientosList() {
  const experience = {
    lenguajes: ['Java', 'JavaScript', 'PHP'],
    librerías: ['JDBC', 'React'],
    frameworks: ['React Native', 'Bootstrap'],
  };
  const ListExp = ({ experience }) =>
    Object.entries(experience).map(([k, v]) => (
      <li className='list-group-item border-0 py-1' key={k}>
        <span>Experiencia con {k}:</span>
        <ul className='list-group-horizontal p-0 d-flex flex-nowrap'>
          {v.map((item) => (
            <li className='list-group-item border-0 p-0 pe-2' key={item}>
              {item}
            </li>
          ))}
        </ul>
      </li>
    ));
  return (
    <>
      <section>
        <h3 className='d-flex m-0'>
          <span className='title'>Conocimientos</span>
          <span className='bg-bluegray ms-4 my-1 rounded flex-fill'></span>
        </h3>
        <ul className='list-group py-1'>
          <ListExp experience={experience} />
        </ul>
      </section>
    </>
  );
}

export default ConocimientosList;
