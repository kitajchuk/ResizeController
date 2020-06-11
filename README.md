ProperJS // ResizeController
============================

> Overkill resize handling for professionals.



## Installation

```shell
npm i properjs-resizecontroller --save-dev
```



## Usage
ResizeController doesn't use any native window or document event binding for resize handling. Rather, it uses requestAnimationFrame and supplies extra nifty scroll events for more control.
```javascript
import ResizeController from "properjs-resizecontroller";

// Window scroll handling (RAF)
const resizer = new ResizeController();

resizer.on( "idle", ( viewport ) => {
    console.log( "window idle", viewport );
});

resizer.on( "resize", ( viewport ) => {
    console.log( "window resize", viewport );
});

resizer.on( "resizeup", ( viewport ) => {
    console.log( "window resizeup", viewport );
});

resizer.on( "resizedown", ( viewport ) => {
    console.log( "window resizedown", viewport );
});

resizer.on( "resizewidth", ( viewport ) => {
    console.log( "window resizewidth", viewport );
});

resizer.on( "resizeheight", ( viewport ) => {
    console.log( "window resizeheight", viewport );
});
```
