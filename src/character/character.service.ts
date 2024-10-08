import { Inject, Injectable } from '@nestjs/common';
import { Character } from './character.entity';
import { ICharacter } from './character.interface';

@Injectable()
export class CharacterService {
  constructor(
    @Inject('CHARACTER_REPOSITORY') private characterRepository: typeof Character,
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterRepository.findAll<Character>();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findByPk<Character>(id);
  }

  async findAllByPlayer(playerId: number): Promise<Character[]> {
    return this.characterRepository.findAll<Character>({ where: { playerId } });
  }

  async create(character: ICharacter): Promise<Character> {

    return this.characterRepository.create<Character>({
      ...character,
      playerId: character.playerId,
    } as any);
  }

  async update(id: number, character: ICharacter): Promise<[number]> {
    const findID = await this.characterRepository.findByPk<Character>(id);
    if (!findID) {
      throw new Error('Character not found');
    } else {
      return this.characterRepository.update(
        { ...character },
        { where: { id: findID.id } },
      );
    }
  }

  async remove(id: number): Promise<number> {
    return this.characterRepository.destroy({ where: { id } });
  }
}
