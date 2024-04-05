import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlayersModule } from './players/players.module';
dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // or specify a path to a schema file
      context: ({ req, res }) => ({ req, res }), // Make sure req and res are passed to context
      // any other configurations...
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET, // Ensure you have a secure secret for production
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
    PlayersModule,
  ],
  providers: [AppService, JwtService],
})
export class AppModule {}
