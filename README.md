ResizeController
================

> Window resize / orientationchange event controller using request animation frame.



## Installation

```shell
npm install properjs-resizecontroller --save-dev
```


## Usage
```javascript
var ResizeController = require( "properjs-resizecontroller" ),
    resizer = new ResizeController();

// Bind event
resizer.on( "resize", function () {
    // Handle event here
});
```



## Events
- resize
- resizedown
- resizeup
- resizewidth
- resizeheight
- orientationchange
- orientationportrait
- orientationlandscape



## Methods
- on( event, handler )
- getViewport() -> { width, height, orient }
- isPortrait()
- isLandscape()
