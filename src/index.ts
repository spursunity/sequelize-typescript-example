import { decOne, decTwo } from './decorators';

(() => {
  try {
    console.log('=============================');
    // decOne();
    decTwo();
    console.log('=============================');
  } catch (error) {
    console.log('error.message :', error.message);
  }
})()