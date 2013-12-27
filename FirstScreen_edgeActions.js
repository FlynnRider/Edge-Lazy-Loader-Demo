/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbolElement().hide();
         AdobeEdge.AppStateMachine.getFSM().transition();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
          sym.getComposition().getStage().getSymbolElement().show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseover", function(sym, e) {
         sym.stop("over");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mousedown", function(sym, e) {
         sym.stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseup", function(sym, e) {
         sym.stop("normal");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "click", function(sym, e) {
         AdobeEdge.AppStateMachine.getFSM().loadScreen();

      });
      //Edge binding end

   })("Button");
   //Edge symbol end:'Button'

})(jQuery, AdobeEdge, "FirstScreen");