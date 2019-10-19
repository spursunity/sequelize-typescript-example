import { decOne, decTwo } from './decorators';
import { decThree, decFour, decFive } from './decForMethods';

(() => {
  try {
    console.log('=============================');
    // decOne();
    // decTwo();
    // decThree();
    // decFour();
    decFive();
    console.log('=============================');
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()