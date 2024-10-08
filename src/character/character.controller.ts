import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
  import { CharacterService } from './character.service';
  import { Character } from './character.entity';
  import { ICharacter } from './character.interface';
  
  @Controller('character')
  export class CharacterController {
    constructor(private characterService: CharacterService) {}
  
    @Get()
    findAll(): Promise<Character[]> {
      return this.characterService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Character> {
      return this.characterService.findOne(id);
    }
  
    @Get('player/:playerId')
    findAllByPlayer(@Param('playerId') playerId: number): Promise<Character[]> {
      return this.characterService.findAllByPlayer(playerId);
    }
  
    @Post()
    async create(@Body() character: ICharacter): Promise<Character> {
      return this.characterService.create(character);
    }
  
    @Put(':id')
    update(
      @Param('id') id: number,
      @Body() character: ICharacter,
    ): Promise<[number]> {
      return this.characterService.update(id, character);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<number> {
      return this.characterService.remove(id);
    }
  }
  