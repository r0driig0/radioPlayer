
import './App.css';
import PlayerMusic from './component/playerMusic';
import redesSociales from './component/redesSociales';





function App() {
  return (
    <div className="App">
      <header>
        <h1>ROCK AND MORE</h1>
      </header>
      <div className='App'>
        <redesSociales/>
      </div>
      <div>
        <PlayerMusic />
      </div>
      
      
      
    </div>
  );
}

export default App;
