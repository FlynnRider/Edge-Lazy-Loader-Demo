/*********************************************************************************************************************************
 * This class' responsibility is to manage the different screen states of a game.
 * Required js files: state-machine.js
 ********************************************************************************************************************************/
function AppStateMachine(){
    var self = this;
    var fsm = StateMachine.create({
        initial: 'none',

        events: [
          { name: 'start', from: 'none', to: 'loading' },
          { name: 'loadScreen', from: 'loading', to: 'firstScreen' },
          { name: 'loadScreen', from: 'firstScreen', to: 'secondScreen' }
        ],

        callbacks: {
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

            onleavefirstScreen: function (event, from, to) {
                this.ASM.startHideCompAnimation( "FirstScreen");

                return StateMachine.ASYNC;
            },

            //Quiz Selection
            onentersecondScreen: function (event, from, to) {

                if(!LoadingConductor.hasRequirementsBeenMet(LoadingConductor.SECOND_SCREEN_REQ)) {
                    yepnope( {
                        load:"SecondScreen_edgePreload.js",
                        callback: function() {
                        }
                    });
                }

                this.ASM.preloadComposition("SecondScreen", LoadingConductor.SECOND_SCREEN_REQ);
            },

            onleavesecondScreen: function (event, from, to) {
                this.ASM.startHideCompAnimation("SecondScreen");

                return StateMachine.ASYNC;
            },

            onchangestate: function (event, from, to) { console.log("CHANGED STATE: " + from + " to " + to); }
        }
    });

    return {

        initialize:function() {
            //Set Finite State Machine external instances
            fsm.ASM = this;
        },

        getFSM:function() {
         return fsm;
        },

        showComposition: function (nextScreen) {
            var currentComp = AdobeEdge.loadedScreens[nextScreen];
            var currentStage = currentComp.getStage();

            currentStage.getSymbolElement().show();

            this.showSymbol(currentStage);
        },

        preloadComposition: function(compositionId, requirements){

            //If the images have been loaded
            if(LoadingConductor.hasRequirementsBeenMet(requirements)) {
                self.showComposition(compositionId);
            } else {
                 LoadingConductor.enforceRequirement(requirements, function () {self.showComposition(compositionId);});
            }
        },

        startHideCompAnimation: function(currentScreen) {
            var currentComp = AdobeEdge.loadedScreens[currentScreen];
            var currentStage = currentComp.getStage();

            this.hideSymbol(currentStage);
        },

        hideSymbol: function(sym) {
            this.playTransition(sym, "Hide", 5);
        },

        showSymbol: function(sym) {
            this.playTransition(sym, "Show", 5);
        },

        playTransition: function (sym, label, depth) {
            var position = sym.getLabelPosition(label);

            sym.play(position);
        }
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL CLASS CONSTANTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

