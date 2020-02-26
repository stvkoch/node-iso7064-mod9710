# Iso7064 Mod 97 10 [![Build Status](https://travis-ci.com/stvkoch/node-iso7064-mod9710.svg?branch=master)](https://travis-ci.com/stvkoch/node-iso7064-mod9710)


> Calculate and validate numbers to avoid types mistakes, common used by IBAN and NIB.


## Install

```
$ npm install node-iso7064-mod9710
```


## Usage

```js
import Mod9710 from 'node-iso7064-mod9710';

Mod9710.encode('794');
//=> 79444

Mod9710.verify('79444');
//=> true

Mod9710.verify('79544');
//=> false

Mod9710.getCheck('79444');
//=> 44

Mod9710.getData('79444');
//=> 794

Mod9710.checkCode('794');
//=> 44
```


## API

### verify(number : string) : boolean

Verify if the number is a valid number, well typed.

#### number

Type: `string`

IBAN or NIB number or any number generated with check digit mod97-10


### encode(number : string) : string

Encode the number with a check digits

#### number

Type: `string`

IBAN or NIB number or any number generated with check digit mod97-10


### getCheck(number : string) : string

Return the check digits computed by encode method

#### number

Type: `string`

IBAN or NIB number or any number generated with check digit mod97-10



### getData(number : string) : string

Return the number without the check digit

#### number

Type: `string`

IBAN or NIB number or any number generated with check digit mod97-10

