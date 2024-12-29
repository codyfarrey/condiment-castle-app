"use client"; 
import Navbar from './components/Navbar';
import ServerCard from './components/ServerCard';
import Image from 'next/image';
import axios from 'axios';


export default function Home() {
  const d = new Date(); 
  const currentYear = d.getFullYear();


  let metricsResponseJson = [
    {
      "game": "minecraft",
      "ip": "mc.condiment-castle.com",
      "port": 25565,
      "playerCount": 0,
      "maxPlayerCount": 20,
      "status": "Offline",
      "metrics": {
        "2024-12-22T19:46:33.291007300Z": 0,
        "2024-12-22T19:50:33.291007300Z": 0,
        "2024-12-22T19:54:33.291007300Z": 0,
        "2024-12-22T19:47:33.291007300Z": 0,
        "2024-12-22T19:51:33.291007300Z": 0,
        "2024-12-22T19:44:33.291007300Z": 0,
        "2024-12-22T19:48:33.291007300Z": 0,
        "2024-12-22T19:52:33.291007300Z": 0,
        "2024-12-22T19:45:33.291007300Z": 0,
        "2024-12-22T19:49:33.291007300Z": 0,
        "2024-12-22T19:53:33.291007300Z": 0
      }
    },
    {
      "game": "astroneer",
      "ip": "an.condiment-castle.com",
      "port": 8777,
      "playerCount": 0,
      "maxPlayerCount": 8,
      "status": "Offline",
      "metrics": {
        "2024-12-22T19:47:33.330485600Z": 0,
        "2024-12-22T19:51:33.330485600Z": 0,
        "2024-12-22T19:44:33.330485600Z": 0,
        "2024-12-22T19:48:33.330485600Z": 0,
        "2024-12-22T19:52:33.330485600Z": 0,
        "2024-12-22T19:45:33.330485600Z": 0,
        "2024-12-22T19:49:33.330485600Z": 0,
        "2024-12-22T19:53:33.330485600Z": 0,
        "2024-12-22T19:46:33.330485600Z": 0,
        "2024-12-22T19:50:33.330485600Z": 0,
        "2024-12-22T19:54:33.330485600Z": 0
      }
    },
    {
      "game": "valheim",
      "ip": "vh.condiment-castle.com",
      "port": 2456,
      "playerCount": 0,
      "maxPlayerCount": 8,
      "status": "Offline",
      "metrics": {
        "2024-12-22T19:45:33.369904500Z": 0,
        "2024-12-22T19:49:33.369904500Z": 0,
        "2024-12-22T19:53:33.369904500Z": 0,
        "2024-12-22T19:44:33.369904500Z": 0,
        "2024-12-22T19:48:33.369904500Z": 0,
        "2024-12-22T19:52:33.369904500Z": 0,
        "2024-12-22T19:47:33.369904500Z": 0,
        "2024-12-22T19:51:33.369904500Z": 0,
        "2024-12-22T19:46:33.369904500Z": 0,
        "2024-12-22T19:50:33.369904500Z": 0,
        "2024-12-22T19:54:33.369904500Z": 0
      }
    }
  ];

  const fetchServerData = () => {
    console.log('fetching data from server');
    
    axios.get('http://localhost:8080/api/servers')
    .then(function (response) {
      metricsResponseJson = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  fetchServerData();  

  return (
    <div className="home">
      <Navbar />
      <header className="hero">
        <Image alt="Condiment Castle Minecraft Hero Image" width={"975"} height={"550"} src="/condiment-castle-mc-hero.png" />
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