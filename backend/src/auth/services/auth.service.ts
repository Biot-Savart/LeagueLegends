import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(mobileNumber: string, password: string): Promise<boolean> {
    // Example validation: In a real application, you should validate against data in your database
    const isValidMobile =
      /^\d{10}$/.test(mobileNumber) && mobileNumber.startsWith('0');
    const isValidPassword = password.length >= 6 && /[A-Z]/.test(password);
    return isValidMobile && isValidPassword;
  }

  async generateToken(mobileNumber: string, password: string) {
    const isValidUser = await this.validateUser(mobileNumber, password);
    if (!isValidUser) {
      throw new Error('Invalid credentials');
    }
    const payload = { mobileNumber, password, sub: 'Some unique identifier' }; // In real scenarios, sub should be a user's unique identifier

    return {
      token: this.jwtService.sign(payload),
      expiry: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour from now
    };
  }

  async validateToken(authHeader: string): Promise<any> {
    if (!authHeader)
      throw new UnauthorizedException('Authorization header is missing.');

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : null;

    if (token) {
      try {
        const decoded = this.jwtService.verify(token); // Verifying the token's signature
        const isValidUser = await this.validateUser(
          decoded.mobileNumber,
          decoded.password,
        );
        // Optionally, add more checks here (e.g., against a user in a database)
        return isValidUser;
      } catch (error) {
        throw new UnauthorizedException('Invalid token.');
      }
    } else {
      throw new UnauthorizedException('Invalid authorization format.');
    }
  }
}
