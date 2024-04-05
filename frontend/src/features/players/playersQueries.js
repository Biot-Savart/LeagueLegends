// src/features/players/playersQueries.js
import { gql } from "@apollo/client";

export const GET_PLAYERS_QUERY = gql`
  query GetPlayers($league: String!) {
    players(league: $league) {
      id
      firstName
      secondName
      displayName
      team
      totalPoints
      pointsPerGame
      yellowCards
    }
  }
`;
