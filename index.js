
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}
//function returnFirstTwoDrivers(drivers) {
    //return [drivers[0], drivers[1]]; ** This was incorrect but  I learned from my mistakes
//}

const returnLastTwoDrivers = function(drivers) {
    return [ drivers[2], drivers[3]];
}
//function returnLastTwoDrivers(drivers) {
  //  return [ drivers[2], drivers[3]]; ** this is the disaster that I created at first,
//}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(param1) {
    return function (fare) {
        return (fare * param1)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);


}
