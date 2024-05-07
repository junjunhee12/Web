
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  
  const height = window.scrollY;
  console.log("scrollY", height);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
