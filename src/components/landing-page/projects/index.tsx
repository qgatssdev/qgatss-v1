import './styles.scss';

const Projects = () => {
  return (
    <div className='project_container'>
      <p>SELECTED PROJECTS</p>
      <div className='project_list'>
        <img src={require('../../../assets/Rectangle 14.png')} alt='rec' />
        <img src={require('../../../assets/Rectangle 14.png')} alt='rec' />
        <img src={require('../../../assets/Rectangle 14.png')} alt='rec' />
        <img src={require('../../../assets/Rectangle 14.png')} alt='rec' />
      </div>
      <button>VIEW ALL</button>
    </div>
  );
};

export default Projects;
