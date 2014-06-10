# lame-win

Encode mp3 vbr file on Windows with <a href="http://www.rarewares.org/mp3-lame-bundle.php" target="_blank">LAME 3.98.4 for OSX 64 bits (Snow Leopard)</a>

No option, just best vbr quality

## Install

Install with <a href="http://nodejs.org/" target="_blank">npm</a> directly from the <a href="https://github.com/jeromedecoster/lame-osx" target="_blank">github repository</a>

```
npm install --save-dev jeromedecoster/lame-osx
```

## API

```js
lame(src, dest, cb(err));
```

or

```js
lame(src, cb(err));
```

## Example

```js
var lame = require('lame-osx');

function done(err) {
  if (err) throw err;
  console.log('encoding completed');
}

lame('./source.wav', './dest.mp3', done);
```

or

```js
var lame = require('lame-osx');

function done(err) {
  if (err) throw err;
  console.log('encoding completed');
}

// create ./test.mp3
lame('./test.wav', done);
```
