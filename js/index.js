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
		
		alert('startWatch');
	
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
        
 		 
		 // Display the raw acceleration data
  		var rawAcceleration = "[" +  Math.round(acceleration.x) + ", " + 
    	Math.round(acceleration.y) + ", " + Math.round(acceleration.z) + "]";
		
		// Z is the acceleration in the Z axis, and if the device is facing up or down
	  var facingUp = -1;
	  if (acceleration.z > 0) {
		facingUp = +1;
	  }
	  
	  // Convert the value from acceleration to degrees acceleration.x|y is the 
	  // acceleration according to gravity, we'll assume we're on Earth and divide 
	  // by 9.81 (earth gravity) to get a percentage value, and then multiply that 
	  // by 90 to convert to degrees.                                
	  var tiltLR = Math.round(((acceleration.x) / 9.81) * -90);
	  var tiltFB = Math.round(((acceleration.y + 9.81) / 9.81) * 90 * facingUp);
	  
	  // Display the acceleration and calculated values
	  document.getElementById("accelerometer").innerHTML = "rawAcceleration  :  "+rawAcceleration+"<br />"+
	  "moCalcTiltLR  :  "+tiltLR+"<br />"+
	  "moCalcTiltFB  :  "+tiltFB+"<br />";
	  
	  
	  // Apply the 2D rotation and 3D rotation to the image
	  var rotation = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB) + "deg)";
	  document.getElementById("square").style.webkitTransform = rotation;
		 
	},
	
	
	onError: function() {
       alert('onError!');
	}
	
};
