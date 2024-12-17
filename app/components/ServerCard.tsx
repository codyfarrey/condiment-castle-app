import React from "react";
import Button from "./Button";
import Image from 'next/image';

export default function ServerCard({game}) {
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
                <p className="serverCardIP">IP: mc.condiment-castle.com</p>
                <h3 className="serverCardStatus">Online (2/12)</h3>
                <div className = "serverCardButtons">
                    <Button label="Start Server" onClick={startServerClicked} />
                    <Button label="Join Server" onClick={joinServerClicked} />
                </div>
            </div>
            <Image className="serverCardImage" src="/server.png" alt="Condiment Castle Logo" width={275} height={275} />
            
        </div>

        
    </div>
  );
}
