import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../services/auth.service';
import { AuthTokenObject } from '../types/auth.types';
import { AuthResolver } from './auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;
  let authService: jest.Mocked<AuthService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          // Using `jest.mocked` to wrap the mock object if you're using a recent version of Jest
          useValue: {
            generateToken: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
    authService = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(authService).toBeDefined();
  });

  describe('login', () => {
    it('should return a token object on successful login', async () => {
      const mobileNumber = '0123456789';
      const password = 'Password1';
      const expectedToken: AuthTokenObject = {
        token: 'mockToken',
        expiry: new Date(),
      };

      // Now TypeScript understands that `generateToken` is a mock function
      authService.generateToken.mockResolvedValue(expectedToken);

      const result = await resolver.login(mobileNumber, password);

      expect(result).toEqual(expectedToken);
      expect(authService.generateToken).toHaveBeenCalledWith(
        mobileNumber,
        password,
      );
    });

    it('should throw an error if credentials are invalid', async () => {
      const mobileNumber = '0123456789';
      const password = 'wrong';
      authService.generateToken.mockRejectedValue(
        new Error('Invalid credentials'),
      );

      await expect(resolver.login(mobileNumber, password)).rejects.toThrow(
        'Invalid credentials',
      );
    });
  });
});
