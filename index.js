// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function  returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {
        return fare * multiplier; 
    };
}
function fareDoubler(fares){
    return fares * 2
}
function fareTripler(fares){
    return fares * 3
}
function selectDifferentDrivers(drivers, callback) {
    return callback(drivers); 
}