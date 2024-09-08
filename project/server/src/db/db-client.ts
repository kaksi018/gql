import User from '../entities/User';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'qwer1234',
  database: 'ghibli_graphql',
  synchronize: true, // entities에 명시된 데이터모델들을 DB에 자동으로 동기화합니다.
  entities: [User], // entities 폴더의 모든 데이터 모델
  subscribers: [],
  migrations: [],
});
