import { Injectable } from '@nestjs/common';
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
    const payload = { mobileNumber, sub: 'Some unique identifier' }; // In real scenarios, sub should be a user's unique identifier

    return {
      token: this.jwtService.sign(payload),
      expiry: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour from now
    };
  }
}
