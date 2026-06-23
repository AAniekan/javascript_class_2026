class Animal { //Parent Class, Base Class, Super Class
  constructor(name, legs, color) {
    this.name = name;
    this.legs = legs;
    this.color = color;
  }

  sound() {
    console.log(`${this.name} makes this sound: woof woof`);
  }
}


class Dog extends Animal
{
    constructor(name, legs, color, breed)
    {
        super(name, legs, color)
        this.breed = breed
    }

}

class Cat extends Animal
{


    sound()
    {
        console.log(`${this.name} makes this sound: meow meow`);
    }
}



dog_1 = new Dog('Billy', 4, 'Brown', 'German Sheperd')

console.log(dog_1)

// dog_1.sound()


cat_1 = new Cat('Bloomy', 4, 'Black')

console.log(cat_1.name)

// cat_1.sound()