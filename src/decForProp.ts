export function decSix() {
  function format(target: Object, propertyKey: string){
     
    let _val = target[propertyKey];   // получаем значение свойства
 
    // геттер
    var getter = function () {
        return "Mr./Ms." + _val;
    };
  
    // сеттер
    var setter = function (newVal) {
        _val = newVal;
    };
  
    // удаляем свойство
    delete target[propertyKey];
  
    // И создаем новое свойство с геттером и сеттером
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
  }
  
  class User {
    @format
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
  }

  let tom = new User("Tom");
  tom.print();
  tom.name = "Tommy";
  tom.print();
}

export function decSeven() {
  function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
 
    descriptor.set = function(value: string) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
 
        oldSet.call(this, value);
    }
  }

  class User {
  
      private _name: string;
      constructor(name: string){
          this.name = name;
      }
      
      public get name(): string {
          return this._name;
      }
      @validator
      public set name(n: string) {
          this._name = n;
      }
  }

  let tom = new User("Tom");
  console.log(tom.name);
  tom.name= "Adminov";
  console.log(tom.name);
  tom.name= "admin";
  console.log(tom.name);
}