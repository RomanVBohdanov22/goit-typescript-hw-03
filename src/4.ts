class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(
        `Person ${person.getKey().getSignature()} entered the house.`
      );
    } else {
      console.log("Can't enter, the door is closed.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log(
        `The door is opened. Welcome home, ${person.getKey().getSignature()}!`
      );
    } else {
      console.log("Wrong key, the door remains closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
