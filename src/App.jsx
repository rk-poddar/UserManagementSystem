import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './pages/dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DashBoard/>
    </div>
  );
}

export default App;
