import React from "react";
import Button from "./Button";
import Image from 'next/image';

export default function ServerCard({game, ip, serverStatus, playerCount}) {
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
                <p className="serverCardIP">IP: {ip}</p>
                <h3 className="serverCardStatus">{serverStatus} ({playerCount})</h3>
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
