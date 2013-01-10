/*
 *
 * Find more about this plugin by visiting
 * http://alxgbsn.co.uk/
 *
 * Copyright (c) 2010-2012 Alex Gibson
 * Released under MIT license
 *
 */

(function (window, document) {

	function Shake() {

		//feature detect
		//this.hasDeviceMotion = 'ondevicemotion' in window;

		//default velocity threshold for shake to register
		this.threshold = 10;

		//use date to prevent multiple shakes firing	
		this.lastTime = new Date();

		//accelerometer values
		this.lastX = null;
		this.lastY = null;
		this.lastZ = null;

		//create custom event
		this.event = document.createEvent('Event');
		this.event.initEvent('shake', true, true);
	}

	//reset timer values
	Shake.prototype.reset = function () {

		this.lastTime = new Date();
		this.lastX = null;
		this.lastY = null;
		this.lastZ = null;
	};

	//start listening for devicemotion
	Shake.prototype.start = function () {

		this.reset();
		
		//if (this.hasDeviceMotion) { window.addEventListener('devicemotion', this, false); }
		this.watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 1000 });
	};

	//stop listening for devicemotion
	Shake.prototype.stop = function () {

		//if (this.hasDeviceMotion) { window.removeEventListener('devicemotion', this, false); }
		if(this.watchID)
		{
			navigator.accelerometer.clearWatch(this.watchID);
			this.watchID = null;
		}
		this.reset();
	};

	//calculates if shake did occur
	Shake.prototype.onSuccess = function (acceleration) {

		var current = acceleration,
			currentTime,
			timeDifference,
			deltaX = 0,
			deltaY = 0,
			deltaZ = 0;			
			

		if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {

			this.lastX = current.x;
			this.lastY = current.y;
			this.lastZ = current.z;
			return;
		}

		deltaX = Math.abs(this.lastX - current.x);
		deltaY = Math.abs(this.lastY - current.y);
		deltaZ = Math.abs(this.lastZ - current.z);
		
		document.getElementById("reading").innerHTML = deltaX + "<br />" + deltaY + "<br />" + deltaZ + "<br />" + this.threshold;

		if (((deltaX > this.threshold) && (deltaY > this.threshold)) || ((deltaX > this.threshold) && (deltaZ > this.threshold)) || ((deltaY > this.threshold) && (deltaZ > this.threshold))) {

			//calculate time in milliseconds since last shake registered
			currentTime = new Date();
			timeDifference = currentTime.getTime() - this.lastTime.getTime();

			if (timeDifference > 1000) {
				window.dispatchEvent(this.event);
				this.lastTime = new Date();
			}
		}
	};

	//event handler
	Shake.prototype.handleEvent = function (e) {

		if (typeof (this[e.type]) === 'function') {
			return this[e.type](e);
		}
	};

	//create a new instance of shake.js.
	var myShakeEvent = new Shake();
	myShakeEvent.start();

}(window, document));