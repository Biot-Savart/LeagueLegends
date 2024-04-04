import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  providers: [JwtService, AuthService, AuthResolver],
})
export class AuthModule {}
