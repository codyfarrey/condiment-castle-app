import React from "react";
import Button from "./Button";
import Image from 'next/image';
import StatusLabel from "./StatusLabel";

export default function ServerCard({game, ip, isOnline, playerCount, maxPlayerCount}) {
    const startServerClicked = () => {
        console.log("Starting Server...");
    }

    const joinServerClicked = () => {
        console.log("Joining Server...");
    }

  return (
    <div className = "serverCard">
        <div className = "serverCardTop">
            <div className = "serverCardContent">
                <h2 className="serverCardTitle">{game}</h2>
                <p className="serverCardIP">{ip}</p>
                <StatusLabel isOnline={isOnline} playerCount={playerCount} maxPlayerCount={maxPlayerCount} />
                <div className = "serverCardButtons">
                    <Button label="Start Server" onClick={startServerClicked} />
                    <Button label="Join Server" onClick={joinServerClicked} />
                </div>
            </div>
            <Image className="serverCardImage" src="/server.png" alt="Server Image" width={275} height={275} />
            
        </div>

        
    </div>
  );
}
