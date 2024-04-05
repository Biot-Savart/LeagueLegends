import { gql, useQuery } from '@apollo/client';

// Define your GraphQL query
const GET_PLAYERS_QUERY = gql`
  query GetPlayers ($league: String!){
    players(league: $league) {
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

const PlayersPage = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS_QUERY, { variables: { league: 'EPL' }} );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {data.players.map(({ id, firstName, lastName, team }) => (
          <li key={id}>
            {firstName} {lastName} - {team}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersPage;
