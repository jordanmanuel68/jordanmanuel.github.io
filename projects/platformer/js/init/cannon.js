(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onTop(400);
        cannon.create.onTop(100);
        cannon.create.onTop(200);
        cannon.create.onTop(300);
        cannon.create.onTop(500);
        cannon.create.onTop(900);
        cannon.create.onTop(800);
        cannon.create.onTop(700);
        cannon.create.onTop(600);
        cannon.create.onTop(0);
        cannon.create.onRight(0);
        cannon.create.onRight(150);
        cannon.create.onRight(300);
        cannon.create.onRight(450);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
