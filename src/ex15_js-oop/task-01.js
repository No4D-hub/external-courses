class Sweets {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}

class Chocolates extends Sweets {
    constructor(name, weight, chocolateType, filling) {
        super(name, weight);
        this.chocolateType = chocolateType;
        this.filling = filling;
    }
    getChocolateType() {
        return this.chocolateType;
    }
    getFilling() {
        return this.filling;
    }
    setChocolateType(chocolateType) {
        this.chocolateType = chocolateType;
    }
    setFilling(filling) {
        this.filling = filling;
    }
    getFullInfo() {
        console.log(`name: ${this.name}, weight, g: ${this.weight}, chocolate: ${this.chocolateType}, filling: ${this.filling}`);
    }
}

class Lollipop extends Sweets {
    constructor(name, weight, caramelTaste, isSour) {
        super(name, weight);
        this.caramelTaste = caramelTaste;
        this.isSour = isSour;
    }
    getCaramelTaste() {
        return this.caramelTaste;
    }
    getIsSour() {
        return this.isSour;
    }
    setCaramelTaste(caramelTaste) {
        this.caramelTaste = caramelTaste;
    }
    setIsSour(isSour) {
        this.isSour = isSour;
    }
    getFullInfo() {
        console.log(`name: ${this.name}, weight: ${this.weight}, caramel taste: ${this.caramelTaste}, sour: ${this.isSour}`);
    }
}

function createSweetGift() {
    let giftArray = [];
    let giftWeight = 0;
    for (let i = 0; i < sweets.length; i++) {
        let sweetsAmount = Math.random() * 10;
        for (let j = 0; j < sweetsAmount; j++) {
            giftArray.push(sweets[i]);
            weight = sweets[i].getWeight();
            giftWeight+=weight;
        }
    }
    console.log(`Sweet gift is ready to eat! Gift weight: ${giftWeight/1000} kg`);

    return {items: giftArray, weight: giftWeight};
} 

function searchInGift(array) {
    for (let i = 0; i < sweets.length; i++) {
        sweetsAmount = 0;
        for (let j = 0; j < array.length; j++) {
            if (sweets[i].getName() === array[j].getName()) {
                ++sweetsAmount;
            }
        }
        console.log(`${sweets[i].getName()}: ${sweetsAmount} items`);
    } 
}

function comparator(firstElement, secondElement) {
		if (firstElement.getWeight() > secondElement.getWeight()) {
			return 1;
		} else if (firstElement.getWeight() === secondElement.getWeight()) {
			return 0;
		}
        
        return -1;
}

let sweets = [];
let bounty = new Chocolates("Bounty", 25, "milk", "coconut");
let snikers = new Chocolates("Snikers", 30, "milk", "almonds and nougat");
let chocoBar = new Chocolates("Lindt", 100, "dark", "chili pepper");
let barbaris = new Lollipop("Barbaris", 5, "Barbaris", false);
let skittles = new Lollipop("Skittles", 75, "mix", true);

sweets.push(bounty, snikers, chocoBar, barbaris, skittles);
console.log("Making a sweet gift...");
myGift = createSweetGift();
myGiftSweets = myGift.items;
myGiftWeight = myGift.weight;
console.log("Let\'s find matches amount in gift");
searchInGift(myGiftSweets);
console.log("Full info about the gift (sorted by weight):");
myGiftSweets.sort(comparator);
for (let i = 0; i < myGiftSweets.length; i++) {
    myGiftSweets[i].getFullInfo();
}