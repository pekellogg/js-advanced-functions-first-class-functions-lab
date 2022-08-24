const returnFirstTwoDrivers = function(driversArr) {
  return driversArr.slice(0, 2);
}

const returnLastTwoDrivers = function(driversArr) {
  return driversArr.slice(-2);
}

const selectDifferentDrivers = function(driversArr, driversToReturn) {
  return driversToReturn(driversArr);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integerArg = 1) {
  return function(fare) {
    return fare * integerArg;
  }
}

// const fareDoubler = function(fare) {
//   return createFareMultiplier(2)(fare);
// }
const fareDoubler = createFareMultiplier(2);

// const fareTripler = function(fare) {
//   return createFareMultiplier(3)(fare);
// }
const fareTripler = createFareMultiplier(3);