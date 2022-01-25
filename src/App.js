import './App.css';
import PlayerMusic from './component/playerMusic';
import RedesSociales from './component/RedesSociales';
import styles from './appContainer.module.css';


function App() {
  return (
    <div className="App">
      <div className={styles.imglogocontainer}>
        <img className={styles.imglogo} src={require('./public/rockandmore1.png')} alt="rockandmorelogo"/>
      </div>
      <div>
        <RedesSociales/>
      </div>
      <div>
        <PlayerMusic />
      </div>
      
      
      
    </div>
  );

}

export default App;
