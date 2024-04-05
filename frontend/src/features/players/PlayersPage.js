// src/features/players/PlayersPage.js
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Button from "../../components/UI/Button"; // Reusable button component
import Dropdown from "../../components/UI/Dropdown"; // Reusable dropdown component
import PlayerCard from "./components/PlayerCard"; // Assume this is your player card component
import { GET_PLAYERS_QUERY } from "./playersQueries";

const PlayersPage = () => {
  const [league, setLeague] = useState("EPL");
  const [sortedPlayers, setSortedPlayers] = useState([]);
  const [teamFilter, setTeamFilter] = useState("");
  const { loading, error, data } = useQuery(GET_PLAYERS_QUERY, {
    variables: { league },
  });

  useEffect(() => {
    if (data) {
      let filteredPlayers = data.players;

      if (teamFilter) {
        filteredPlayers = filteredPlayers.filter(
          (player) => player.team === teamFilter
        );
      }
      setSortedPlayers([...filteredPlayers]);
    }
  }, [data, teamFilter]);

  // useEffect hook to reset teamFilter when league changes
  useEffect(() => {
    setTeamFilter(""); // Reset teamFilter whenever league changes
  }, [league]);

  const handleSort = () => {
    const playersCopy = [...sortedPlayers];
    playersCopy.sort((a, b) => b.totalPoints - a.totalPoints);
    setSortedPlayers(playersCopy);
  };

  const handleShuffle = () => {
    const playersCopy = [...sortedPlayers];
    for (let i = playersCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playersCopy[i], playersCopy[j]] = [playersCopy[j], playersCopy[i]]; // Swap elements
    }
    setSortedPlayers(playersCopy);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div className="p-4">
        <div className="mb-4 flex flex-row flex-wrap items-center justify-between gap-4">
          <div className="flex-grow">
            <Dropdown
              value={league}
              onChange={setLeague}
              options={["English Premier League", "Champions League"]}
              className="w-full"
            />
          </div>
          <div className="flex-grow">
            <Dropdown
              value={teamFilter}
              onChange={setTeamFilter}
              options={[...new Set(data.players.map((player) => player.team))]}
              placeholder="Filter by team"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={handleSort}>Sort by Points</Button>
          <Button onClick={handleShuffle}>Shuffle Players</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
