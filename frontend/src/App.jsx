import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';

const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
    </>
  )
}

export default App;