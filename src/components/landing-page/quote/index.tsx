import './styles.scss'

const Quote = () => {
  return (
    <div className='quote_container'>
        <p className='quote_text'>
        <img
          src={require('../../../assets/apostrophe.svg').default}
          alt='eclipse'
          className='apostrophe'
        />
        The best software engineering projects are not built solely on code; they are woven together with creativity, innovation, and a deep understanding of human needs 

        </p>
        <p className='quote_person'>-Grady Booch</p>
    </div>
  )
}

export default Quote