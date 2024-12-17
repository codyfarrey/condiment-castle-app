import React from "react";
import StatusOrb from "./StatusOrb";

export default function StatusLabel({isOnline, playerCount, maxPlayerCount}) {
  return (
    <div className = "statusLabel">
        <StatusOrb isOnline={isOnline} />
        <h3 className="serverCardStatus">{isOnline ? `Online (${playerCount}/${maxPlayerCount})` : `Offline (0/${maxPlayerCount})`}</h3>
    </div>
  );
}
