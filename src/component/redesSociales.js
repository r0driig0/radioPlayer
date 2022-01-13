import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram, BsSpotify, BsPaypal } from 'react-icons/bs';
import styles from "./redesSociales.module.css"


const redesSociales = () => {

    const facebookPage = "https://www.facebook.com/radiorockandmore/";
    const instagramPage = "https://www.instagram.com/radiorockandmore/";
    const spotifyPage = 'https://open.spotify.com/user/hvnl5md0ge4dp86abw4ko89by?si=f44d53cbf7444def';
    const paypalPage = "https://www.paypal.com/donate?token=PTo0Y3tD3rypRGF-gfP363hIEsN7i04nsuK5xLFb5Orw8lVTutLj3m5xSEzP7xZSXCl0b5uvS1n4HnQI";

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <i onClick={() => window.open(facebookPage, '_blank')}><AiFillFacebook size={50} color={"3b5998"}/></i>
                    <i onClick={() => window.open(instagramPage, '_blank')}><BsInstagram size={50} color={"#E1306C"} /></i>
                    <i onClick={() => window.open(spotifyPage, '_blank')}><BsSpotify size={50} color={"#81b71a"}/></i>
                    <i onClick={() => window.open(paypalPage, '_blank')}><BsPaypal size={50} color={"#0079C1"}/></i>
                </div>
                
            </div>
        </div>
    )
}

export default redesSociales;