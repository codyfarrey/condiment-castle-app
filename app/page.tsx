"use client"; 
import Navbar from './components/Navbar';
import ServerCard from './components/ServerCard';


export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <header className="hero">
        <h1>Welcome to Condiment Castle</h1>
        <p>Your hub for gaming servers and community events!</p>
      </header>

      <section className="servers">
        <div className="serverList">
          <ServerCard game="minecraft" ip="mc.condiment-castle.com" serverStatus="Online" playerCount="1/12" />
          <ServerCard game="astroneer" ip="an.condiment-castle.com" serverStatus="Offline" playerCount="0/8"/>
          <ServerCard game="valheim" ip="vh.condiment-castle.com" serverStatus="Offline" playerCount="0/8"/>
        </div>
      </section>
    </div>
  );
}