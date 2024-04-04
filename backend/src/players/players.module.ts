import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlayersResolver } from './resolvers/players.resolver';
import { PlayersService } from './services/players.service';

@Module({
  imports: [HttpModule],
  providers: [PlayersService, PlayersResolver],
})
export class PlayersModule {}
