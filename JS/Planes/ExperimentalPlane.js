const Plane = require('./Plane');

class ExperimentalPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalType, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.type = experimentalType;
        this.classificationLevel = classificationLevel;
    }

    getExperimentalType() {
        return this.experimentalType;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }
}

module.exports = ExperimentalPlane;