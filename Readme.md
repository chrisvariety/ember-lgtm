## ember-lgtm

Simple ember.js wrapper around the excellent [LGTM](https://github.com/square/lgtm).

LGTM does not reject the promise upon validation error, this does, making for saner promise flows.

Assumes you are using [ember-app-kit](https://github.com/stefanpenner/ember-app-kit) (more specifically [ember-jj-abrams-resolver](https://github.com/stefanpenner/ember-jj-abrams-resolver))

## Installation

Require lgtm-standalone.js however you like prior to requiring this script.

## Usage

```js
import validate from 'ember-lgtm';

validate(validator, validatee).then(function() {
  // success!
}).catch(function(resp) {
  // error!
  // do something with resp.errors
})
```

## LICENSE

MIT
