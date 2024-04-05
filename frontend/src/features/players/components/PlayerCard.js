import React from 'react';

import StatTag from './StatTag';

const PlayerCard = ({ player }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{player.displayName}</div>
        <p className="text-gray-700 text-base">
          Team: {player.team}
        </p>
        <p className="text-gray-700 text-base">
          Total Points: {player.totalPoints}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <StatTag label="Goals" value={player.totalPoints} />
        <StatTag label="Avg per Game" value={player.pointsPerGame} />
        <StatTag label="Yellow Cards" value={player.yellowCards} />
      </div>
    </div>
  );
};

export default PlayerCard;
