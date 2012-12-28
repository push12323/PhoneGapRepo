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
	
	
	
	startWatch: function(id) {
        // Update acceleration every 3 seconds
		var options = { frequency: 3000 };
	
		watchID = navigator.accelerometer.watchAcceleration(this.onSuccess, this.onError, options);
		var prevAcc;
		var currAcc;
	},
	
	stopWatch: function(id) {
       if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	},
	
	onSuccess: function(acceleration) {
        
		alert(currAcc);
	
		prevAcc = currAcc;
		currAcc = acceleration;
		
		var element = document.getElementById("accelerometer");
		element.innerHTML = 'Acceleration X: ' + Math.round(acceleration.x) + '<br />' +
							'Acceleration Y: ' + Math.round(acceleration.y) + '<br />' +
							'Acceleration Z: ' + Math.round(acceleration.z) + '<br />' +
							'Timestamp: '      + Math.round(acceleration.timestamp) + '<br />';
	},
	
	
	onError: function() {
       alert('onError!');
	}
	
};
