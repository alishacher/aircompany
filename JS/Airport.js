const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const ClassificationLevel = require('/models/ClassificationLevel');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        let passengerPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof PassengerPlane) {
                passengerPlanes.push(plane);
            }
        });
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getExperimentalPlanes() {
            let experimentalPlanes  = [];
            this.planes.forEach(plane => {
                if (plane instanceof ExperimentalPlane) {
                    experimentalPlanes.push(plane);
                }
            });
            return experimentalPlanes;
        }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(plane => {
            if (plane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()){
                planeWithMaxCapacity = plane;
            }
        });
        return planeWithMaxCapacity;
    }

    getMilitaryTransportPlanes() {
        let militaryTransportPlanes = [];
        this.getMilitaryPlanes().forEach(plane => {
            if (plane.getMilitaryType() == MilitaryType.TRANSPORT){
                militaryTransportPlanes.push(plane);
            }
        });
        return militaryTransportPlanes;
    }

    getBomberMilitaryPlanes() {
        let militaryBomberPlanes = [];
        this.getMilitaryPlanes().forEach(plane => {
            if (plane.getMilitaryType() == MilitaryType.BOMBER){
                militaryBomberPlanes.push(plane);
            }
        });
        return militaryBomberPlanes;
    }

    getExperimentalUnclassifiedPlanes() {
        let experimentalUnclassifiedPlanes = [];
        this.getExperimentalPlanes().forEach(plane => {
            if (plane.getClassificationLevel() == ClassificationLevel.UNCLASSIFIED){
                experimentalUnclassifiedPlanes.push(plane);
            }
        });
        return experimentalUnclassifiedPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    getAllPlanes() {
        return this.planes;
    }

    static printAllPlanes(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
