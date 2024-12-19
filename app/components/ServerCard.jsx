import React from "react";
import Button from "./Button";
import Image from 'next/image';
import StatusLabel from "./StatusLabel";
import MemoryGraph from "./MemoryGraph";

export default function ServerCard({game, ip, isOnline, playerCount, maxPlayerCount, data }) {
    const startServerClicked = () => {
        console.log("Starting Server...");
    }

    const joinServerClicked = () => {
        console.log("Joining Server...");
    }

    const sortedData = Object.fromEntries(
        Object.entries(data).sort(([keyA], [keyB]) => new Date(keyA) - new Date(keyB))
    );

    function convertToCST(timestamp) {
        const utcDate = new Date(timestamp);

        const options = {
            timeZone: "America/Chicago",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };

        return utcDate.toLocaleTimeString("en-US", options);
    }

    const timestamps = Object.keys(sortedData).map(timestamp => convertToCST(timestamp));
    const values = Object.values(sortedData);

    return (
        <div className="serverCard">
            <div className="serverCardTop">
                <div className="serverCardContent">
                    <h2 className="serverCardTitle">{game}</h2>
                    <p className="serverCardIP">{ip}</p>
                    <StatusLabel isOnline={isOnline} playerCount={playerCount} maxPlayerCount={maxPlayerCount} />
                    <MemoryGraph timestamps={timestamps} values={values} />
                    <div className="serverCardButtons">
                        <Button label="Start Server" onClick={startServerClicked} />
                        <Button label="Join Server" onClick={joinServerClicked} />
                    </div>
                </div>

                <div className="serverImageContainer">
                    <Image className="serverCardImage" src={`/${game}.jpg`} alt="Server Image" width={300} height={300} />
                </div>

            </div>


        </div>
    );
}
