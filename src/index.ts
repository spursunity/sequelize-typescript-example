// import { decOne, decTwo } from './decorators';
// import { decThree, decFour, decFive } from './decForMethods';
// import { decSix, decSeven } from './decForProp';
import { decEight } from './decFactory';

(() => {
  try {
    console.log('=============================');
    // decOne();
    // decTwo();
    // decThree();
    // decFour();
    // decFive();
    // decSix();
    // decSeven();
    decEight();
    console.log('=============================');
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()