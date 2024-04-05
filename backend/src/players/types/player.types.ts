import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PlayerObject {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  secondName: string;

  @Field()
  displayName: string;

  @Field()
  team: string;

  @Field()
  totalPoints: number;

  @Field()
  pointsPerGame: number;

  @Field()
  yellowCards: number;
}

export interface EPLPlayer {
  id: string;
  web_name: string;
  first_name: string;
  second_name: string;
  team: number; // Assuming team is referenced by an ID
  total_points: number;
  points_per_game: string; // Assuming points per game could be a decimal value represented as a string
  yellow_cards: number;
}

export interface EPLTeam {
  id: number;
  name: string;
}

export interface UCLPlayer {
  id: string;
  pDName: string; // Presumably, the player's display name
  pFName: string; // Full name which includes first and second name
  tName: string; // Team name
  totPts: number; // Total points
  avgPlayerPts: number; // Points per game
  yC: number; // Yellow cards
}
