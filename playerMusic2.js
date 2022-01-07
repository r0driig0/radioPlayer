import React, { Component }  from "react";
import { BsFillPlayFill, BsPause } from "react-icons/all"

 const urlRadio = 'https://streaming01.shockmedia.com.ar/8616/;'
class PlayerMusic extends Component {
   

    state = {

        // Get audio file in a variable
        audio: new Audio(urlRadio),
    
        // Set initial state of song
        isPlaying: false,
      };
    
      // Main function to handle both play and pause operations
      playPause = () => {
    
        // Get state of song
        let isPlaying = this.state.isPlaying;
    
        if (isPlaying) {
          // Pause the song if it is playing
          this.state.audio.pause();
        } else {
    
          // Play the song if it is paused
          this.state.audio.play();
        }
    
        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
        
        


      };
    
      render = () => {
        return (
          <div>
            {/* Show state of song on website */}
            <p>
              {this.state.isPlaying ? 
                "Song is Playing" : 
                "Song is Paused"}
            </p>
    
            {/* Button to call our main function */}
            <i onClick={this.playPause}>
                
               {this.state.isPlaying ? <BsPause/> : <BsFillPlayFill/>} 
              
            </i>
            <i></i>
          </div>
        );
      }
    
    
    
    
    
    


};



export default PlayerMusic;