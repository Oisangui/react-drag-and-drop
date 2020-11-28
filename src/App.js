import './App.css';
import Builder from './components/Builder';
import data from './config';

function App() {
  return (
    <div className="App">
      <Builder {...data}/>
    </div>
  );
}

export default App;
