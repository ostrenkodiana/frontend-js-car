function addPassengers() {
	if (this.passengers.length < this.seats) {
		this.passengers.push('true');
	}
}

function removePassengers() {
	if (this.passengers.length >= 1) {
		this.passengers.pop();
	}
	if (this.passengers < 1) {
		this.passengers.pop();
		this.speed = 0;
	}
}

function setSpeed(newSpeed) {
	if (this.passengers[0] === undefined) {
		return;
	}
	this.speed = this.defaultSpeed;
	if (newSpeed >= this.maxSpeed) {
		this.speed = this.maxSpeed;
	}
	if (newSpeed < this.maxSpeed) {
		this.speed = newSpeed;
	}
}

export default {
	color: 'white',
	dours: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put: addPassengers,
	land: removePassengers,
	drive: setSpeed,
};
