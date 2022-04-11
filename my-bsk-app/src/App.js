import logo from './logo.svg';
import './App.css';
import LFSRTabs from './components/LFSRTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <>
    <Navbarr />
    <div className="App mx-5 mt-5">
      
      <LFSRTabs />
    </div>
    </>
  );
}

export default App;
