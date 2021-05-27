function Electronics(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

function TV(name, power, displayResolution) {
    Electronics.call(this, name, power);
    this.displayResolution = displayResolution;
}

function Computer(name, power, CPU, videocard) {
    Electronics.call(this, name, power);
    this.CPU = CPU;
    this.videocard = videocard;
}

TV.prototype.mainInfo = function () {
    console.log(`Name: ${this.name}; consumes ${this.power} W and has ${this.displayResolution} resolution; plugged: ${this.isPlugged}`);
};

Computer.prototype.mainInfo = function () {
    console.log(`Name: ${this.name}; consumes ${this.power} W; has ${this.CPU} CPU and ${this.videocard} card; plugged: ${this.isPlugged}`);
};

function Room(name, freeSockets) {
    this.name = name;
    this.freeSockets = freeSockets;
    this.electronics = [];
    this.consumingPower = 0;
}

Room.prototype.mainInfo = function () {
    console.log(`Room: ${this.name}; has ${this.freeSockets} free sockets; consuming ${this.consumingPower} W`);
    console.log("Electronics here:");
    if ((this.electronics).length === 0) {
        console.log("Not found");
    } else {
        for (let i = 0; i < this.electronics.length; i++) {
            this.electronics[i].mainInfo();
            if (this.electronics[i].isPlugged) {
                this.consumingPower += this.electronics[i].power;
            }
        }
    }
};

Room.prototype.add = function (name) {
    this.electronics.push(name);
};

Room.prototype.plug = function (name) {
    for (let i = 0; i < this.electronics.length; i++) {
        if (this.electronics[i] === name) {
            this.electronics[i].isPlugged = true;
            this.freeSockets--;
            this.consumingPower += this.electronics[i].power;
            totalPower += this.consumingPower;
        }
    }
};

Room.prototype.has = function (name) {
    itemsamount = 0;

    for (let i = 0; i < this.electronics.length; i++) {
        if (this.electronics[i].name.includes(name)) {
            itemsamount++;
        }
    }

    return itemsamount;
};

let kitchen = new Room("Kitchen", 4);
let livingRoom = new Room("Living room", 3);
let bedroom = new Room("Bedroom", 2);
let flat = [];
let totalPower = 0;

let smallTV = new TV("small TV for kitchen", 500, "800x600");
let bigTV = new TV("very big TV", 700, "5000x3400");
let PC = new Computer("PC for study", 2050, "Intel 7,5 gHz", "2 x Nvidia 3080 16gb");
let notebook = new Computer("notebook", 450, "AMD", "Radeon");

flat.push(kitchen, livingRoom, bedroom);
kitchen.add(smallTV);
livingRoom.add(bigTV);
bedroom.add(PC);
bedroom.add(notebook);
console.log("Info about electronics in this flat:");
bedroom.plug(PC);
kitchen.plug(smallTV);
for (let i = 0; i < flat.length; i++) {
    flat[i].mainInfo();
}
console.log(`Total consuming power: ${totalPower}`);
console.log("Let's find TVs");
for (let i = 0; i < flat.length; i++) {
    if (flat[i].has("TV") !== 0) {
        console.log(`${flat[i].name} has ${flat[i].has("TV")}`);
    }
}