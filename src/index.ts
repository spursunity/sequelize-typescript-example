
import { City, Weather } from './db';

(async () => {
  try {
    console.log('==================================');

    const city = await City.findByPk(1);

    const weather = await Weather.findByPk(1);

    await city.$add('weather', weather);

    // console.log('entity :', entity);

    console.log('==================================');
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()
