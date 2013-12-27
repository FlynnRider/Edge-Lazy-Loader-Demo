/**
 * This class is intended to be used to provide a requirements matrix for the game.
 * User: Flynn Jones
 * Date: 7/9/13
 * Time: 11:45 AM
 */

LoadingConductor = {};
LoadingConductor.satifiedRequirments = 0;
LoadingConductor.LOADING_SCREEN_REQ = 1;
LoadingConductor.FIRST_SCREEN_REQ = 2;
LoadingConductor.SECOND_SCREEN_REQ = 4;

LoadingConductor.hasRequirementsBeenMet = function (requirements) {
    var satisfiedReqs = (LoadingConductor.satifiedRequirments & requirements);

    return (satisfiedReqs == requirements);
};

LoadingConductor.metRequirements = function (requirements) {
    LoadingConductor.satifiedRequirments |= requirements;
};

LoadingConductor.resetRequirements = function (requirements) {
    LoadingConductor.satifiedRequirments &= ~requirements;
};

LoadingConductor.enforceRequirement = function (requirements, callback) {

    //Retry 40 times for 20 seconds
    LoadingConductor.waitForRequirements(requirements, 40, true, callback);
};

LoadingConductor.waitForRequirements = function (requirements, retrysLeft, showRefreshMessage, callback) {

    if (retrysLeft >= 0) {
        if (LoadingConductor.hasRequirementsBeenMet(requirements)) {

            LoadingConductor.metRequirements(requirements);

            if (callback != undefined)
                callback();

        } else { //Requirements have still not been met
            //Half second retry intervals
            var reqCallback = callback;
            setTimeout(function () {
                LoadingConductor.waitForRequirements(requirements, --retrysLeft, showRefreshMessage, reqCallback);
            }, 500);
        }
    } else {//Show alert
        if (showRefreshMessage) {
            alert("Due to a slow connection, the game will need to refresh!");
            //Using this method so a POST isn't resent
            history.go(0);
        } else {
            console.warn("Requirement: " + requirements + " didn't get met!");
        }
    }
};

