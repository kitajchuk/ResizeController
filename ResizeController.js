/*!
 *
 * Window resize / orientationchange event controller
 *
 * @ResizeController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ResizeController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

    /**
     *
     * Window resize / orientationchange event controller
     * @constructor ResizeController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires resize
     * @fires resizedown
     * @fires resizeup
     * @fires resizewidth
     * @fires resizeheight
     * @fires orientationchange
     * @fires orientationportrait
     * @fires orientationlandscape
     *
     */
    var ResizeController = function () {
        Controller.call( this );

        this.currentView = this.getViewport();
        this.hasOrientation = ("orientation" in window);

        this.start();
    };

    ResizeController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var currentView = self.getViewport(),
                isStill = (currentView.width === self.currentView.width && currentView.height === self.currentView.height),
                isResize = (currentView.width !== self.currentView.width || currentView.height !== self.currentView.height),
                isResizeUp = (currentView.width > self.currentView.width || currentView.height > self.currentView.height),
                isResizeDown = (currentView.width < self.currentView.width || currentView.height < self.currentView.height),
                isResizeWidth = (currentView.width !== self.currentView.width),
                isResizeHeight = (currentView.height !== self.currentView.height),
                isOrientation = (currentView.orient !== self.currentView.orient),
                isOrientationPortrait = (currentView.orient !== self.currentView.orient && currentView.orient !== 90),
                isOrientationLandscape = (currentView.orient !== self.currentView.orient && currentView.orient === 90);

            // Fire blanket resize event
            if ( isResize ) {
                /**
                 *
                 * @event resize
                 *
                 */
                self.fire( "resize" );
            }

            // Fire resizeup and resizedown
            if ( isResizeDown ) {
                /**
                 *
                 * @event resizedown
                 *
                 */
                self.fire( "resizedown" );

            } else if ( isResizeUp ) {
                /**
                 *
                 * @event resizeup
                 *
                 */
                self.fire( "resizeup" );
            }

            // Fire resizewidth and resizeheight
            if ( isResizeWidth ) {
                /**
                 *
                 * @event resizewidth
                 *
                 */
                self.fire( "resizewidth" );

            } else if ( isResizeHeight ) {
                /**
                 *
                 * @event resizeheight
                 *
                 */
                self.fire( "resizeheight" );
            }

            // Fire blanket orientationchange event
            if ( isOrientation ) {
                /**
                 *
                 * @event orientationchange
                 *
                 */
                self.fire( "orientationchange" );
            }

            // Fire orientationportrait and orientationlandscape
            if ( isOrientationPortrait ) {
                /**
                 *
                 * @event orientationportrait
                 *
                 */
                self.fire( "orientationportrait" );

            } else if ( isOrientationLandscape ) {
                /**
                 *
                 * @event orientationlandscape
                 *
                 */
                self.fire( "orientationlandscape" );
            }

            self.currentView = currentView;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window viewport specs
     * @memberof ResizeController
     * @method getViewport
     * @returns object
     *
     */
    ResizeController.prototype.getViewport = function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            orient: this.hasOrientation ? Math.abs( window.orientation ) : null
        };
    };

    /**
     *
     * Tells if the viewport is in protrait mode
     * @memberof ResizeController
     * @method isPortrait
     * @returns boolean
     *
     */
    ResizeController.prototype.isPortrait = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient !== 90);
    };

    /**
     *
     * Tells if the viewport is in landscape mode
     * @memberof ResizeController
     * @method isLandscape
     * @returns boolean
     *
     */
    ResizeController.prototype.isLandscape = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient === 90);
    };


    return ResizeController;

});
