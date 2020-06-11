import Controller from "properjs-controller";



export default class ResizeController extends Controller {
    constructor () {
        super();

        this.currentView = this.getViewport();

        this.start();
    }


    getViewport () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }


    start () {
        this.go(() => {
            const currentView = this.getViewport();
            const isStill = (currentView.width === this.currentView.width && currentView.height === this.currentView.height);
            const isResize = (currentView.width !== this.currentView.width || currentView.height !== this.currentView.height);
            const isResizeUp = (currentView.width > this.currentView.width || currentView.height > this.currentView.height);
            const isResizeDown = (currentView.width < this.currentView.width || currentView.height < this.currentView.height);
            const isResizeWidth = (currentView.width !== this.currentView.width);
            const isResizeHeight = (currentView.height !== this.currentView.height);

            // Fire blanket resize event
            if ( isStill ) {
                this.fire( "idle", currentView );

            } else if ( isResize ) {
                this.fire( "resize", currentView );
            }

            // Fire resizeup and resizedown
            if ( isResizeDown ) {
                this.fire( "resizedown", currentView );

            } else if ( isResizeUp ) {
                this.fire( "resizeup", currentView );
            }

            // Fire resizewidth and resizeheight
            if ( isResizeWidth ) {
                this.fire( "resizewidth", currentView );

            } else if ( isResizeHeight ) {
                this.fire( "resizeheight", currentView );
            }

            this.currentView = currentView;
        });
    }
}
