/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	
	initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },
	
	// Start watching the acceleration
	 startWatch: function() {
		var previousReading = {
			x: null,
			y: null,
			z: null
		}
		navigator.accelerometer.watchAcceleration(function (acceleration) {
		  var changes = {},
		  bound = 0.2;
		  if (previousReading.x !== null) {
			  changes.x = Math.abs(previousReading.x, acceleration.x);
			  changes.y = Math.abs(previousReading.y, acceleration.y);
			  changes.z = Math.abs(previousReading.z, acceleration.z);
		  }
		  alert(changes.x)
		  if (changes.x > bound && changes.y > bound && changes.z > bound) {
			this.shaken();
		  }
		  previousReading = {
			  x: reading.x,
			  y: reading.y,
			  z: reading.z
		  }
		  }, this.onError, { frequency: 1000 });
	},
	
	
	// Stop watching the acceleration
	//
	stopWatch: function () {
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	},
	
	
	// onSuccess: Get a snapshot of the current acceleration
	//
	onSuccess: function (acceleration) {
		var changes = {},
		bound = 0.2;
		
		if (previousReading.x !== null) 
		{
			changes.x = Math.abs(previousReading.x, acceleration.x);
			changes.y = Math.abs(previousReading.y, acceleration.y);
			changes.z = Math.abs(previousReading.z, acceleration.z);
		}
		  
	  	if (changes.x > bound && changes.y > bound && changes.z > bound) {
			shaken();
	  	}
		
		previousReading = {
		  x: reading.x,
		  y: reading.y,
		  z: reading.z
		}
	},
	
	shaken: function ()
	{
       alert("Shake");
    },
	
	
	// onError: Failed to get the acceleration
	//
	onError: function () {
		alert('onError!');
	}

};

