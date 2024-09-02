import {DataSource} from 'typeorm';



export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "qwer1234",
  database: "ghibli_graphql",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})