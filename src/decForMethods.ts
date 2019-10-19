function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor){ 
  console.log("Method is deprecated");
}

/**
 * Декоратор принимает следующие параметры:

  Функция конструктора класса для статического метода, либо прототип класса для обычного метода.

  Название метода.

  Объект интерфейса PropertyDescriptor:
    
  interface PropertyDescriptor{
      configurable?: boolean;
      enumerable?: boolean;
      value?: any;
      writable?: boolean;
      get? (): any;
      set? (v: any): void;
  }
 */

export function decThree() {
  function readonly (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
  };
 
  class User {
 
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    @readonly
    print():void{
        console.log(this.name);
    }
  }
  let tom = new User("Tom");
  tom.print = function(){console.log("print has been changed");} // не сработает, ошибка
  tom.print();  // Tom
}

export function decFour() {
  function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`)
        return returnValue;
    }
  }
  
  class Calculator{
      @log
      add(x: number, y: number): number{
          return x + y;
      }
  }
  
  let calc = new Calculator();
  let z = calc.add(4, 5);
  z = calc.add(6, 7);
}

export function decFive() {
  function logParameter(target: any, key : string, index : number) {
    var metadataKey = `__log_${key}_parameters`;
     
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
      }
      else {
        target[metadataKey] = [index];
    }
  }
  function logMethod(target, key, descriptor) {
 
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
 
        var metadataKey = `__log_${key}_parameters`;
        var indices = target[metadataKey];
 
        if (Array.isArray(indices)) { 
            for (var i = 0; i < args.length; i++) { 
         
                if (indices.indexOf(i) !== -1) { 
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    }
    return descriptor;
  }
  
  class User {
  
      private name: string;
      constructor(name: string){
          this.name = name;
      }
    @logMethod
      setName(@logParameter name: string){
          this.name = name;
      }
      print():void{
          console.log(this.name);
      }
  }

  let tom = new User("Tom");
  tom.setName("Bob");
  tom.setName("Sam");
}