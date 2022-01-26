import React from "react";
import { AiFillFacebook, AiFillShop } from 'react-icons/ai';
import { BsInstagram, BsSpotify, BsPaypal,  } from 'react-icons/bs';
import styles from "./redesSociales.module.css"


const redesSociales = () => {

    const facebookPage = "https://www.facebook.com/radiorockandmore/";
    const instagramPage = "https://www.instagram.com/radiorockandmore/";
    const spotifyPage = 'https://open.spotify.com/user/hvnl5md0ge4dp86abw4ko89by?si=f44d53cbf7444def';
    const paypalPage = "https://www.paypal.com/donate/?hosted_button_id=8C7HE7P37LW24";
    const redbubblePage = "https://www.redbubble.com/es/i/camiseta/Rock-And-More-Collection-de-rockandmoreok/100121295.IJ6L0";

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <i onClick={() => window.open(facebookPage, '_blank')}><AiFillFacebook size={50} color={"3b5998"}/></i>
                    <i onClick={() => window.open(instagramPage, '_blank')}><BsInstagram size={50} color={"#E1306C"} /></i>
                    <i onClick={() => window.open(spotifyPage, '_blank')}><BsSpotify size={50} color={"#81b71a"}/></i>
                    <i onClick={() => window.open(paypalPage, '_blank')}><BsPaypal size={50} color={"#0079C1"}/></i>
                    <i onClick={() => window.open(redbubblePage, '_blank')}><AiFillShop size={50} color={"#DC143C"}/></i>
                </div>
                
            </div>
            <div className={styles.donate}>
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="hosted_button_id" value="8C7HE7P37LW24" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_AR/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    )
}

export default redesSociales;