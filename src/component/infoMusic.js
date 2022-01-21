import React, { useEffect, useState } from "react";
import styles from "./infoMusic.module.css"



const InfoMusic = () => {
  const url = "https://streaming01.shockmedia.com.ar/cp/get_info.php?p=8616";
  
  const ts = new Date().toLocaleTimeString();
  
  const [post, setPost] = useState([]);
    
  useEffect(() => {
    const audioPlayer = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        })
        .catch((err) => console.log(err));
    }
    audioPlayer();
  },[ts]);	

  if (post.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      
      <div className={styles.container}>
        <div className={styles.containerInfo} key={post.id}>
          <img src={post.art + "?r=" + ts} width={50} height={50} />
          <h3><marquee>{post.title}</marquee></h3>
          <p>Listeners: {post.listeners}</p>
        </div>       
      </div>

    );
  }

  
};


export default InfoMusic;
