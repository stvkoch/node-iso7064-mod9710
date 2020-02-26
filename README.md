# Iso7064 Mod 97 10 [![Build Status](https://travis-ci.com/stvkoch/node-iso7064-mod9710.svg?branch=master)](https://travis-ci.com/stvkoch/node-iso7064-mod9710)

> Calculate and validate numbers to avoid digits mistakes, common used by IBAN and NIB.


## Install

```
$ npm install node-iso7064-mod9710
```


## Usage

```js
import { Mod9710 } from 'node-iso7064-mod9710';

Mod9710.verify('123456789');
//=> true | false
```


## API

### verify(number : string) : boolean

#### number

Type: `string`

IBAN or NIB number or any number generated with check digit mod97-10
