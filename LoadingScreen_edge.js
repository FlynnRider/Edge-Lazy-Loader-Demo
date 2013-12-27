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
            rect:['42.2%','46.5%','28.4%','auto','auto','auto'],
            text:"Loading",
            align:"center",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Button',
            type:'rect',
            rect:['auto','38.5%','54.4%','36.3%','35.8%','auto']
         }],
         symbolInstances: [
         {
            id:'Button',
            symbolName:'Button'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_Button}": [
            ["style", "top", '51.3%'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '11.51%'],
            ["style", "right", '100%'],
            ["style", "left", 'auto'],
            ["style", "width", '28.6%']
         ],
         "${_Text}": [
            ["style", "top", '46.5%'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(226,232,248,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '100%'],
            ["style", "width", '28.41%']
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
            { id: "eid176", tween: [ "style", "${_Text}", "width", '28.41%', { fromValue: '28.41%'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "transform", "${_Button}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Button}", "height", '11.51%', { fromValue: '11.51%'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "color", "${_Text}", "color", 'rgba(226,232,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(226,232,248,1.00)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_Button}", "width", '28.6%', { fromValue: '28.6%'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Button}", "right", '35.7%', { fromValue: '100%'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "style", "${_Button}", "right", '100%', { fromValue: '35.7%'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid89", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutCubic" },
            { id: "eid3", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInCubic" },
            { id: "eid17", tween: [ "transform", "${_Button}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Text}", "left", '35.66%', { fromValue: '100%'}], position: 0, duration: 1000, easing: "easeOutCubic" },
            { id: "eid88", tween: [ "style", "${_Text}", "left", '100%', { fromValue: '35.66%'}], position: 2000, duration: 1000, easing: "easeInCubic" },
            { id: "eid100", tween: [ "style", "${_Button}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid99", tween: [ "style", "${_Button}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid138", tween: [ "style", "${_Button}", "top", '51.3%', { fromValue: '51.3%'}], position: 0, duration: 0 }         ]
      }
   }
},
"Button": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','100%','auto','auto'],
      id: 'Start_Game_Button_Backing',
      stroke: [0,'rgb(142, 170, 202)','solid'],
      type: 'rect',
      fill: ['rgba(153,0,153,1.00)']
   },
   {
      type: 'text',
      rect: ['0%','24%','20%','23.4%','auto','auto'],
      id: 'label',
      text: 'Load First Screen<br>',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',[250,'%'],'rgba(0,180,255,1.00)','bold','none','normal']
   },
   {
      rect: ['0px','0px','100%','100%','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(142, 170, 202)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(226,232,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(226,232,248,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "border-width", '0px'],
            ["style", "opacity", '0'],
            ["style", "height", '100%'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Start_Game_Button_Backing}": [
            ["color", "background-color", 'rgba(0,4,191,1.00)'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '100%'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_label}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(226,232,248,1.00)'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '24.02%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '49.95%'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '75.26%'],
            ["style", "width", '82.95%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "normal": 0,
            "over": 1000,
            "down": 2000
         },
         timeline: [
            { id: "eid114", tween: [ "color", "${_label}", "color", 'rgba(226,232,248,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(226,232,248,1.00)'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid630", tween: [ "style", "${_label}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid46", tween: [ "style", "${_Start_Game_Button_Backing}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_Start_Game_Button_Backing}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_Start_Game_Button_Backing}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Start_Game_Button_Backing}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_Start_Game_Button_Backing}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid631", tween: [ "style", "${_label}", "height", '49.95%', { fromValue: '49.95%'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid53", tween: [ "color", "${_Start_Game_Button_Backing}", "background-color", 'rgba(0,4,191,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,4,191,1.00)'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "color", "${_Start_Game_Button_Backing}", "background-color", 'rgba(0,18,220,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,4,191,1.00)'}], position: 1000, duration: 0 },
            { id: "eid56", tween: [ "color", "${_Start_Game_Button_Backing}", "background-color", 'rgba(0,9,156,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,18,220,1.00)'}], position: 2000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_label}", "font-size", '100%', { fromValue: '100%'}], position: 2000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "LoadingScreen");
