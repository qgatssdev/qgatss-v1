import './styles.scss';

const Projects = () => {
  const projects = [
    {
      name: 'Melon',
      image: '',
      tools: ['Next.js', 'Typescript'],
    },
    {
      name: 'Melon2',
      image: '',
      tools: ['Next.js', 'Typescript'],
    },
  ];
  return (
    <div className='project_container'>
      <p>SELECTED PROJECTS</p>
      <div className='project_list'>
        <div>
          <ul>
            <li>Melon</li>
            <li>Melon 2</li>
          </ul>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <button>VIEW ALL</button>
    </div>
  );
};

export default Projects;
