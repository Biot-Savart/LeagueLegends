import { Args, Query, Resolver } from '@nestjs/graphql';
import { PlayersService } from '../services/players.service';
import { PlayerObject } from '../types/player.types';

@Resolver()
export class PlayersResolver {
  constructor(private playersService: PlayersService) {}

  @Query(() => [PlayerObject]) // Define your PlayerType GraphQL type here
  async players(@Args('league') league: string) {
    return this.playersService.fetchPlayers(league);
  }
}
