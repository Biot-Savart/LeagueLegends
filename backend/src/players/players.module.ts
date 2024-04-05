import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppAuthGuard } from '../auth/guards/auth.guard';
import { AuthService } from '../auth/services/auth.service';
import { PlayersResolver } from './resolvers/players.resolver';
import { PlayersService } from './services/players.service';

@Module({
  imports: [HttpModule],
  providers: [PlayersService, PlayersResolver, AuthService, AppAuthGuard],
})
export class PlayersModule {}
