"use client"; 
import Navbar from './components/Navbar';
import ServerCard from './components/ServerCard';
import Image from 'next/image';


export default function Home() {
  var d = new Date(); 
  let currentYear = d.getFullYear();

  return (
    <div className="home">
      <Navbar />
      <header className="hero">
        <Image alt="Condiment Castle Minecraft Hero Image" width={"975"} height={"550"} src="/condiment-castle-mc-hero.png" />
      </header>

      <section className="servers">
        <div className="serverList">
          <ServerCard game="minecraft" ip="mc.condiment-castle.com" isOnline={true} playerCount="1" maxPlayerCount="20" />
          <ServerCard game="astroneer" ip="an.condiment-castle.com" isOnline={false} playerCount="0" maxPlayerCount="8"/>
          <ServerCard game="valheim" ip="vh.condiment-castle.com" isOnline={false} playerCount="0" maxPlayerCount="8"/>
        </div>
      </section>

    
  
      <footer><small>&copy; Copyright {currentYear}, Condiment Castle</small></footer>
    </div>
  );
}