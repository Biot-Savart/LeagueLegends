import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { AuthTokenObject } from '../types/auth.types';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthTokenObject)
  async login(
    @Args('mobileNumber') mobileNumber: string,
    @Args('password') password: string,
  ): Promise<AuthTokenObject> {
    console.log('Logging in...');
    // Validate input and call AuthService to generate a token
    return this.authService.generateToken(mobileNumber, password);
  }
}
