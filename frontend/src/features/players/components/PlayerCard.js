import {
  GlobeAltIcon,
  ShieldExclamationIcon,
  StarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import StatTag from "./StatTag";

const PlayerCard = ({ player }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4 flex items-center">
          <UserCircleIcon className="h-7 w-7 mr-2" />
          {player.displayName}
        </div>
        <p className="text-base flex items-center">
          <GlobeAltIcon className="h-5 w-5 mr-2 font-bold" /> Team:{" "}
          {player.team}
        </p>
        <p className="text-base flex items-center">
          <StarIcon className="h-5 w-5 mr-2" /> Total Points:{" "}
          {player.totalPoints}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2 flex flex-wrap items-center">
        <StatTag
          icon={<StarIcon className="h-4 w-4 mr-1" />}
          label="Goals"
          value={player.goals}
        />
        <StatTag
          icon={<StarIcon className="h-4 w-4 mr-1" />}
          label="Avg per Game"
          value={player.pointsPerGame}
        />
        <StatTag
          icon={<ShieldExclamationIcon className="h-4 w-4 mr-1" />}
          label="Yellow Cards"
          value={player.yellowCards}
        />
      </div>
    </div>
  );
};

export default PlayerCard;
