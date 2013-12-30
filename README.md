Dynamically Loading Edge Animate Template
=========================================

This project demonstrates how to load Edge Animate compositions on demand. 
You can view a more detailed description [here.](http://flynnjones.wordpress.com/2013/01/02/a-new-way-to-dynamically-load-adobe-edge-animate-compositions/)

Edge Animate Layout
===================
 
 * The demo starts from index.html
 * There are 3 Edge Animate 1.5 projects
 * It references [Jake Gordon's state machine](https://github.com/jakesgordon/javascript-state-machine)
 * [yepnope](http://yepnopejs.com/) is used for composition loading
 * The state machine and loading logic are in `AppStateMachine.js`
 
State Machine Structure
=======================

![State Machine](http://flynnjones.files.wordpress.com/2013/12/animatestatemachine1.png)


Implementation
======

Below is an example of the a transition between the loading screen and the first screen:

    onleaveloading: function (event, from, to) {
        this.ASM.startHideCompAnimation("LoadingScreen");
    
        return StateMachine.ASYNC;
    },
    
    //content selection
    onenterfirstScreen: function (event, from, to) {
    
        //Start loading the first screen
        if(!LoadingConductor.hasRequirementsBeenMet(LoadingConductor.FIRST_SCREEN_REQ)) {
            yepnope( {
                load:"FirstScreen_edgePreload.js",
                callback: function() {
    
                }
            });
        }
    
        this.ASM.preloadComposition("FirstScreen", LoadingConductor.FIRST_SCREEN_REQ);
    },

>> _NOTE: The function `LoadingConductor.hasRequirementsBeenMet` is used to determine if the
   composition was loaded and calls 'yepnope' if it doesn't meet the requirement.

The `preloadComposition` function will wait until the composition has been loaded 
then start the Show animation in the timeline. To start the transition from the loading state 
to the first screen state, the following line is called at the end of the Show 
animation in the Loading Screen composition:

    AdobeEdge.AppStateMachine.getFSM().start();

Then to allow the state machine to enter the first screen, the following line is 
called at the end of the Hide animation in the Loading Screen:

    AdobeEdge.AppStateMachine.getFSM().transition();

