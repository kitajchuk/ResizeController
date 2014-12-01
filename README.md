ResizeController
================

> Window resize / orientationchange event controller using request animation frame.



## Installation

```shell
npm install properjs-resizecontroller
```


## Usage
```javascript
var resizer = new ResizeController();

// Bind event
resizer.on( "resize", function () {
    // Handle event here
});
```



## Events
- resize
- resizedown
- resizeup
- orientationchange
- orientationportrait
- orientationlandscape



## Methods
- on()
- getViewport()
- isPortrait()
- isLandscape()