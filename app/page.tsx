"use client"; 
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import ServerCard from './components/ServerCard';
import Image from 'next/image';
import axios from 'axios';


export default function Home() {
  const d = new Date(); 
  const currentYear = d.getFullYear();


  const [metricsResponseJson, setMetricsResponseJson] = useState([
    {
      game: "minecraft",
      ip: "Loading...",
      port: 0,
      playerCount: 0,
      maxPlayerCount: 0,
      status: "Loading...",
      metrics: {}
    },
    {
      game: "astroneer",
      ip: "Loading...",
      port: 0,
      playerCount: 0,
      maxPlayerCount: 0,
      status: "Loading...",
      metrics: {}
    },
    {
      game: "valheim",
      ip: "Loading...",
      port: 0,
      playerCount: 0,
      maxPlayerCount: 0,
      status: "Loading...",
      metrics: {}
    }
  ]);

  const fetchServerData = () => {
    console.log('fetching data from server...');
    
    axios.get('/api/servers')
    .then((response) => {
      setMetricsResponseJson(response.data); // Update the state
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  useEffect(() => {
    fetchServerData();
  }, []);  

  return (
    <div className="home">
      <Navbar />
      <header className="hero">
        <Image 
          alt="Condiment Castle Minecraft Hero Image"
          width={"975"} 
          height={"550"} 
          src="/condiment-castle-mc-hero.png" 
        />
      </header>

      <section className="servers">
        <div className="serverList">
       
          {metricsResponseJson.map((item, index) => (
            <ServerCard key={index} serverData={item} />
          ))}

        </div>
      </section>

      <footer><small>&copy; Copyright {currentYear}, Condiment Castle</small></footer>
    </div>
  );
}