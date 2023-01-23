import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoivesModule } from './movies/moives.module';

@Module({
  imports: [MoivesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
