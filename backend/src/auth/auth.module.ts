import { Module } from '@nestjs/common';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
