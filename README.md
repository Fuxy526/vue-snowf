# vue-snowf
<p>
  <a href="https://www.npmjs.com/package/vue-snowf"><img src="https://img.shields.io/npm/v/vue-snowf.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-snowf"><img src="https://img.shields.io/npm/dt/vue-snowf.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-snowf"><img src="https://img.shields.io/npm/l/vue-snowf.svg" alt="License"></a>
</p>

> Snowfall component for Vue.js -- Let it snow on your page! ❄

![](preview.gif)

### Install

#### [npm](https://www.npmjs.com/package/vue-snowf):

```bash
npm install vue-snowf --save
```

### Usage
```js
import Snowf from 'vue-snowf';

// Add Snowf to the components
export default {
  components: {
	  Snowf
  },
  ...
}

// Insert component in the template
<Snowf
  :amount="50"
  :size="5"
  :speed="1.5"
  :wind="0"
  :opacity="0.8"
  :swing="1"
  :image="null"
  :zIndex="null"
  :resize="true"
  color="#fff"
/>
```

### Default Options

Argument | Type | Default Value | Description
:---: | :---: | :---: | ---
**amount** | *Number* | *50* | Number of snowflakes displayed at a time.
**size** | *Number* | *5* | Size of snowflakes.
**speed** | *Number* | *1.5* | Vertical speed of snowflakes. The larger, the snowflakes drop faster.
**wind** | *Number* | *0* | Horizontal wind power. Wind will blow right if this is a positive number, and a negative number makes wind blow left.
**color** | *String* | *'#fff'* | Color of snowflakes. This option accepts HEX or RGB color code, such as "#fff", "#ffffff", "rgb(255,255,255)".
**opacity** | *Number* | *0.8* | The max opacity of snowflakes. The plugin will generate snowflakes with different opacity from 0 to this number.
**swing** | *Number* | *1* | Swing offset of snowflakes. If you don't want them to swing, set this option as 0.
**image** | *String* | *null* | Set this option to replace the snowflake with your image.
**zIndex** | *Number* | *null* | Position of the canvas layer. Set the layer front or back by changing this value.
**resize** | *Boolean* | *true* | Adjust canvas size and snowflakes position automatically or not.

### Others

#### [snowf](https://github.com/Fuxy526/snowf.git) (use snowf with Vanilla JS)

#### [react-snowf](https://github.com/Fuxy526/react-snowf.git) (use snowf with React)

### Licence

vue-snowf is open source and released under the MIT Licence.

Copyright (c) 2017 Fuxy526