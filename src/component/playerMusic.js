/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState }  from "react";
import { BsFillPlayFill, BsPause } from "react-icons/all"
import styles from "./playerMusic.module.css"
import InfoMusic from "./infoMusic";

const urlRadio = 'https://streaming01.shockmedia.com.ar/8616/;'
 
class PlayerMusic extends Component {
    
    state = {
      audio: new Audio(urlRadio),
      isPlaying: false,
      volume: 0.5
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

      changeVolume = () => {

        let volume = this.state.volume;
        this.state.audio.volume = volume;
        console.log(volume)
        if (volume === 0.5) {
          this.setState({ volume: 0.4 });
        } else {
          this.setState({ volume: 0.3  });
        }  
      }

      render = () => {
        return (
          <div className={styles.container}>
            <div>
              
                <InfoMusic />
              </div>
            
            {/* Show state of song on website */}
              <p>
                {this.state.isPlaying ? 
                  "Song is Playing" : 
                  "Song is Paused"
                }
              </p>
            <div className={styles.playerContainer} >
              <i  onClick={this.playPause} >
                {this.state.isPlaying ? <BsPause size={100}/> : <BsFillPlayFill size={100}/>} 
              </i>
            </div>
            <div>
              <input onChange={this.changeVolume} type="range" min={0.0} max={5} value={this.volume} />  
            </div>   
          </div>
        );
      }

};

export default PlayerMusic;