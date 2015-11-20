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

    var Controller = require( "properjs-controller" ),

        // Orientation?
        _hasOrientation = ("orientation" in window),

        // Current window viewport
        _currentView = null,

        // Singleton
        _instance = null;

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
        // Singleton
        if ( !_instance ) {
            _instance = this;

            // Initial viewport settings
            _currentView = _instance.getViewport();

            // Call on parent cycle
            this.go(function () {
                var currentView = _instance.getViewport(),
                    isStill = (currentView.width === _currentView.width && currentView.height === _currentView.height),
                    isResize = (currentView.width !== _currentView.width || currentView.height !== _currentView.height),
                    isResizeUp = (currentView.width > _currentView.width || currentView.height > _currentView.height),
                    isResizeDown = (currentView.width < _currentView.width || currentView.height < _currentView.height),
                    isResizeWidth = (currentView.width !== _currentView.width),
                    isResizeHeight = (currentView.height !== _currentView.height),
                    isOrientation = (currentView.orient !== _currentView.orient),
                    isOrientationPortrait = (currentView.orient !== _currentView.orient && currentView.orient !== 90),
                    isOrientationLandscape = (currentView.orient !== _currentView.orient && currentView.orient === 90);

                // Fire blanket resize event
                if ( isResize ) {
                    /**
                     *
                     * @event resize
                     *
                     */
                    _instance.fire( "resize" );
                }

                // Fire resizeup and resizedown
                if ( isResizeDown ) {
                    /**
                     *
                     * @event resizedown
                     *
                     */
                    _instance.fire( "resizedown" );

                } else if ( isResizeUp ) {
                    /**
                     *
                     * @event resizeup
                     *
                     */
                    _instance.fire( "resizeup" );
                }

                // Fire resizewidth and resizeheight
                if ( isResizeWidth ) {
                    /**
                     *
                     * @event resizewidth
                     *
                     */
                    _instance.fire( "resizewidth" );

                } else if ( isResizeHeight ) {
                    /**
                     *
                     * @event resizeheight
                     *
                     */
                    _instance.fire( "resizeheight" );
                }

                // Fire blanket orientationchange event
                if ( isOrientation ) {
                    /**
                     *
                     * @event orientationchange
                     *
                     */
                    _instance.fire( "orientationchange" );
                }

                // Fire orientationportrait and orientationlandscape
                if ( isOrientationPortrait ) {
                    /**
                     *
                     * @event orientationportrait
                     *
                     */
                    _instance.fire( "orientationportrait" );

                } else if ( isOrientationLandscape ) {
                    /**
                     *
                     * @event orientationlandscape
                     *
                     */
                    _instance.fire( "orientationlandscape" );
                }

                _currentView = currentView;
            });
        }

        return _instance;
    };

    ResizeController.prototype = new Controller();

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
            orient: _hasOrientation ? Math.abs( window.orientation ) : null
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