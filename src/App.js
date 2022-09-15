//axios installed as well :)
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PlayerPage from './pages/UploadPage/UploadPage';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/Home' />}></Route>
            <Route path='/players/:name' element={<PlayerPage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
