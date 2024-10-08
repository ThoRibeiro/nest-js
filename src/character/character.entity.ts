import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Player } from '../player/player.entity';

@Table
export class Character extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.STRING(50))
  name: string;

  @Column(DataType.DECIMAL(5, 2))
  health: number;

  @Column(DataType.INTEGER)
  strength: number;

  @ForeignKey(() => Player)
  PlayerId: number;
  
  @BelongsTo(() => Player)
  player: Player;
}
