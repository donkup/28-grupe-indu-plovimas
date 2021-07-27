class Plates {
    constructor() {
        this.cleanPlateCount = 0;
        this.dirtyPlateCount = 0;

    }

    intro() {
        if (this.cleanPlateCount + this.dirtyPlateCount <= 0) {
            console.log(`Hi, this restoran has 0 plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restoran has ${this.cleanPlateCount + this.dirtyPlateCount} plates!`);
        }
    }
    buyPlates(platesCount) {
        this.cleanPlateCount = platesCount;
        console.log(`Restoran purchased ${platesCount} plates.`);

    }
    intro() {
        console.log(`Hi, this restoran has ${this.cleanPlateCount + this.dirtyPlateCount} plates!`);
    }


}

module.exports = Plates;