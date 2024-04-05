import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const authorizationHeader = request.headers.authorization; // Accessing the Authorization header

    // Now, you can use the authorizationHeader value for your auth logic, for example:
    const validUser = await this.authService.validateToken(authorizationHeader);

    if (!authorizationHeader || !validUser) {
      return false; // or throw an UnauthorizedException
    }
    // Implement more authentication/authorization logic here
    // For simplicity, let's assume we allow all requests
    return true;
  }
}
