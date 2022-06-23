import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ItemModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
