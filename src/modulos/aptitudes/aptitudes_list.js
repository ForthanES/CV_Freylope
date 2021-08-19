function AptitudesList() {
  const aptitudes = [
    'Visual Studio Code',
    'Github',
    'Node.js',
    'Amazon Web Services',
    'Docker',
    'MySQL',
    'Hyper-V',
    'Sistemas Windows y Linux',
    'CMS',
  ];
  const ListaAptitudes = ({ aptitudes }) =>
    Object.entries(aptitudes).map(([k, v]) => (
      <li
        className='list-group-item border-0 py-1 d-flex justify-content-between'
        key={k}
      >
        <span>{v}</span>
      </li>
    ));

  return (
    <>
      <section>
        <h3 className='d-flex m-0'>
          <span className='title'>Aptitudes</span>
          <span className='bg-bluegray ms-4 my-1 rounded flex-fill'></span>
        </h3>
        <ul className='list-group d-flex flex-wrap flex-row'>
          <ListaAptitudes aptitudes={aptitudes} />
        </ul>
      </section>
    </>
  );
}

export default AptitudesList;
