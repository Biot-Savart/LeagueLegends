import { Module } from '@nestjs/common';
import { AppAuthGuard } from './guards/auth.guard';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  providers: [AuthService, AuthResolver, AppAuthGuard],
  exports: [AppAuthGuard, AuthService],
})
export class AuthModule {}
