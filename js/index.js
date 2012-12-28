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
		var firstCheck = false;
		var startVal;
		var difference;
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
        // Report the event in the console
		alert("firstCheck: ");
		// Update acceleration every 3 seconds
		var options = { frequency: 3000 };		
		
		watchID = navigator.compass.watchHeading(this.onSuccess, this.onError, options);
		
		firstCheck = true;
		
    },
	
	// Stop watching the acceleration
	stopWatch: function() {
        if (watchID) 
		{
			navigator.compass.clearWatch(watchID);
			watchID = null;
		}
    },
	
	// onSuccess: Success to get the acceleration
	onSuccess: function(heading) {
        
		currVal = heading.magneticHeading;	
		
		if(firstCheck)
		{
			startVal = currVal;
		}
			
		firstCheck = false;
		
		difference = startVal-currVal;
		
		var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading + '<br />';
		
		/*'firstCheck: ' + firstCheck + '<br />'+
		'startVal: ' + startVal + '<br />'+
		'currVal: ' + currVal + '<br />'+
		'difference: ' + difference + '<br />'*/

		app.onMoveBox();
		
    },	
	
	
	// onError: Failed to get the acceleration
	onError: function() {
        alert('Compass error: ' + compassError.code);
    },
	
	onMoveBox: function() {
		
		if (window.DeviceOrientationEvent) {
		 alert("DeviceOrientation is supported");
		  window.addEventListener('deviceorientation', function(eventData) {
				var LR = eventData.gamma;
				var FB = eventData.beta;
				var DIR = eventData.alpha;
				this.deviceOrientationHandler(LR, FB, DIR);
			}, false);
		} else {
			alert("Not supported on your device or browser.  Sorry.");
		}		
		
	},
	
	deviceOrientationHandler: function(LR, FB, DIR) {
		alert("deviceOrientationHandler");
		 //for webkit browser
		   document.getElementById("square").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
		 
		   //for HTML5 standard-compliance
		   document.getElementById("square").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
	}
};
