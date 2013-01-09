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
    }
};

// Start watching the acceleration
//
function startWatch() {

	alert('startWatch');
	// Update acceleration every 3 seconds
	var options = { frequency: 1000 };

	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
//
function stopWatch() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}


// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
	var element = document.getElementById("accelerometer");
	element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
						'Acceleration Y: ' + acceleration.y + '<br />' +
						'Acceleration Z: ' + acceleration.z + '<br />' +
						'Timestamp: '      + acceleration.timestamp + '<br />';
	var current = 	acceleration;
	var threshold = 1.5;
	
	deltaX = 0,
	deltaY = 0,
	deltaZ = 0;
	
	deltaX = Math.abs(current.x);
	deltaY = Math.abs(current.y);
	deltaZ = Math.abs(current.z);
	
	
	if ((deltaX > threshold) || (deltaZ > threshold) || (deltaY > threshold) ) 
	{
		alert("Shake Event !!!")
	}
}

// onError: Failed to get the acceleration
//
function onError() {
	alert('onError!');
}
