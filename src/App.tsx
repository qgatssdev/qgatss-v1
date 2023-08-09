import ScrollToTop from 'components/scroll-to-top';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
