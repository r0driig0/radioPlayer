/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component }  from "react";
import { BsFillPlayFill, BsPause, BsVolumeDown, BsVolumeUp } from "react-icons/bs";
import styles from "./playerMusic.module.css"
import InfoMusic from "./infoMusic";

const urlRadio = 'https://streaming01.shockmedia.com.ar/8616/;';
 
class PlayerMusic extends Component {
    
    state = {
      audio: new Audio(urlRadio),
      isPlaying: false,
      volume: 1.0 
    };
      playPause = () => {
        let isPlaying = this.state.isPlaying;
    
        if (isPlaying) {
         this.state.audio.pause();
        } else {
          this.state.audio.play();
        }
        this.setState({ isPlaying: !isPlaying });

      };

      DownVolume = () => {

        let volume = this.state.volume;
        this.state.audio.volume = volume;
        
        if (volume === 1.0) {
          this.setState({ volume: 0.9 });
        } else if (volume === 0.9) {
          this.setState({ volume: 0.8 });
        } else if (volume === 0.8) {
          this.setState({ volume: 0.7 });
        } else if (volume === 0.7) {
          this.setState({ volume: 0.6 });
        } else if (volume === 0.6) {
          this.setState({ volume: 0.5 });
        } else if (volume === 0.5) {
          this.setState({ volume: 0.4 });
        } else if (volume === 0.4) {
          this.setState({ volume: 0.3 });
        } else if (volume === 0.3) {
          this.setState({ volume: 0.2 });
        } else if (volume === 0.2) {
          this.setState({ volume: 0.1 });
        } else if (volume === 0.1) {
          this.setState({ volume: 0 });
        }
      }
      upVolume = () => {

        let volume = this.state.volume;
        this.state.audio.volume = volume;
        
        if (volume === 0) {
          this.setState({ volume: 0.1 });
        } else if (volume === 0.1) {
          this.setState({ volume: 0.2 });
        } else if (volume === 0.2) {
          this.setState({ volume: 0.3 });
        } else if (volume === 0.3) {
          this.setState({ volume: 0.4 });
        } else if (volume === 0.4) {
          this.setState({ volume: 0.5 });
        } else if (volume === 0.5) {
          this.setState({ volume: 0.6 });
        } else if (volume === 0.6) {
          this.setState({ volume: 0.7 });
        } else if (volume === 0.7) {
          this.setState({ volume: 0.8 });
        } else if (volume === 0.8) {
          this.setState({ volume: 0.9 });
        } else if (volume === 0.9) {
          this.setState({ volume: 1.0 });
        }
      }


      render = () => {
        return (
          <div className={styles.container}>
            <div>
              <InfoMusic />
            </div>
      
            <div className={styles.playerContainer} >
              <div className={styles.controls}>
                <i onClick={() => this.DownVolume()}>{<BsVolumeDown size={90}/>}</i>
                <i  onClick={this.playPause} >
                {this.state.isPlaying ? <BsPause size={100}/> : <BsFillPlayFill size={100}/>} 
                </i>
                <i  onClick={() => this.upVolume()}>{<BsVolumeUp size={90}/>}</i>
              </div>
              
            </div>
          </div>
        );
      }

};

export default PlayerMusic;