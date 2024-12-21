"use client"; 
import Navbar from './components/Navbar';
import ServerCard from './components/ServerCard';
import Image from 'next/image';


export default function Home() {
  var d = new Date(); 
  let currentYear = d.getFullYear();


  const metricsResponseJson = {
    "servers": [
      {
        "game": "minecraft",
        "ip": "mc.condiment-castle.com",
        "playerCount": 1,
        "maxPlayerCount": 20,
        "status": "Online",
        "metrics": {
          "2024-12-19T18:19:00Z": 85.63028971354167,
          "2024-12-19T18:15:00Z": 85.39021809895833,
          "2024-12-19T18:20:00Z": 85.87443033854167,
          "2024-12-19T18:16:00Z": 85.40242513020833,
          "2024-12-19T18:21:00Z": 86.16536458333333,
          "2024-12-19T18:17:00Z": 85.4248046875,
          "2024-12-19T18:13:00Z": 85.06876627604167,
          "2024-12-19T18:22:00Z": 86.64143880208333,
          "2024-12-19T18:18:00Z": 85.48177083333333,
          "2024-12-19T18:14:00Z": 85.33528645833333
        }
      },
      {
        "game": "astroneer",
        "ip": "an.condiment-castle.com",
        "playerCount": 0,
        "maxPlayerCount": 8,
        "status": "Starting",
        "metrics": {
          "2024-12-19T18:19:00Z": 0,
          "2024-12-19T18:15:00Z": 0,
          "2024-12-19T18:20:00Z": 0,
          "2024-12-19T18:16:00Z": 0,
          "2024-12-19T18:21:00Z": 0,
          "2024-12-19T18:17:00Z": 0,
          "2024-12-19T18:13:00Z": 0,
          "2024-12-19T18:22:00Z": 0,
          "2024-12-19T18:18:00Z": 0,
          "2024-12-19T18:14:00Z": 0
        }
      },
      {
        "game": "valheim",
        "ip": "vh.condiment-castle.com",
        "playerCount": 0,
        "maxPlayerCount": 8,
        "status": "Offline",
        "metrics": {
          "2024-12-19T18:19:00Z": 0,
          "2024-12-19T18:15:00Z": 0,
          "2024-12-19T18:20:00Z": 0,
          "2024-12-19T18:16:00Z": 0,
          "2024-12-19T18:21:00Z": 0,
          "2024-12-19T18:17:00Z": 0,
          "2024-12-19T18:13:00Z": 0,
          "2024-12-19T18:22:00Z": 0,
          "2024-12-19T18:18:00Z": 0,
          "2024-12-19T18:14:00Z": 0
        }
      }
    ]
  }

  return (
    <div className="home">
      <Navbar />
      <header className="hero">
        <Image alt="Condiment Castle Minecraft Hero Image" width={"975"} height={"550"} src="/condiment-castle-mc-hero.png" />
      </header>

      <section className="servers">
        <div className="serverList">
       
          {metricsResponseJson.servers.map((item, index) => (
            <ServerCard serverData={item} />
          ))}

        </div>
      </section>

      <footer><small>&copy; Copyright {currentYear}, Condiment Castle</small></footer>
    </div>
  );
}