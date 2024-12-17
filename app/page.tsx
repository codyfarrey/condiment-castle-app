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
          <ServerCard game="minecraft" />
          <ServerCard game="astroneer" />
          <ServerCard game="valheim" />
        </div>
      </section>
    </div>
  );
}