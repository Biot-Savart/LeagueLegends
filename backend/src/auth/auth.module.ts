import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/auth.guard';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  providers: [AuthService, AuthResolver, JwtAuthGuard],
})
export class AuthModule {}
