import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { characterProviders } from './character.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CharacterController],
    providers: [CharacterService, ...characterProviders],
})
export class CharacterModule {}
