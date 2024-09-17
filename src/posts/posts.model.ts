import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType, ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { User } from '../users/users.model';

interface PostCreateAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreateAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Title', description: 'Posts title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Content', description: 'Posts content' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;


  @ApiProperty({ example: 'Content', description: 'Posts content' })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(()=> User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User
}