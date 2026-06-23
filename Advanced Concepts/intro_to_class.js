

class Animal {

    eyes = 2

    constructor(legs, name)
    {
        this.legs = legs
        this.name = name
    }

    sound()
    {
        console.log(`${this.name} makes this sound: woof woof`)
    }
}


dog = new Animal(4, "Billy")
eagle = new Animal(2, "Falcon")

// console.log(dog.name, dog.legs, dog.eyes)
console.log(dog)
console.log(eagle, eagle.eyes)


dog.sound()