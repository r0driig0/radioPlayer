import './App.css';
import PlayerMusic from './component/playerMusic';
import RedesSociales from './component/RedesSociales';
import styles from './appContainer.module.css';





function App() {
  return (
    <div className="App">
      <div className={styles.imglogocontainer}>
        <img className={styles.imglogo} src={require('./public/rockandmore1.png').default} alt="rockandmorelogo"/>
      </div>
      <div>
        <RedesSociales/>
      </div>
      <div className={styles.donate}>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="hosted_button_id" value="8C7HE7P37LW24" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_AR/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div>
        <PlayerMusic />
      </div>
      
      
      
    </div>
  );
}

export default App;
