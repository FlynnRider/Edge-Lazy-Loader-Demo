/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['34.9%','46.5%','30.9%','auto','auto','auto'],
            text:"Second Screen",
            align:"center",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["style", "top", '46.5%'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(226,232,248,1.00)'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["style", "left", '100%'],
            ["style", "width", '30.91%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         labels: {
            "Show": 0,
            "Hide": 2000
         },
         timeline: [
            { id: "eid10", tween: [ "style", "${_Text}", "width", '30.91%', { fromValue: '30.91%'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutCubic" },
            { id: "eid6", tween: [ "style", "${_Text}", "left", '34.91%', { fromValue: '100%'}], position: 0, duration: 1000, easing: "easeOutCubic" },
            { id: "eid11", tween: [ "color", "${_Text}", "color", 'rgba(226,232,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(226,232,248,1.00)'}], position: 0, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "SecondScreen");
