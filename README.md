# Repro of Chrome v129 circular import bug

The following code works for Chrome v128, FireFox, Safari, and Node.js v20. But **stops working for Chrome v129** `Version 129.0.6668.59 (Official Build) (arm64)`.

[Online demo](https://repro-chrome-129-circular-tla.netlify.app/)

When the entry file is `foo.js`, with the following content:

```js
// bar.js
import { define } from './foo.js'

export default define('It works!')
```

```js
// foo.js
export function define(foo) {
  return foo.toUpperCase()
}

const getter = () => import('./bar.js')

await 1

getter()
  .then(r => {
    // this will never be resolved
  })
  .catch(e => {
    // this either
  })
```

Note that if remove the `await 1`, it will work again.

### Original Issue

- https://github.com/nuxt/devtools/issues/723
