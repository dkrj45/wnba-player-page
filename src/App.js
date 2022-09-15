import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PlayerPage from './pages/PlayerPage/PlayerPage';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<PlayerPage />}></Route>
            <Route path='/players/:name' element={<PlayerPage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
