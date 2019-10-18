export function decOne() {
  function sealed(constructor: Function) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  /**
   * Декоратор sealed с помощью функции Object.seal запрещает расширение прототипа класса User.
   * мы, к примеру, не сможем добавить в класс User новое свойство следующим образом:
   * Object.defineProperty(User, 'age', {
   *      value: 17
   *   });
   */
  
  @sealed
  class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
  }

  const tom = new User('Tom');

  tom.print();
}

export function decTwo() {
  function logger<TFunction extends Function>(target: TFunction): TFunction{
 
    let newConstructor: Function = function(name:string){
        console.log("Creating new instance");
        this.name = `My name is ${name}, `;
        this.age = 23;
        this.print = function():void{
            console.log(this.name, this.age);
        }
    }

    return <TFunction>newConstructor;
  }
 
  @logger
  class User {
      name: string;
      constructor(name: string){
          this.name = name;
      }
      print():void{
          console.log(this.name);
      }
  }
  let tom = new User("Tom");
  let bob = new User("Bob");
  tom.print();
  bob.print();
}
