import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { PlayersResolver } from './resolvers/players.resolver';
import { PlayersService } from './services/players.service';

@Module({
  imports: [HttpModule],
  providers: [PlayersService, PlayersResolver, AuthService],
})
export class PlayersModule {}
