import React from "react";
import StatusOrb from "./StatusOrb";

export default function StatusLabel({status, playerCount, maxPlayerCount}) {
  return (
    <div className = "statusLabel">
        <StatusOrb status={status} />
        <h3 className="serverCardStatus">{`${status} (${playerCount}/${maxPlayerCount})`}</h3>
    </div>
  );
}
