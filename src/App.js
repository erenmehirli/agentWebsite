import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutePath from './routers/RoutePath';

function App() {
  return (
    <div className="App">
      <Navbar/>
         <RoutePath />
      <Footer/>
    </div>
  );
}

export default App;
