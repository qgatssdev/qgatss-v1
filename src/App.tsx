import Hero from 'components/landing-page/hero';
import ScrollToTop from 'components/scroll-to-top';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
