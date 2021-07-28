class Plates {
    constructor() {
        this.cleanPlateCount = 0;
        this.dirtyPlateCount = 0;

    }

    intro() {
        if (this.cleanPlateCount + this.dirtyPlateCount <= 0) {
            console.log(`Hi, this restaurant has 0 plates! Please, buy some.`);
        } else {
            console.log(`Hi, this restaurant has ${this.cleanPlateCount + this.dirtyPlateCount} plates!`);
        }
    }
    buyPlates(platesCount) {
        this.cleanPlateCount += platesCount;
        console.log(`Restaurant purchased ${platesCount} plates.`);

    }
    usePlates(usedPlates) {
        if (usedPlates <= this.cleanPlateCount) {
            this.cleanPlateCount -= usedPlates;
            this.dirtyPlateCount += usedPlates;
            console.log(`Restaurant has made some dishes for ${usedPlates} plates.`);
        } else {
            console.log(`Restaurant has ${this.cleanPlateCount} plates only, it's not enough. No action is taken.`);
        }
    }
    cleanPlatesCount() {
        if (this.cleanPlateCount === 0) {
            console.log(`Restaurant is left with no clean plates.`);
        } else {
            console.log(`Restaurant has ${this.cleanPlateCount} clean plates.`);
        }

    }
    cleanUp(platesCount) {
        if (platesCount > this.dirtyPlateCount) {
            console.log(`Restaurant does not have so many dirty plates.`);
            return;
        }

        this.dirtyPlateCount -= platesCount;
        this.cleanPlateCount += platesCount;

        if (this.dirtyPlateCount === 0) {
            console.log(`All plates in the restaurant is clean!`);
        }

    }

}

module.exports = Plates;