import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoginEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userID: string;

  @Column()
  userPW: string;
}
