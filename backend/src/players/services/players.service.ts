import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import {
  EPLPlayer,
  EPLTeam,
  PlayerObject,
  UCLPlayer,
} from '../types/player.types';

@Injectable()
export class PlayersService {
  constructor(private httpService: HttpService) {}

  fetchPlayers(league: string): Observable<PlayerObject[]> {
    switch (league) {
      case 'English Premier League':
        return this.getPremierLeaguePlayers();
      case 'Champions League':
        return this.getChampionsLeaguePlayers();
      default:
        return new Observable<[]>();
    }
  }

  private getPremierLeaguePlayers(): Observable<PlayerObject[]> {
    const apiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';
    return this.httpService.get(apiUrl).pipe(
      map((response) => {
        const players = response.data.elements;
        return players.map((player: EPLPlayer) => {
          return {
            id: player.id,
            displayName: player.web_name,
            firstName: player.first_name,
            secondName: player.second_name,
            team:
              response.data.teams.find(
                (team: EPLTeam) => team.id === player.team,
              )?.name || 'Unknown',
            totalPoints: player.total_points,
            pointsPerGame: player.points_per_game,
            yellowCards: player.yellow_cards,
          };
        });
      }),
    );
  }

  private getChampionsLeaguePlayers(): Observable<PlayerObject[]> {
    const apiUrl =
      'https://gaming.uefa.com/en/uclfantasy/services/feeds/players/players_60_en_7.json';
    return this.httpService.get(apiUrl).pipe(
      map((response) => {
        const data = response.data.data.value.playerList;
        return data.map((player: UCLPlayer) => {
          return {
            id: player.id,
            displayName: player.pDName,
            firstName: player.pFName.split(' ')[0],
            secondName: player.pFName.split(' ')[1] ?? '',
            team: player.tName,
            totalPoints: player.totPts,
            pointsPerGame: player.avgPlayerPts,
            yellowCards: player.yC,
          };
        });
      }),
    );
  }
}
