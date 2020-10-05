import { Module } from '@nestjs/common';
import { TasksModule } from './modules/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { getDataBaseConfiguration } from './database/config/baseconfiguration';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      ignoreEnvFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
