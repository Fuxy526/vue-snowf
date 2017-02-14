# vue-snowf
Snowfall component for Vue.js, let it snow on your page! ❄

## Install
```bash
npm install vue-snowf --save
```

## Usage
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
  :swing="true"
  :swingOffset="1"
  :zIndex="0"
  color="#fff"
  image=""
/>
```