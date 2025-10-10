import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { SEQUELIZE } from 'src/constants';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres', // Explicitly set here
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT
          ? Number(process.env.DATABASE_PORT)
          : 5432,
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        database: process.env.DATABASE_NAME || 'portfolio',
        dialectOptions: {
          ssl: process.env.DATABASE_USE_SSL === 'true',
        },
        models: [__dirname + '/../**/*.model.ts'],
      });

      await sequelize.sync();
      return sequelize;
    },
  },
];
