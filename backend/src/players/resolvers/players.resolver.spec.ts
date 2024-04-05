import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { firstValueFrom } from 'rxjs';
import { AppModule } from '../../app.module';
import { AuthModule } from '../../auth/auth.module';
import { PlayersService } from '../services/players.service';
import { PlayersResolver } from './players.resolver';

// Mocking PlayersService
const mockPlayersService = {
  fetchPlayers: jest.fn(),
};

describe('PlayersResolver', () => {
  let resolver: PlayersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, AppModule],
      providers: [
        PlayersResolver,
        { provide: PlayersService, useValue: mockPlayersService },
        JwtService,
      ],
    }).compile();

    resolver = module.get<PlayersResolver>(PlayersResolver);
    mockPlayersService.fetchPlayers.mockClear();
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('players', () => {
    it('should return an array of players for a given league', async () => {
      const league = 'English Premier League';

      const observablePromise = resolver.players(league); // This is a Promise<Observable<PlayerObject>>
      const observable = await observablePromise; // Now we have the Observable
      const result = await firstValueFrom(observable); // Convert the Observable to a Promise for testing

      expect(result).toBeDefined();
    });

    it('should handle no players found for a league', async () => {
      const league = 'Unknown League';
      mockPlayersService.fetchPlayers.mockResolvedValue([]);

      const result = await resolver.players(league);

      expect(result).toEqual({});
    });

    // Add more test cases as needed, such as error handling, invalid arguments, etc.
  });
});
