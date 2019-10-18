import { sequelize } from './db';

(async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()