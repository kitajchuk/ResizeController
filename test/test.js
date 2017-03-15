var ResizeController = require( "../ResizeController" );
var controller = new ResizeController();


controller.on( "resize", function () {
    console.log( "resized" );
});

controller.on( "orientationchange", function () {
    console.log( "orientationchange" );
});
