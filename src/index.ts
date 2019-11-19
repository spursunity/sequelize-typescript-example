
import { City, Weather, CityWeather } from './db';

(async () => {
  try {
    console.log('==================================');

    // const city = await City.findByPk(2);

    // const weather = await Weather.findByPk(1);

    // await city.$add('weather', [2, 3]);

    // console.log('entity :', entity);

    const cities = await City.findAll({
      where: { id: 2 },
      include: [ Weather ],
    });

    const weather = cities[0].get({ plain: true });

    console.log('cities :', weather);

    console.log('==================================');
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()
