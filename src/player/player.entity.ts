import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import { Character } from '../character/character.entity';

@Table
export class Player extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  pseudo: string;

  @Unique
  @Column(DataType.STRING(100))
  email: string;

  @Column(DataType.STRING)
  password: string;

  @HasMany(() => Character)
  characters: Character[];
}
