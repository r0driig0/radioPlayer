import React from "react";
import { AiFillFacebook } from 'react-icons/all'
import styles from "./redesSociales.module.css"


const redesSociales = () => {

    return (
        <div>
            <div className={styles.container}>
                <li>
                    <i><AiFillFacebook size={50}/></i>
                    <i><AiFillFacebook size={50}/></i>
                    <i><AiFillFacebook size={50}/></i>
                    <i><AiFillFacebook size={50}/></i>
                    <i><AiFillFacebook size={50}/></i> 
                </li>
                
            </div>
        </div>
    )
}

export default redesSociales;