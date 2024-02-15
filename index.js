// Code your solution in this file!

function distanceFromHqInBlocks (pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet (pickupLocation) {
    const blocks = distanceFromHqInBlocks (pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet (start, destination) {
    const feetPerBlock = 264;
    return (Math.abs(start - destination)) * feetPerBlock;
}

function calculatesFarePrice(start,destination) {
    const feetPerBlock = 264;
    const distance = (Math.abs(start - destination)) * feetPerBlock;
    let fare = 0;

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return fare;
   }
   
